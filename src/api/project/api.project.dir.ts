import http, { IResponse } from "@/utils/http";
import { ReqDirectoryAdd, ResDirectory } from "@/types/project/api.dir.type";


const apiDirectoryAdd = async (data: ReqDirectoryAdd) => {
  const response = await http.post<IResponse>(`/project/directory/add`, data)
  return response
}

const apiDirectoryRoot = async (projectId: number) => {
  const response = await http.get<ResDirectory[]>(`/project/directory/${projectId}/root`)
  return response
}

const apiDirectoryChild = async (projectId: number, directoryId: number) => {
  const response = await http.get<ResDirectory[]>(`/project/directory/${projectId}/root/${directoryId}`)
  return response
}

export {
  apiDirectoryAdd,
  apiDirectoryChild,
  apiDirectoryRoot
}