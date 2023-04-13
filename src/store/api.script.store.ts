import { create } from "zustand";
import type { ResponseCScriptList } from "@/api/config/api.script.type";
import { IResponse } from "@/utils/http";
import { apiCScriptList } from "@/api/config/api.script";

interface TypeOfEditorCScript {
  cs_id?: string
  name?: string
  desc?: string
  var_key?: string
  var_script?: string
}

interface ApiScriptStore {
  scriptList: ResponseCScriptList[]
  setScriptList: (data: ResponseCScriptList[]) => void
  apiGetScriptList: () => Promise<IResponse>
  scriptInfo: TypeOfEditorCScript
  setScriptInfo: (record: TypeOfEditorCScript) => void
  updateScript: (value: string) => void
  clearScriptInfo: () => void
}


const useApiScriptStore = create<ApiScriptStore>((set, get) => ({
  scriptList: [],
  apiGetScriptList: () => apiCScriptList(),
  setScriptList: (data: ResponseCScriptList[]) => set({ scriptList: data }),
  scriptInfo: {},
  setScriptInfo: (record: TypeOfEditorCScript) => set({ scriptInfo: record }),
  clearScriptInfo: () => set({ scriptInfo: {} }),
  updateScript: (value) => set({ scriptInfo: { ...get().scriptInfo, var_script: value } })
}))

export { useApiScriptStore }
export type { TypeOfEditorCScript }