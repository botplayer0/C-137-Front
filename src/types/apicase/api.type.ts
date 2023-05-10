enum EnumCaseStatus {
  DEBUG = 1,
  CLOSE = 2,
  NORMAL = 3
}

enum EnumCaseType {
  NORMAL = 1,
  PREFIX_CASE = 2,
  GENERATOR = 3
}

enum EnumCaseRequestBody {
  NONE,
  JSON,
  FORM,
  X_FORM,
  BINARY,
  GRAPHQL
}

interface ApiCaseInfo {
  name: string
  url: string
  method: string
  directory_id: number
  tag?: string
  status?: EnumCaseStatus
  priority?: string
  case_type: EnumCaseType
  headers: { [key: string]: any }
  body?: any
  body_type?: EnumCaseRequestBody
  request_type: number
}

interface ApiSuffixInfo {
  suffix_id: number
  name: string
  case_id: number
  enable: boolean
  sort: number
  suffix_type: number
  suffix_execute: number
  command_text?: string
  out_name?: string
  sql_id?: number
  index?: number
}