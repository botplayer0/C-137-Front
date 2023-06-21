import { ResCaseDetail } from "@/types/apicase/api.type";
import { create } from "zustand";


interface IPropCaseList {
  caseKey: string,
  caseInfo: ResCaseDetail
}

interface IStoreCase {
  caseList: IPropCaseList[],
  addCaseList: (caseKey: string, caseInfo: ResCaseDetail) => void
  removeCase: (caseKey: string) => void
  // addCase: (caseKey: string, caseInfo: ResCaseDetail) => void
}

const useCaseStore = create<IStoreCase>((set) => ({
  caseList: [],
  addCaseList: (caseKey, caseInfo) => set((state) => ({ caseList: [...state.caseList, { caseKey, caseInfo }] })),
  removeCase: (caseKey) => set((state) => ({ caseList: state.caseList.filter((item) => item.caseKey !== caseKey) }))
}))

export default useCaseStore