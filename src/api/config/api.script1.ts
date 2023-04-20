import { ReqAddScript, ReqDeleteScript, ReqUpdateScript, ResAddScript, ResDebugByID, ResScriptDetail, ResScriptList, ReqPyScript } from "@/types/config/script/api.type";
import http, { IResponse } from "@/utils/http";

// 添加脚本
export const apiScriptAdd = async (data: ReqAddScript) => {
  const response = await http.post<IResponse<ResAddScript>>("/common/cs/add", data)
  return response
}

// 删除脚本, body传入空字典即可
export const apiScriptDelete = async (cs_id: number, data: ReqDeleteScript) => {
  const response = await http.delete<IResponse>(`/common/cs/${cs_id}/delete`, data)
  return response
}

// 更新脚本, 考虑判断更新的字段
export const apiScriptUpdate = async (cs_id: number, data: ReqUpdateScript) => {
  const response = await http.post<IResponse>(`/common/cs/${cs_id}/update`, data)
  return response
}


// 获取脚本列表
export const apiScriptList = async (page?: number, page_size?: number, tag?: string
) => {
  const params = {
    page: page ?? 1,
    page_size: page_size ?? 20,
    tag
  }
  const response = await http.get<ResScriptList[]>("/common/cs/list", { params })
  return response
}

export const apiScriptTags = async () => {
  const response = await http.get<string[]>("/common/cs/tag")
  return response
}

// 获取脚本详情, 主要是获取代码
export const apiScriptDetail = async (cs_id: number) => {
  const response = await http.get<ResScriptDetail>(`/common/cs/${cs_id}/detail`)
  return response
}


// 通过cs_id执行数据库的代码
export const apiScriptDebugByID = async (cs_id: number) => {
  const response = await http.get<ResDebugByID>(`/common/cs/${cs_id}/debug`)
  return response
}

// 通过ACE编辑器写的代码调试
export const apiScriptDebugByTxt = async (data: ReqPyScript) => {
  const response = await http.post<ResDebugByID>("/script/execute_python", data)
  return response
}

