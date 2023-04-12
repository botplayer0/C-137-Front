import { create } from "zustand";
import type { ResponseCScriptList } from "@/api/config/api.script.type";
import { IResponse } from "@/utils/http";

interface TypeOfEditorCScript {
  cs_id?: string
  name?: string
  desc?: string
  var_key?: string
  var_script?: string
}

interface ApiScriptStore {
  // getScriptList: ResponseCScriptList[] | null
  // apiGetScriptList: () => Promise<IResponse>
  editScript: TypeOfEditorCScript
  setEdit: (record: TypeOfEditorCScript) => void
  clearEdit: () => void
}


const useApiScriptStore = create<ApiScriptStore>((set, get) => ({
  editScript: {},
  setEdit: (record: TypeOfEditorCScript) => set({ editScript: record }),
  clearEdit: () => set({ editScript: {} })
}))

export { useApiScriptStore }
export type { TypeOfEditorCScript }