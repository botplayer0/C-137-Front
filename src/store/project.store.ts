import { create } from "zustand"


interface IProjectStoreProp {
  projectList: ResProjectList[],
  projectDirectory: []

  setProjectList: (data: ResProjectList[]) => void
}

const useProjectStore = create<IProjectStoreProp>((set, get) => ({
  projectList: [],
  projectDirectory: [],

  setProjectList: (data: ResProjectList[]) => set({ projectList: data })
}))

export default useProjectStore