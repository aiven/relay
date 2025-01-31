ARG DOCKER_ARCH=amd64

##################
### Deps stage ###
##################

FROM $DOCKER_ARCH/rust:slim-buster AS relay-deps

ARG DOCKER_ARCH
ARG BUILD_ARCH=x86_64

ENV DOCKER_ARCH=${DOCKER_ARCH}
ENV BUILD_ARCH=${BUILD_ARCH}

ENV BUILD_TARGET=${BUILD_ARCH}-unknown-linux-gnu
# For native-tls
ENV OPENSSL_DIR=/usr/local/build/$BUILD_TARGET
# For rdkafka
ENV OPENSSL_ROOT_DIR=/usr/local/build/$BUILD_TARGET
ENV OPENSSL_STATIC=1

RUN apt-get update \
    && apt-get install --no-install-recommends -y \
    curl build-essential git zip cmake \
    # below required for sentry-native
    clang libcurl4-openssl-dev \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /work

#####################
### Builder stage ###
#####################

FROM getsentry/sentry-cli:1 AS sentry-cli
FROM relay-deps AS relay-builder

# ssl and processing are required for basic functionality in onprem
# kafka-ssl is for free since we already have OpenSSL because we are on Linux
ARG RELAY_FEATURES=ssl,kafka-ssl,processing,crash-handler
ENV RELAY_FEATURES=${RELAY_FEATURES}

COPY --from=sentry-cli /bin/sentry-cli /bin/sentry-cli
COPY . .

# BUILD IT!
RUN make build-linux-release TARGET=${BUILD_TARGET} RELAY_FEATURES=${RELAY_FEATURES}

RUN cp ./target/$BUILD_TARGET/release/relay /bin/relay \
    && zip /opt/relay-debug.zip target/$BUILD_TARGET/release/relay.debug

# Collect source bundle
RUN sentry-cli --version \
    && sentry-cli difutil bundle-sources ./target/$BUILD_TARGET/release/relay.debug \
    && mv ./target/$BUILD_TARGET/release/relay.src.zip /opt/relay.src.zip

###################
### Final stage ###
###################

FROM debian:buster-slim

RUN apt-get update \
    && apt-get install -y ca-certificates gosu curl --no-install-recommends \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

ENV \
    RELAY_UID=10001 \
    RELAY_GID=10001

# Create a new user and group with fixed uid/gid
RUN groupadd --system relay --gid $RELAY_GID \
    && useradd --system --gid relay --uid $RELAY_UID relay

RUN mkdir /work /etc/relay \
    && chown relay:relay /work /etc/relay
VOLUME ["/work", "/etc/relay"]
WORKDIR /work

EXPOSE 3000

COPY --from=relay-builder /bin/relay /bin/relay
COPY --from=relay-builder /opt/relay-debug.zip /opt/relay.src.zip /opt/

COPY ./docker-entrypoint.sh /
ENTRYPOINT ["/bin/bash", "/docker-entrypoint.sh"]
CMD ["run"]
