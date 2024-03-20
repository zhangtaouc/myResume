import { httpGet } from './request'
import { UserListResponse } from '@/map/interface'

// 获取用户
export function getUserList(): Promise<UserListResponse> {
  return httpGet('http://localhost:8081/student/getAll')
}
