import { create } from "zustand";

interface ITabsItemProp {
  label: string,
  children: React.ReactNode,
  key: string
}

interface ICaseStoreProp {
  paneTab: ITabsItemProp[],
  addPaneTab: (caseId: number) => void,
  removePaneTab: (tabKey: string) => void
  currentPaneTab: string,
  setCurrentPaneTab: (pane: string) => void
}

const useCasePaneStore = create<ICaseStoreProp>((set, get) => ({
  paneTab: [],
  addPaneTab: (caseId) => {
    // 接口请求
    set((state) => ({ paneTab: [...state.paneTab] }))
  },
  removePaneTab: (tabKey) => {
    set((state) => ({
      paneTab: state.paneTab.filter((item) => item.key !== tabKey)
    }))
  },
  currentPaneTab: "",
  setCurrentPaneTab: (pane) => set({ currentPaneTab: pane })
}))