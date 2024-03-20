// 请求方法
interface requestMethod {
  method: 'GET' | 'POST'
}

// 接口数据
interface responseData {
  data: any
}

// 接口入参
interface requestData {}

// 用户类型
interface User {
  name: string
  address: string
}

// 用户列表
interface UserList {
  userList: Array<User>
}

// 用户列表响应数据格式
interface UserListResponse {
  data: {
    userList: UserList
  }
}

export {
  User,
  UserList,
  UserListResponse,
  requestMethod,
  responseData,
  requestData
}
