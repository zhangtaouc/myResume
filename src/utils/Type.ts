export interface PersonInfo {
  age: Int16Array
  graduationYear: string
  id: Int16Array
  major: string
  name: string
  pictureUrl: string
  school: string
  workTotlTime: string
}

export interface Skill {
  detail: string
  skillId: Int16Array
  userId: Int16Array
}

export interface SkillList {
  [index: number]: Skill
}
