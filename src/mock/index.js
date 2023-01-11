export default [
  {
    url: '/api/login',
    method: 'post',
    response: () => {
      return {
        code: 200,
        data: { token: 123 },
        message: '登录成功',
      }
    },
  },
]
