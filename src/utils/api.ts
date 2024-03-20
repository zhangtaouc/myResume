import { httpGet } from './request'
import { UserListResponse } from '@/map/interface'

// 获取
export function getUserList(): Promise<UserListResponse> {
  return httpGet('http://localhost:8082/student/getAll')
}
