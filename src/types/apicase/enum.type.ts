enum EnumSuffixType {
  PREFIX = 1,
  SUFFIX = 2
}

enum EnumSuffixExecuteType {
  SCRIPT = 1,
  SQL = 2,
  REDIS = 3,
  COMMON_SCRIPT = 4,
  DELAY = 5,
  OUT_PARAMS = 6,
  ASSERT = 7
}

export { EnumSuffixType, EnumSuffixExecuteType }