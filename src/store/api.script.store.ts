import { create } from "zustand";
import type { ResponseCScriptList } from "@/api/config/api.script.type";
import { IResponse } from "@/utils/http";

interface ApiScriptStore {
  getScriptList: ResponseCScriptList[] | null
  apiGetScriptList: () => Promise<IResponse>
}


// const useApiScriptStore = create<ApiScriptStore>