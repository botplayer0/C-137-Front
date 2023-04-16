import type { IResponse } from '@/utils/http'


interface RequestAddCScript {
  name: string
  description?: string
  tag?: string
  var_key: string
  var_script: string
}

interface RequestPyScript {
  get_var: string
  script: string
}

interface RequestUpdateCScript {
  name?: string
  description?: string
  tag?: string
  var_key?: string
  var_script?: string
}

interface ICScriptList {
  cs_id: string
  name: string
  description?: string
  var_key?: string
  var_script?: string
  tag?: string
}

interface ResponseCScriptLists {
  cs: ICScriptList[]
  total: number
}

interface ResponseCScriptList {
  cs_id: number
  name: string
  description?: string
  var_key?: string
  var_script?: string
  tag?: string
}

// interface ResponseCScriptList extends IResponse<{
//   data: ResponseCScriptList[]
// }> { }

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
  ICScriptList,
  ResponseCScriptLists,
  RequestUpdateCScript,
  ResponseCScriptDetail,
  ResponseCScriptList,
  RequestPyScript
}