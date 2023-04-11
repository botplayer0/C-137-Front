import type { IResponse } from '@/utils/http'


interface RequestAddCScript {
  name: string
  description?: string
  tag?: string
  var_key: string
  var_script: string
}

interface RequestUpdateCScript {
  name?: string
  description?: string
  tag?: string
  var_key?: string
  var_script?: string
}

interface ResponseCScriptList extends IResponse<{
  cs_id: number
  name: string
  tag?: string
}> { }

interface ResponseCScriptDetail extends IResponse<{
  cs_id: number
  name: string
  description?: string
  tag?: string
  var_key: string
  var_script: string
}> { }




export type {
  RequestAddCScript,
  RequestUpdateCScript,
  ResponseCScriptDetail,
  ResponseCScriptList
}