export interface PersonInfo {
  age: Int16Array
  graduationYear: string
  id: Int16Array
  major: string
  name: string
  pictureUrl: string
  school: string
  workTotlTime: string
  phoneNumber: string
  email: string
  address: string
}

export interface Skill {
  detail: string
  skillId: Int16Array
  userId: Int16Array
}

export interface SkillList {
  [index: number]: Skill
}

export interface Project {
  id: number
  userId: number
  name: string
  desc: string
  project_url?: string
  project_icon?: string
}

// 用户列表响应数据格式
export interface UserListResponse {
  retData: {
    me: PersonInfo
    mySkills: SkillList
    myProjects: Project[]
  }
}
