import { httpGet } from './request'
import {
  User,
  UserList,
  UserListResponse,
  requestMethod
} from '@/map/interface'

export function getUserList(): Promise<UserListResponse> {
  return httpGet('http://www.boredapi.com/api/activity/')
}
