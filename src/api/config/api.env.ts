import { ReqEnvAdd, ReqEnvUpdate, ResEnvDetail, ResEnvList } from "@/types/config/env/api.type";
import http, { IResponse } from "@/utils/http";

// 添加环境
export const apiEnvAdd = async (data: ReqEnvAdd) => {
  const response = await http.post<ReqEnvAdd>('/api/setting/env/add', data)
  return response
}

// 更新环境
export const apiEnvUpdate = async (env_id: number, data: ReqEnvUpdate) => {
  const response = await http.delete<IResponse>(`/api/setting/env/${env_id}/update`, data)
  return response
}

// 获取环境列表
export const apiEnvList = async (page?: number, page_size?: number) => {
  const params = {
    page: page ?? 1,
    page_size: page_size ?? 20
  }
  const response = await http.get<ResEnvList[]>("/api/setting/env/list", { params })
  return response
}

export const apiEnvDetail = async (env_id: number) => {
  const response = await http.get<ResEnvDetail>(`/api/setting/env/${env_id}/detail`)
  return response
}