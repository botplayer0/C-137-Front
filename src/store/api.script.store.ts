import { create } from "zustand";
import type { ResponseCScriptLists, ICScriptList } from "@/api/config/api.script.type";
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
  scriptList: ICScriptList[]
  setScriptList: (data: ICScriptList[]) => void
  apiGetScriptList: () => Promise<IResponse>
  scriptInfo: TypeOfEditorCScript
  setScriptInfo: (record: TypeOfEditorCScript) => void
  updateScript: (value: string) => void
  clearScriptInfo: () => void
}


const useApiScriptStore = create<ApiScriptStore>((set, get) => ({
  scriptList: [],
  apiGetScriptList: () => apiCScriptList(),
  setScriptList: (data: ICScriptList[]) => set({ scriptList: data }),
  scriptInfo: {},
  setScriptInfo: (record: TypeOfEditorCScript) => set({ scriptInfo: record }),
  clearScriptInfo: () => set({ scriptInfo: {} }),
  updateScript: (value) => set({ scriptInfo: { ...get().scriptInfo, var_script: value } })
}))

export { useApiScriptStore }
export type { TypeOfEditorCScript }