import { StoreScriptList, StoreScriptDetail, StoreEdit } from "@/types/config/script/store.type";
import { create } from "zustand";


interface IStoreProp {
  // 脚本列表, 接口获取
  scriptList: StoreScriptList[]
  // 当前编辑脚本或新建脚本
  currentScriptInfo: StoreScriptDetail

  // 更新脚本列表
  setScriptList: (data: StoreScriptList[]) => void

  // 编辑时更新
  setCurrentScriptInfo: (record: StoreScriptDetail) => void
  updateCurrentScriptInfo: (key: string, value: string) => void
  clearCurrentScriptInfo: () => void

}

const useScriptStore = create<IStoreProp>((set, get) => ({
  scriptList: [],
  currentScriptInfo: {},

  setScriptList: (data: StoreScriptList[]) => set({ scriptList: data }),
  setCurrentScriptInfo: (record: StoreScriptDetail) => set({ currentScriptInfo: record }),
  clearCurrentScriptInfo: () => set({ currentScriptInfo: {} }),
  updateCurrentScriptInfo: (updateKey: string, updateValue: string) => {
    const updateKeyValue = {
      updateKey: updateValue
    }
    set({ currentScriptInfo: { ...get().currentScriptInfo, ...updateKeyValue } })
  }

}))

export default useScriptStore