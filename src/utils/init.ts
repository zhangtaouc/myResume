import { useBaseStore } from '@/store/base'
import { UserListResponse } from './Type'
import { getUserInfo } from './api'
import { messageSuccess } from './tips'

export function init() {
  const store = useBaseStore()
  getUserInfo().then((data: UserListResponse) => {
    console.log('获取信息', data)
    const infos = data.retData
    if (infos) {
      store.UserInfo(infos.me || {})
      store.UserSkill(infos.mySkills || [])
      store.UserProject(infos.myProjects || [])
      setTimeout(() => {
        messageSuccess('数据加载成功')
      }, 800)
    }
  })
}
