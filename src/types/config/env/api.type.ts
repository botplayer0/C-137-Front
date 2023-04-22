import type { IResponse } from "@/utils/http";

interface ReqEnvAdd {
  name: string
  description?: string
  request_timeout?: number
  response_timeout?: number
  domain: string
  public?: boolean
  headers?: {}
}

interface ReqEnvUpdate {
  name?: string
  description?: string
  request_timeout?: number
  response_timeout?: number
  domain?: string
  public?: boolean
  headers?: {}
}

interface ResEnvList {
  env_id: number
  name: string
  public: boolean
  creator: string
  create_user: number
  updated_at: number
}

interface ResEnvDetail {
  env_id: number
  name: string
  description?: string
  request_timeout: number
  response_timeout: number
  domain: string
  public: boolean
  headers: {}
}


export type {
  ReqEnvAdd,
  ReqEnvUpdate,
  ResEnvDetail,
  ResEnvList
}