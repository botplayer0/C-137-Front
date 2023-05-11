import { EnumSuffixExecuteType, EnumSuffixType } from "./enum.type"

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
  case_id: number
  request_type: number
  name: string
  url: string
  method: string
  directory_id: number
  tag?: string
  status?: EnumCaseStatus
  priority?: string
  case_type: EnumCaseType
  headers?: { [key: string]: any }
  params?: { [key: string]: any }
  path?: { [key: string]: any }
  body?: any
  body_type?: EnumCaseRequestBody

}

interface ApiSuffixInfo {
  suffix_id: number
  name: string
  case_id: number
  suffix_type: EnumSuffixType
  suffix_execute: EnumSuffixExecuteType
  sql_id?: number
  redis_id?: number
  common_id?: number
  command_text?: string
  out_name?: string
  extract_from: number

  enable: boolean
  sort: number

  index?: number
}