import http, { IResponse } from "@/utils/http";
import type { RequestAddCScript, RequestUpdateCScript, ResponseCScriptDetail, ResponseCScriptList } from "./api.config.type";

export const apiAddCScript = async (params: RequestAddCScript) => {
  const response: ResponseCScriptDetail = await http.post("/common/cs/add", params)
  return response
}

export const apiCScriptList = async () => {
  const response = await http.get("/common/cs/list")
  return response
}

export const apiCScriptDetail = async (cs_id: number) => {
  const response = await http.get(`/common/cs/${cs_id}/detail`)
  return response
}