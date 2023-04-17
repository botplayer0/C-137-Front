import http, { IResponse } from "@/utils/http";
import type { ICScriptList, RequestAddCScript, RequestPyScript, ResponseCScriptDetail, ResponseCScriptLists } from "./api.script.type";

export const apiAddCScript = async (params: RequestAddCScript) => {
  const response: ResponseCScriptDetail = await http.post("/common/cs/add", params)
  return response
}

export const apiCScriptList = async (page?: number, page_size?: number, tag?: string) => {
  const params = {
    page: page ?? 1,
    page_size: page_size ?? 20,
    tag
  }
  const response = await http.get<IResponse<ICScriptList[]>>("/common/cs/list", { params })
  return response
}

export const apiCScriptDetail = async (cs_id: number | string) => {
  const response = await http.get(`/common/cs/${cs_id}/detail`)
  return response
}

export const apiCScriptDebug = async (cs_id: number) => {
  const response = await http.get(`/common/cs/${cs_id}/debug`)
  return response
}

export const apiPyScriptDebug = async (scriptParams: RequestPyScript) => {
  const response = await http.post(`/script/execute_python`, scriptParams)
  return response
}