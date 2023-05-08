import { apiProjectList } from "@/api/project/api.project"
import { create } from "zustand"
import { ResProjectList } from "@/types/project/api.type"


interface IProjectStoreProp {
  projectList: ResProjectList[],
  projectDirectoryTree: []

  setProjectList: (data: ResProjectList[]) => void
  fetchProjectList: () => void
}

const useProjectStore = create<IProjectStoreProp>((set, get) => ({
  projectList: [],
  projectDirectoryTree: [],

  setProjectList: (data: ResProjectList[]) => set({ projectList: data }),
  fetchProjectList: async () => {
    const response = await apiProjectList()

    set({ projectList: response.data })

  }
}))

export default useProjectStore