import type { IResponse } from '@/utils/http'


interface ARequestAddCScript {
  name: string
  description?: string
  tag?: string
  var_key: string
  var_script: string
}

interface ARequestPyScript {
  get_var: string
  script: string
}

interface ARequestUpdateCScript {
  name?: string
  description?: string
  tag?: string
  var_key?: string
  var_script?: string
}

interface AResCScriptList {
  cs_id: string
  name: string
  description?: string
  var_key: string
  tag?: string
}

interface AResCScriptDetail {
  cs_id: string
  name: string
  description?: string
  var_key: string
  var_script: string
  tag?: string
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