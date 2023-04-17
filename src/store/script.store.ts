import { StoreScriptList, StoreScriptDetail, StoreEdit } from "@/types/config/script/store.type";


interface IStoreProp {
  // 脚本列表, 接口获取
  scriptList: StoreScriptList[]
  // 当前编辑脚本或新建脚本
  currentScriptInfo: StoreScriptDetail

  // 更新脚本列表
  setScriptList: (data: StoreScriptList[]) => void

  // 编辑时更新
  setCurrentScriptInfo: (record: StoreEdit) => void
  clearCurrentScriptInfo: () => void


}