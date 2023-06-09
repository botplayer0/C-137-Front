import { StoreScriptList, StoreScriptDetail, StoreEdit } from "@/types/config/script/store.type";
import { create } from "zustand";


interface IScriptStoreProp {
  // 脚本列表, 接口获取
  scriptList: StoreScriptList[]
  // 当前编辑脚本或新建脚本
  currentScriptInfo: StoreScriptDetail

  // 更新脚本列表
  setScriptList: (data: StoreScriptList[]) => void

  // 编辑时更新
  setCurrentScriptInfo: (record: StoreScriptDetail) => void
  updateCurrentScriptInfo: (updateKey: string, updateValue: string) => void
  clearCurrentScriptInfo: () => void

}

const useScriptStore = create<IScriptStoreProp>((set, get) => ({
  scriptList: [],
  currentScriptInfo: {},

  setScriptList: (data: StoreScriptList[]) => set({ scriptList: data }),
  setCurrentScriptInfo: (record: StoreScriptDetail) => set({ currentScriptInfo: record }),
  clearCurrentScriptInfo: () => set({ currentScriptInfo: {} }),
  updateCurrentScriptInfo: (updateKey: string, updateValue: string) => {
    const updateKeyValue = {}
    updateKeyValue[updateKey] = updateValue
    console.log("33", updateKeyValue)
    set({ currentScriptInfo: { ...get().currentScriptInfo, ...updateKeyValue } })
  }

}))

export default useScriptStore