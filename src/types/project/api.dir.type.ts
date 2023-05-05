interface ReqDirectoryAdd {
  project_id: number
  name: string
  parent?: number
}

interface ResDirectory {
  directory_id: number
  parent_id?: number
  case_id?: number
  method?: string
  name: string
  type: "directory" | "case"
  child_count?: number
}

export type {
  ReqDirectoryAdd,
  ResDirectory
}