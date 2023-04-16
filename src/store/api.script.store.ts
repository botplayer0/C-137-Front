import { create } from "zustand";
import type { ResponseCScriptLists, ICScriptList, RequestPyScript } from "@/api/config/api.script.type";
import { IResponse } from "@/utils/http";
import { apiCScriptDebug, apiCScriptDetail, apiCScriptList, apiPyScriptDebug } from "@/api/config/api.script";

interface TypeOfEditorCScript {
  cs_id?: string
  name?: string
  description?: string
  var_key?: string
  var_script?: string
}

interface ApiScriptStore {
  scriptList: ICScriptList[]
  scriptInfo: TypeOfEditorCScript

  setScriptList: (data: ICScriptList[]) => void
  setScriptInfo: (record: TypeOfEditorCScript) => void
  updateScript: (value: string) => void
  clearScriptInfo: () => void

  apiGetScriptList: (page?: number, page_size?: number, tag?: string) => Promise<IResponse>
  apiGetScriptDetail: (cs_id: string) => Promise<IResponse>
  apiDebugCScript: (cs_id: number) => Promise<IResponse>
  apiPostDebugPyScript: (scriptParams: RequestPyScript) => Promise<IResponse>
}


const useApiScriptStore = create<ApiScriptStore>((set, get) => ({
  // 初始列表和总数
  scriptList: [],
  scriptInfo: {},

  // 更新方法
  setScriptList: (data: ICScriptList[]) => set({ scriptList: data }),
  setScriptInfo: (record: TypeOfEditorCScript) => set({ scriptInfo: record }),
  clearScriptInfo: () => set({ scriptInfo: {} }),
  updateScript: (value) => set({ scriptInfo: { ...get().scriptInfo, var_script: value } }),

  // 接口方法
  apiGetScriptList: (page?: number, page_size?: number, tag?: string) => apiCScriptList(page, page_size, tag),
  apiGetScriptDetail: (cs_id: string) => apiCScriptDetail(cs_id),
  apiDebugCScript: (cs_id: number) => apiCScriptDebug(cs_id),
  apiPostDebugPyScript: (scriptParams: RequestPyScript) => apiPyScriptDebug(scriptParams)
}))

export { useApiScriptStore }
export type { TypeOfEditorCScript }