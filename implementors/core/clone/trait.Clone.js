(function() {var implementors = {};
implementors["document_metrics"] = [{"text":"impl Clone for SchemaFormat","synthetic":false,"types":[]},{"text":"impl Clone for MetricType","synthetic":false,"types":[]}];
implementors["generate_schema"] = [{"text":"impl Clone for SchemaFormat","synthetic":false,"types":[]}];
implementors["relay_auth"] = [{"text":"impl Clone for RelayVersion","synthetic":false,"types":[]},{"text":"impl Clone for ParseRelayVersionError","synthetic":false,"types":[]},{"text":"impl Clone for PublicKey","synthetic":false,"types":[]},{"text":"impl Clone for SecretKey","synthetic":false,"types":[]},{"text":"impl Clone for SignedRegisterState","synthetic":false,"types":[]},{"text":"impl Clone for RegisterState","synthetic":false,"types":[]}];
implementors["relay_common"] = [{"text":"impl&lt;T:&nbsp;Clone&gt; Clone for UpsertingLazyCell&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl Clone for EventType","synthetic":false,"types":[]},{"text":"impl Clone for ParseEventTypeError","synthetic":false,"types":[]},{"text":"impl Clone for DataCategory","synthetic":false,"types":[]},{"text":"impl Clone for SpanStatus","synthetic":false,"types":[]},{"text":"impl Clone for ParseSpanStatusError","synthetic":false,"types":[]},{"text":"impl Clone for GlobOptions","synthetic":false,"types":[]},{"text":"impl Clone for ParseProjectKeyError","synthetic":false,"types":[]},{"text":"impl Clone for ProjectKey","synthetic":false,"types":[]},{"text":"impl Clone for UnixTimestamp","synthetic":false,"types":[]},{"text":"impl Clone for Glob","synthetic":false,"types":[]}];
implementors["relay_config"] = [{"text":"impl Clone for ConfigErrorKind","synthetic":false,"types":[]},{"text":"impl Clone for Credentials","synthetic":false,"types":[]},{"text":"impl Clone for RelayMode","synthetic":false,"types":[]},{"text":"impl Clone for HttpEncoding","synthetic":false,"types":[]},{"text":"impl Clone for KafkaTopic","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Clone for UpstreamDescriptor&lt;'a&gt;","synthetic":false,"types":[]}];
implementors["relay_filter"] = [{"text":"impl Clone for GlobPatterns","synthetic":false,"types":[]},{"text":"impl Clone for FilterStatKey","synthetic":false,"types":[]},{"text":"impl Clone for FilterConfig","synthetic":false,"types":[]},{"text":"impl Clone for LegacyBrowser","synthetic":false,"types":[]},{"text":"impl Clone for ClientIpsFilterConfig","synthetic":false,"types":[]},{"text":"impl Clone for CspFilterConfig","synthetic":false,"types":[]},{"text":"impl Clone for ErrorMessagesFilterConfig","synthetic":false,"types":[]},{"text":"impl Clone for ReleasesFilterConfig","synthetic":false,"types":[]},{"text":"impl Clone for LegacyBrowsersFilterConfig","synthetic":false,"types":[]},{"text":"impl Clone for FiltersConfig","synthetic":false,"types":[]}];
implementors["relay_general"] = [{"text":"impl Clone for CompiledPiiConfig","synthetic":false,"types":[]},{"text":"impl Clone for Pattern","synthetic":false,"types":[]},{"text":"impl Clone for PatternRule","synthetic":false,"types":[]},{"text":"impl Clone for MultipleRule","synthetic":false,"types":[]},{"text":"impl Clone for AliasRule","synthetic":false,"types":[]},{"text":"impl Clone for RedactPairRule","synthetic":false,"types":[]},{"text":"impl Clone for RuleType","synthetic":false,"types":[]},{"text":"impl Clone for RuleSpec","synthetic":false,"types":[]},{"text":"impl Clone for Vars","synthetic":false,"types":[]},{"text":"impl Clone for PiiConfig","synthetic":false,"types":[]},{"text":"impl Clone for DataScrubbingConfig","synthetic":false,"types":[]},{"text":"impl Clone for ReplaceRedaction","synthetic":false,"types":[]},{"text":"impl Clone for Redaction","synthetic":false,"types":[]},{"text":"impl Clone for ValueType","synthetic":false,"types":[]},{"text":"impl Clone for MaxChars","synthetic":false,"types":[]},{"text":"impl Clone for BagSize","synthetic":false,"types":[]},{"text":"impl Clone for Pii","synthetic":false,"types":[]},{"text":"impl Clone for FieldAttrs","synthetic":false,"types":[]},{"text":"impl Clone for CharacterSet","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Clone for ProcessingState&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Clone for Chunk&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl Clone for SelectorPathItem","synthetic":false,"types":[]},{"text":"impl Clone for SelectorSpec","synthetic":false,"types":[]},{"text":"impl Clone for Breadcrumb","synthetic":false,"types":[]},{"text":"impl Clone for ClientSdkPackage","synthetic":false,"types":[]},{"text":"impl Clone for ClientSdkInfo","synthetic":false,"types":[]},{"text":"impl Clone for DeviceContext","synthetic":false,"types":[]},{"text":"impl Clone for OsContext","synthetic":false,"types":[]},{"text":"impl Clone for RuntimeContext","synthetic":false,"types":[]},{"text":"impl Clone for AppContext","synthetic":false,"types":[]},{"text":"impl Clone for BrowserContext","synthetic":false,"types":[]},{"text":"impl Clone for GpuContext","synthetic":false,"types":[]},{"text":"impl Clone for TraceId","synthetic":false,"types":[]},{"text":"impl Clone for SpanId","synthetic":false,"types":[]},{"text":"impl Clone for TraceContext","synthetic":false,"types":[]},{"text":"impl Clone for Context","synthetic":false,"types":[]},{"text":"impl Clone for ContextInner","synthetic":false,"types":[]},{"text":"impl Clone for Contexts","synthetic":false,"types":[]},{"text":"impl Clone for NativeImagePath","synthetic":false,"types":[]},{"text":"impl Clone for SystemSdkInfo","synthetic":false,"types":[]},{"text":"impl Clone for AppleDebugImage","synthetic":false,"types":[]},{"text":"impl Clone for DebugId","synthetic":false,"types":[]},{"text":"impl Clone for CodeId","synthetic":false,"types":[]},{"text":"impl Clone for NativeDebugImage","synthetic":false,"types":[]},{"text":"impl Clone for DebugImage","synthetic":false,"types":[]},{"text":"impl Clone for DebugMeta","synthetic":false,"types":[]},{"text":"impl Clone for EventId","synthetic":false,"types":[]},{"text":"impl Clone for ExtraValue","synthetic":false,"types":[]},{"text":"impl Clone for EventProcessingError","synthetic":false,"types":[]},{"text":"impl Clone for GroupingConfig","synthetic":false,"types":[]},{"text":"impl Clone for Event","synthetic":false,"types":[]},{"text":"impl Clone for Exception","synthetic":false,"types":[]},{"text":"impl Clone for Fingerprint","synthetic":false,"types":[]},{"text":"impl Clone for LogEntry","synthetic":false,"types":[]},{"text":"impl Clone for Message","synthetic":false,"types":[]},{"text":"impl Clone for Measurements","synthetic":false,"types":[]},{"text":"impl Clone for CError","synthetic":false,"types":[]},{"text":"impl Clone for MachException","synthetic":false,"types":[]},{"text":"impl Clone for PosixSignal","synthetic":false,"types":[]},{"text":"impl Clone for MechanismMeta","synthetic":false,"types":[]},{"text":"impl Clone for Mechanism","synthetic":false,"types":[]},{"text":"impl Clone for SampleRate","synthetic":false,"types":[]},{"text":"impl Clone for Metrics","synthetic":false,"types":[]},{"text":"impl Clone for Cookies","synthetic":false,"types":[]},{"text":"impl Clone for HeaderName","synthetic":false,"types":[]},{"text":"impl Clone for HeaderValue","synthetic":false,"types":[]},{"text":"impl Clone for Headers","synthetic":false,"types":[]},{"text":"impl Clone for Query","synthetic":false,"types":[]},{"text":"impl Clone for Request","synthetic":false,"types":[]},{"text":"impl Clone for Csp","synthetic":false,"types":[]},{"text":"impl Clone for ExpectCt","synthetic":false,"types":[]},{"text":"impl Clone for Hpkp","synthetic":false,"types":[]},{"text":"impl Clone for ExpectStaple","synthetic":false,"types":[]},{"text":"impl Clone for SecurityReportType","synthetic":false,"types":[]},{"text":"impl Clone for SessionStatus","synthetic":false,"types":[]},{"text":"impl Clone for SessionAttributes","synthetic":false,"types":[]},{"text":"impl Clone for SessionUpdate","synthetic":false,"types":[]},{"text":"impl Clone for SessionAggregateItem","synthetic":false,"types":[]},{"text":"impl Clone for SessionAggregates","synthetic":false,"types":[]},{"text":"impl Clone for Span","synthetic":false,"types":[]},{"text":"impl Clone for Frame","synthetic":false,"types":[]},{"text":"impl Clone for FrameVars","synthetic":false,"types":[]},{"text":"impl Clone for FrameData","synthetic":false,"types":[]},{"text":"impl Clone for RawStacktrace","synthetic":false,"types":[]},{"text":"impl Clone for Stacktrace","synthetic":false,"types":[]},{"text":"impl Clone for TagEntry","synthetic":false,"types":[]},{"text":"impl Clone for Tags","synthetic":false,"types":[]},{"text":"impl Clone for TemplateInfo","synthetic":false,"types":[]},{"text":"impl Clone for ThreadId","synthetic":false,"types":[]},{"text":"impl Clone for Thread","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Clone&gt; Clone for Values&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Clone&gt; Clone for PairList&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl Clone for RegVal","synthetic":false,"types":[]},{"text":"impl Clone for Addr","synthetic":false,"types":[]},{"text":"impl Clone for IpAddr","synthetic":false,"types":[]},{"text":"impl Clone for Level","synthetic":false,"types":[]},{"text":"impl Clone for LenientString","synthetic":false,"types":[]},{"text":"impl Clone for JsonLenientString","synthetic":false,"types":[]},{"text":"impl Clone for Timestamp","synthetic":false,"types":[]},{"text":"impl Clone for Geo","synthetic":false,"types":[]},{"text":"impl Clone for User","synthetic":false,"types":[]},{"text":"impl Clone for ProcessingAction","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Clone&gt; Clone for Annotated&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl Clone for RemarkType","synthetic":false,"types":[]},{"text":"impl Clone for Remark","synthetic":false,"types":[]},{"text":"impl Clone for ErrorKind","synthetic":false,"types":[]},{"text":"impl Clone for Error","synthetic":false,"types":[]},{"text":"impl Clone for Meta","synthetic":false,"types":[]},{"text":"impl Clone for SkipSerialization","synthetic":false,"types":[]},{"text":"impl Clone for Value","synthetic":false,"types":[]}];
implementors["relay_log"] = [{"text":"impl Clone for LogFormat","synthetic":false,"types":[]},{"text":"impl Clone for LogConfig","synthetic":false,"types":[]},{"text":"impl Clone for SentryConfig","synthetic":false,"types":[]}];
implementors["relay_metrics"] = [{"text":"impl Clone for DurationPrecision","synthetic":false,"types":[]},{"text":"impl Clone for MetricUnit","synthetic":false,"types":[]},{"text":"impl Clone for MetricValue","synthetic":false,"types":[]},{"text":"impl Clone for MetricType","synthetic":false,"types":[]},{"text":"impl Clone for ParseMetricError","synthetic":false,"types":[]},{"text":"impl Clone for Metric","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Clone for ParseMetrics&lt;'a&gt;","synthetic":false,"types":[]}];
implementors["relay_quotas"] = [{"text":"impl Clone for Scoping","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Clone for ItemScoping&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl Clone for QuotaScope","synthetic":false,"types":[]},{"text":"impl Clone for ReasonCode","synthetic":false,"types":[]},{"text":"impl Clone for Quota","synthetic":false,"types":[]},{"text":"impl Clone for RetryAfter","synthetic":false,"types":[]},{"text":"impl Clone for RateLimitScope","synthetic":false,"types":[]},{"text":"impl Clone for RateLimit","synthetic":false,"types":[]},{"text":"impl Clone for RateLimits","synthetic":false,"types":[]},{"text":"impl Clone for RedisRateLimiter","synthetic":false,"types":[]}];
implementors["relay_redis"] = [{"text":"impl Clone for RedisConfig","synthetic":false,"types":[]},{"text":"impl Clone for RedisPool","synthetic":false,"types":[]}];
implementors["relay_sampling"] = [{"text":"impl Clone for RuleType","synthetic":false,"types":[]},{"text":"impl Clone for SamplingResult","synthetic":false,"types":[]},{"text":"impl Clone for EqCondOptions","synthetic":false,"types":[]},{"text":"impl Clone for EqCondition","synthetic":false,"types":[]},{"text":"impl Clone for GlobCondition","synthetic":false,"types":[]},{"text":"impl Clone for CustomCondition","synthetic":false,"types":[]},{"text":"impl Clone for OrCondition","synthetic":false,"types":[]},{"text":"impl Clone for AndCondition","synthetic":false,"types":[]},{"text":"impl Clone for NotCondition","synthetic":false,"types":[]},{"text":"impl Clone for RuleCondition","synthetic":false,"types":[]},{"text":"impl Clone for RuleId","synthetic":false,"types":[]},{"text":"impl Clone for SamplingRule","synthetic":false,"types":[]},{"text":"impl Clone for SamplingConfig","synthetic":false,"types":[]},{"text":"impl Clone for TraceContext","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()