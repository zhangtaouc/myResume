import { defineStore } from 'pinia'
import { PersonInfo, SkillList, Project } from '../utils/Type'

export const useBaseStore = defineStore({
  id: 'base', // id必填，且需要唯一
  state: () => {
    return {
      title: '这是store',
      userInfo: {} as PersonInfo,
      userSkill: [] as SkillList,
      userProject: [] as Project[]
    }
  },
  getters: {},
  actions: {
    seTitle(title: string) {
      this.title = title
    },
    UserInfo(value: PersonInfo) {
      this.userInfo = value
    },
    UserSkill(value: SkillList) {
      this.userSkill = value
    },
    UserProject(value: Project[]) {
      this.userProject = value
    }
  }
})
