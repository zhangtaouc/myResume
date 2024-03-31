// 请求方法
interface requestMethod {
  method: 'GET' | 'POST'
}

// 接口数据
interface responseData {
  retData: any
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
  [index: number]: User
}

export { User, UserList, requestMethod, responseData, requestData }
