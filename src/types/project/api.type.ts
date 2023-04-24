interface ReqProjectAdd {
  project_name: string
  project_desc?: string
}

interface ReqProjectMemberAdd {
  user_id: number
  project_role: number
}

interface ReqProjectMemberRoleAdjust {
  user_id: number
  project_role: number
}


interface ReqDirectoryAdd {
  project_id: number
  name: string
  parent_id: number
}

interface ResProjectList {
  project_id: number
  project_name: string
  desc?: string
  create_user: number
  public: boolean
  user_name: string
  updated_at: number
}

interface ResProjectMemberList {
  user_id: number
  project_role: number
  user_name: string
  user_avatar: string
  invite_by: number
}

