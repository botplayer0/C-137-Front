
export type ReqAddScript = {
  name: string
  description?: string
  tag?: string
  var_key: string
  var_script: string
}

export type ReqUpdateScript = {
  name?: string
  description?: string
  tag?: string
  var_key?: string
  var_script?: string
}

export type ReqDeleteScript = {}


export type ReqPyScript = {
  get_var: string
  script: string
}

export type ResScriptList = {
  cs_id: number
  name: string
  description?: string
  tag?: string
  var_key: string
}

export type ResAddScript = {
  cs_id: number
  name: string
  tag?: string
}

export type ResScriptDetail = {
  cs_id: number
  name: string
  description?: string
  tag?: string
  var_key: string
  var_script: string
}

export type ResDebugByID = {
  [key: string]: any
}

