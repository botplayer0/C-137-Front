import { ResEnvDetail, ResEnvList } from "@/types/config/env/api.type"

interface StoreEnvList extends ResEnvList { }

interface StoreEnvDetail {
  env_id?: number;
  name?: string
  description?: string
  request_timeout?: number
  response_timeout?: number
  domain?: string
  public?: boolean
  headers?: {}
}

interface StoreEnvHeaders {
  [key: string]: any
}


export type {
  StoreEnvDetail,
  StoreEnvList,
  StoreEnvHeaders
}