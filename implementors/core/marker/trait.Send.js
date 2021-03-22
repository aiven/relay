(function() {var implementors = {};
implementors["document_metrics"] = [{"text":"impl Send for SchemaFormat","synthetic":true,"types":[]},{"text":"impl Send for ParseSchemaFormatError","synthetic":true,"types":[]},{"text":"impl Send for MetricType","synthetic":true,"types":[]},{"text":"impl !Send for MetricPath","synthetic":true,"types":[]},{"text":"impl Send for Metric","synthetic":true,"types":[]},{"text":"impl Send for Cli","synthetic":true,"types":[]}];
implementors["generate_schema"] = [{"text":"impl Send for SchemaFormat","synthetic":true,"types":[]},{"text":"impl Send for ParseSchemaFormatError","synthetic":true,"types":[]},{"text":"impl Send for Cli","synthetic":true,"types":[]}];
implementors["process_event"] = [{"text":"impl Send for Cli","synthetic":true,"types":[]}];
implementors["relay"] = [{"text":"impl Send for THEME","synthetic":true,"types":[]}];
implementors["relay_auth"] = [{"text":"impl Send for RelayVersion","synthetic":true,"types":[]},{"text":"impl Send for ParseRelayVersionError","synthetic":true,"types":[]},{"text":"impl Send for KeyParseError","synthetic":true,"types":[]},{"text":"impl Send for UnpackError","synthetic":true,"types":[]},{"text":"impl Send for SignatureHeader","synthetic":true,"types":[]},{"text":"impl Send for PublicKey","synthetic":true,"types":[]},{"text":"impl Send for SecretKey","synthetic":true,"types":[]},{"text":"impl Send for Registration","synthetic":true,"types":[]},{"text":"impl Send for SignedRegisterState","synthetic":true,"types":[]},{"text":"impl Send for RegisterState","synthetic":true,"types":[]},{"text":"impl Send for RegisterRequest","synthetic":true,"types":[]},{"text":"impl Send for RegisterChallenge","synthetic":true,"types":[]},{"text":"impl Send for RegisterResponse","synthetic":true,"types":[]}];
implementors["relay_cabi"] = [{"text":"impl Send for RelayPublicKey","synthetic":true,"types":[]},{"text":"impl Send for RelaySecretKey","synthetic":true,"types":[]},{"text":"impl !Send for RelayKeyPair","synthetic":true,"types":[]},{"text":"impl Send for RelayRegisterRequest","synthetic":true,"types":[]},{"text":"impl Send for RelayUuid","synthetic":true,"types":[]},{"text":"impl !Send for RelayBuf","synthetic":true,"types":[]},{"text":"impl Send for RelayErrorCode","synthetic":true,"types":[]},{"text":"impl Send for RelayGeoIpLookup","synthetic":true,"types":[]},{"text":"impl Send for RelayStoreNormalizer","synthetic":true,"types":[]},{"text":"impl Send for GlobFlags","synthetic":true,"types":[]},{"text":"impl Send for RelayStr","synthetic":false,"types":[]}];
implementors["relay_common"] = [{"text":"impl Send for MetricsClient","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for UpsertingLazyCell&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; Send for LazyCellRef&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send + Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for EventType","synthetic":true,"types":[]},{"text":"impl Send for ParseEventTypeError","synthetic":true,"types":[]},{"text":"impl Send for DataCategory","synthetic":true,"types":[]},{"text":"impl Send for SpanStatus","synthetic":true,"types":[]},{"text":"impl Send for ParseSpanStatusError","synthetic":true,"types":[]},{"text":"impl Send for GlobOptions","synthetic":true,"types":[]},{"text":"impl Send for ParseProjectKeyError","synthetic":true,"types":[]},{"text":"impl Send for ProjectKey","synthetic":true,"types":[]},{"text":"impl Send for RetryBackoff","synthetic":true,"types":[]},{"text":"impl Send for UnixTimestamp","synthetic":true,"types":[]},{"text":"impl Send for ParseUnixTimestampError","synthetic":true,"types":[]},{"text":"impl Send for Glob","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for GlobMatcher&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["relay_config"] = [{"text":"impl Send for ByteSize","synthetic":true,"types":[]},{"text":"impl Send for ConfigError","synthetic":true,"types":[]},{"text":"impl Send for ConfigErrorKind","synthetic":true,"types":[]},{"text":"impl Send for OverridableConfig","synthetic":true,"types":[]},{"text":"impl Send for Credentials","synthetic":true,"types":[]},{"text":"impl Send for RelayMode","synthetic":true,"types":[]},{"text":"impl Send for Relay","synthetic":true,"types":[]},{"text":"impl Send for HttpEncoding","synthetic":true,"types":[]},{"text":"impl Send for KafkaTopic","synthetic":true,"types":[]},{"text":"impl Send for TopicNames","synthetic":true,"types":[]},{"text":"impl Send for KafkaConfigParam","synthetic":true,"types":[]},{"text":"impl Send for Processing","synthetic":true,"types":[]},{"text":"impl Send for Outcomes","synthetic":true,"types":[]},{"text":"impl Send for MinimalConfig","synthetic":true,"types":[]},{"text":"impl Send for Config","synthetic":true,"types":[]},{"text":"impl Send for UpstreamError","synthetic":true,"types":[]},{"text":"impl Send for UpstreamParseError","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for UpstreamDescriptor&lt;'a&gt;","synthetic":true,"types":[]}];
implementors["relay_ffi"] = [{"text":"impl Send for Panic","synthetic":true,"types":[]}];
implementors["relay_filter"] = [{"text":"impl Send for SchemeDomainPort","synthetic":true,"types":[]},{"text":"impl Send for GlobPatterns","synthetic":true,"types":[]},{"text":"impl Send for FilterStatKey","synthetic":true,"types":[]},{"text":"impl Send for FilterConfig","synthetic":true,"types":[]},{"text":"impl Send for LegacyBrowser","synthetic":true,"types":[]},{"text":"impl Send for ClientIpsFilterConfig","synthetic":true,"types":[]},{"text":"impl Send for CspFilterConfig","synthetic":true,"types":[]},{"text":"impl Send for ErrorMessagesFilterConfig","synthetic":true,"types":[]},{"text":"impl Send for ReleasesFilterConfig","synthetic":true,"types":[]},{"text":"impl Send for LegacyBrowsersFilterConfig","synthetic":true,"types":[]},{"text":"impl Send for FiltersConfig","synthetic":true,"types":[]}];
implementors["relay_general"] = [{"text":"impl&lt;'a&gt; Send for PiiAttachmentsProcessor&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for ScrubEncodings","synthetic":true,"types":[]},{"text":"impl Send for CompiledPiiConfig","synthetic":true,"types":[]},{"text":"impl Send for Pattern","synthetic":true,"types":[]},{"text":"impl Send for PatternRule","synthetic":true,"types":[]},{"text":"impl Send for MultipleRule","synthetic":true,"types":[]},{"text":"impl Send for AliasRule","synthetic":true,"types":[]},{"text":"impl Send for RedactPairRule","synthetic":true,"types":[]},{"text":"impl Send for RuleType","synthetic":true,"types":[]},{"text":"impl Send for RuleSpec","synthetic":true,"types":[]},{"text":"impl Send for Vars","synthetic":true,"types":[]},{"text":"impl Send for PiiConfig","synthetic":true,"types":[]},{"text":"impl Send for DataScrubbingConfig","synthetic":true,"types":[]},{"text":"impl Send for ScrubMinidumpError","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for PiiProcessor&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for ReplaceRedaction","synthetic":true,"types":[]},{"text":"impl Send for Redaction","synthetic":true,"types":[]},{"text":"impl Send for UnknownValueTypeError","synthetic":true,"types":[]},{"text":"impl Send for ValueType","synthetic":true,"types":[]},{"text":"impl Send for MaxChars","synthetic":true,"types":[]},{"text":"impl Send for BagSize","synthetic":true,"types":[]},{"text":"impl Send for Pii","synthetic":true,"types":[]},{"text":"impl Send for FieldAttrs","synthetic":true,"types":[]},{"text":"impl Send for CharacterSet","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for ProcessingState&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for Path&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for Chunk&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for SelectorPathItem","synthetic":true,"types":[]},{"text":"impl Send for SelectorSpec","synthetic":true,"types":[]},{"text":"impl Send for Breadcrumb","synthetic":true,"types":[]},{"text":"impl Send for ClientSdkPackage","synthetic":true,"types":[]},{"text":"impl Send for ClientSdkInfo","synthetic":true,"types":[]},{"text":"impl Send for DeviceContext","synthetic":true,"types":[]},{"text":"impl Send for OsContext","synthetic":true,"types":[]},{"text":"impl Send for RuntimeContext","synthetic":true,"types":[]},{"text":"impl Send for AppContext","synthetic":true,"types":[]},{"text":"impl Send for BrowserContext","synthetic":true,"types":[]},{"text":"impl Send for GpuContext","synthetic":true,"types":[]},{"text":"impl Send for TraceId","synthetic":true,"types":[]},{"text":"impl Send for SpanId","synthetic":true,"types":[]},{"text":"impl Send for TraceContext","synthetic":true,"types":[]},{"text":"impl Send for Context","synthetic":true,"types":[]},{"text":"impl Send for ContextInner","synthetic":true,"types":[]},{"text":"impl Send for Contexts","synthetic":true,"types":[]},{"text":"impl Send for NativeImagePath","synthetic":true,"types":[]},{"text":"impl Send for SystemSdkInfo","synthetic":true,"types":[]},{"text":"impl Send for AppleDebugImage","synthetic":true,"types":[]},{"text":"impl Send for DebugId","synthetic":true,"types":[]},{"text":"impl Send for CodeId","synthetic":true,"types":[]},{"text":"impl Send for NativeDebugImage","synthetic":true,"types":[]},{"text":"impl Send for DebugImage","synthetic":true,"types":[]},{"text":"impl Send for DebugMeta","synthetic":true,"types":[]},{"text":"impl Send for EventId","synthetic":true,"types":[]},{"text":"impl Send for ExtraValue","synthetic":true,"types":[]},{"text":"impl Send for EventProcessingError","synthetic":true,"types":[]},{"text":"impl Send for GroupingConfig","synthetic":true,"types":[]},{"text":"impl Send for Event","synthetic":true,"types":[]},{"text":"impl Send for Exception","synthetic":true,"types":[]},{"text":"impl Send for Fingerprint","synthetic":true,"types":[]},{"text":"impl Send for LogEntry","synthetic":true,"types":[]},{"text":"impl Send for Message","synthetic":true,"types":[]},{"text":"impl Send for Measurements","synthetic":true,"types":[]},{"text":"impl Send for CError","synthetic":true,"types":[]},{"text":"impl Send for MachException","synthetic":true,"types":[]},{"text":"impl Send for PosixSignal","synthetic":true,"types":[]},{"text":"impl Send for MechanismMeta","synthetic":true,"types":[]},{"text":"impl Send for Mechanism","synthetic":true,"types":[]},{"text":"impl Send for SampleRate","synthetic":true,"types":[]},{"text":"impl Send for Metrics","synthetic":true,"types":[]},{"text":"impl Send for Cookies","synthetic":true,"types":[]},{"text":"impl Send for HeaderName","synthetic":true,"types":[]},{"text":"impl Send for HeaderValue","synthetic":true,"types":[]},{"text":"impl Send for Headers","synthetic":true,"types":[]},{"text":"impl Send for Query","synthetic":true,"types":[]},{"text":"impl Send for Request","synthetic":true,"types":[]},{"text":"impl Send for Csp","synthetic":true,"types":[]},{"text":"impl Send for ExpectCt","synthetic":true,"types":[]},{"text":"impl Send for Hpkp","synthetic":true,"types":[]},{"text":"impl Send for ExpectStaple","synthetic":true,"types":[]},{"text":"impl Send for SecurityReportType","synthetic":true,"types":[]},{"text":"impl Send for SessionStatus","synthetic":true,"types":[]},{"text":"impl Send for ParseSessionStatusError","synthetic":true,"types":[]},{"text":"impl Send for SessionAttributes","synthetic":true,"types":[]},{"text":"impl Send for SessionUpdate","synthetic":true,"types":[]},{"text":"impl Send for SessionAggregateItem","synthetic":true,"types":[]},{"text":"impl Send for SessionAggregates","synthetic":true,"types":[]},{"text":"impl Send for Span","synthetic":true,"types":[]},{"text":"impl Send for Frame","synthetic":true,"types":[]},{"text":"impl Send for FrameVars","synthetic":true,"types":[]},{"text":"impl Send for FrameData","synthetic":true,"types":[]},{"text":"impl Send for RawStacktrace","synthetic":true,"types":[]},{"text":"impl Send for Stacktrace","synthetic":true,"types":[]},{"text":"impl Send for TagEntry","synthetic":true,"types":[]},{"text":"impl Send for Tags","synthetic":true,"types":[]},{"text":"impl Send for TemplateInfo","synthetic":true,"types":[]},{"text":"impl Send for ThreadId","synthetic":true,"types":[]},{"text":"impl Send for Thread","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Values&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for PairList&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for InvalidRegVal","synthetic":true,"types":[]},{"text":"impl Send for RegVal","synthetic":true,"types":[]},{"text":"impl Send for Addr","synthetic":true,"types":[]},{"text":"impl Send for IpAddr","synthetic":true,"types":[]},{"text":"impl Send for ParseLevelError","synthetic":true,"types":[]},{"text":"impl Send for Level","synthetic":true,"types":[]},{"text":"impl Send for LenientString","synthetic":true,"types":[]},{"text":"impl Send for JsonLenientString","synthetic":true,"types":[]},{"text":"impl Send for Timestamp","synthetic":true,"types":[]},{"text":"impl Send for Geo","synthetic":true,"types":[]},{"text":"impl Send for User","synthetic":true,"types":[]},{"text":"impl Send for UserReport","synthetic":true,"types":[]},{"text":"impl Send for ClockDriftProcessor","synthetic":true,"types":[]},{"text":"impl Send for GeoIpLookup","synthetic":true,"types":[]},{"text":"impl Send for StoreConfig","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for StoreProcessor&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for MetaTree","synthetic":true,"types":[]},{"text":"impl Send for ProcessingAction","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Annotated&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; Send for SerializableAnnotated&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for RemarkType","synthetic":true,"types":[]},{"text":"impl Send for Remark","synthetic":true,"types":[]},{"text":"impl Send for ErrorKind","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl Send for Meta","synthetic":true,"types":[]},{"text":"impl Send for SkipSerialization","synthetic":true,"types":[]},{"text":"impl Send for Value","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for ValueDescription&lt;'a&gt;","synthetic":true,"types":[]}];
implementors["relay_log"] = [{"text":"impl Send for LogFormat","synthetic":true,"types":[]},{"text":"impl Send for LogConfig","synthetic":true,"types":[]},{"text":"impl Send for SentryConfig","synthetic":true,"types":[]},{"text":"impl&lt;'a, E:&nbsp;?Sized&gt; Send for LogError&lt;'a, E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Sync,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["relay_metrics"] = [{"text":"impl Send for DurationPrecision","synthetic":true,"types":[]},{"text":"impl Send for MetricUnit","synthetic":true,"types":[]},{"text":"impl Send for MetricValue","synthetic":true,"types":[]},{"text":"impl Send for MetricType","synthetic":true,"types":[]},{"text":"impl Send for ParseMetricError","synthetic":true,"types":[]},{"text":"impl Send for Metric","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for ParseMetrics&lt;'a&gt;","synthetic":true,"types":[]}];
implementors["relay_quotas"] = [{"text":"impl Send for Scoping","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for ItemScoping&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for QuotaScope","synthetic":true,"types":[]},{"text":"impl Send for ReasonCode","synthetic":true,"types":[]},{"text":"impl Send for Quota","synthetic":true,"types":[]},{"text":"impl Send for RetryAfter","synthetic":true,"types":[]},{"text":"impl Send for InvalidRetryAfter","synthetic":true,"types":[]},{"text":"impl Send for RateLimitScope","synthetic":true,"types":[]},{"text":"impl Send for RateLimit","synthetic":true,"types":[]},{"text":"impl Send for RateLimits","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for RateLimitsIter&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for RateLimitsIntoIter","synthetic":true,"types":[]},{"text":"impl Send for RateLimitingError","synthetic":true,"types":[]},{"text":"impl Send for RedisRateLimiter","synthetic":true,"types":[]}];
implementors["relay_redis"] = [{"text":"impl Send for RedisConfig","synthetic":true,"types":[]},{"text":"impl Send for RedisError","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for Connection&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for PooledClient","synthetic":true,"types":[]},{"text":"impl Send for RedisPool","synthetic":true,"types":[]}];
implementors["relay_sampling"] = [{"text":"impl Send for RuleType","synthetic":true,"types":[]},{"text":"impl Send for SamplingResult","synthetic":true,"types":[]},{"text":"impl Send for EqCondOptions","synthetic":true,"types":[]},{"text":"impl Send for EqCondition","synthetic":true,"types":[]},{"text":"impl Send for GlobCondition","synthetic":true,"types":[]},{"text":"impl Send for CustomCondition","synthetic":true,"types":[]},{"text":"impl Send for OrCondition","synthetic":true,"types":[]},{"text":"impl Send for AndCondition","synthetic":true,"types":[]},{"text":"impl Send for NotCondition","synthetic":true,"types":[]},{"text":"impl Send for RuleCondition","synthetic":true,"types":[]},{"text":"impl Send for RuleId","synthetic":true,"types":[]},{"text":"impl Send for SamplingRule","synthetic":true,"types":[]},{"text":"impl Send for SamplingConfig","synthetic":true,"types":[]},{"text":"impl Send for TraceContext","synthetic":true,"types":[]}];
implementors["relay_server"] = [{"text":"impl Send for ServerError","synthetic":true,"types":[]}];
implementors["scrub_minidump"] = [{"text":"impl Send for Cli","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()