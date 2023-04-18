export type StoreScriptList = {
  cs_id: number
  name: string
  description?: string
  tag?: string
  var_key: string
}


export type StoreScriptDetail = {
  cs_id?: number
  name?: string
  description?: string
  tag?: string
  var_key?: string
  var_script?: string
}


export type StoreEdit = {
  cs_id?: number
  name: string
  description?: string
  tag?: string
  var_key: string
  var_script: string
}
