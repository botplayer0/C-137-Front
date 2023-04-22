import { create } from "zustand";
import { StoreEnvDetail, StoreEnvList, StoreEnvHeaders } from "@/store/env.store";

interface IEnvStoreProp {
  envList: StoreEnvList[]
  currentEnv: StoreEnvDetail

  setEnvList: (data: StoreEnvList[]) => void
  setCurrentEnv: (record: StoreEnvDetail) => void

  updateCurrentEnv: (updateKey: string, updateValue: string | StoreEnvHeaders) => void
  clearCurrentEnv: () => void
}

const useEnvStore = create<IEnvStoreProp>((set, get) => ({
  envList: [],
  currentEnv: {},
  setEnvList: (data: StoreEnvList[]) => set({ envList: data }),
  setCurrentEnv: (record: StoreEnvDetail) => set({ currentEnv: record }),
  updateCurrentEnv: (updateKey: string, updateValue: string | StoreEnvHeaders) => {
    const updateKeyValue = {}
    updateKeyValue[updateKey] = updateValue
    set({ currentEnv: { ...get().currentEnv, ...updateKeyValue } })
  },
  clearCurrentEnv: () => set({ currentEnv: {} })
}))

export default useEnvStore