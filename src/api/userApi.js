import request from '@/utils/request'

// 登录API接口
export const loginAPI = (data) => {
  return request.post('/api/login', data)
}
