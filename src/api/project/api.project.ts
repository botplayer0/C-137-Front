import http, { IResponse } from "@/utils/http";

// 新建项目
export const apiProjectNew = async (data: ReqProjectAdd) => {
  const response = await http.post("/project/add", data)
  return response
}

// 项目列表
export const apiProjectList = async () => {
  const response = await http.get<ResProjectList[]>("/project/list")
  return response
}

// 项目详情
export const apiProjectDetail = async (projectId: number) => {
  const response = await http.get<ResProjectList>(`/project/${projectId}/detail`)
  return response
}

// 项目成员
export const apiProjectMember = async (projectId: number) => {
  const response = await http.get<ResProjectMemberList[]>(`/project/${projectId}/member`)
  return response
}

// 添加项目成员
export const apiProjectMemberAdd = async (projectId: number, data: ReqProjectMemberAdd) => {
  const response = await http.post(`/project/${projectId}/members`, data)
  return response
}

// 修改成员身份
export const apiProjectMemberRoleAdjust = async (projectId: number, data: ReqProjectMemberRoleAdjust) => {
  const response = await http.post(`/project/${projectId}/members/role`, data)
  return response
}

// 退出项目
export const apiProjectExit = async (projectId: number) => {
  const response = await http.put(`/project/${projectId}/exit`)
  return response
}

// 退出项目
export const apiProjectMemberRemove = async (projectId: number) => {
  const response = await http.put(`/project/${projectId}/remove`)
  return response
}

// 删除项目
export const apiProjectRemove = async (projectId: number) => {
  const response = await http.put(`/project/${projectId}/delete`)
  return response
}