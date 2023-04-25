import { apiProjectList } from "@/api/project/api.project"
import { create } from "zustand"


interface IProjectStoreProp {
  projectList: ResProjectList[],
  projectDirectory: []

  setProjectList: (data: ResProjectList[]) => void
  fetchProjectList: () => void
}

const useProjectStore = create<IProjectStoreProp>((set, get) => ({
  projectList: [],
  projectDirectory: [],

  setProjectList: (data: ResProjectList[]) => set({ projectList: data }),
  fetchProjectList: async () => {
    const response = await apiProjectList()
    if (response.code === 0) {
      set({ projectList: response.data })
    }
  }
}))

export default useProjectStore