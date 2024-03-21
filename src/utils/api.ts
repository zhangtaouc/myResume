import { httpGet, httpPost, httpDelete } from './request'
import { UserListResponse, User } from '@/map/interface'

// 查询全部用户
export function getUserListApi(): Promise<UserListResponse> {
  return httpGet('http://localhost:8081/student/getAll')
}

// 模糊查询用户
export function getUserListByNameApi(name: string): Promise<UserListResponse> {
  return httpGet(`http://localhost:8081/student/getUserListByName?name=${name}`)
}

export function getUserByNameApi(name: string): Promise<UserListResponse> {
  return httpGet('http://localhost:8081/student/getStudentByName?name=' + name)
}

// 添加用户
export function addUserApi(body: User): Promise<UserListResponse> {
  return httpPost('http://localhost:8081/student/addStudent', body)
}

// 编辑用户
export function editUserApi(body: User): Promise<UserListResponse> {
  return httpPost('http://localhost:8081/student/updateStudent', body)
}

// 删除用户
export function deleteUserApi(username: string): Promise<UserListResponse> {
  return httpDelete(
    'http://localhost:8081/student/deleteStudent?name=' + username
  )
}
