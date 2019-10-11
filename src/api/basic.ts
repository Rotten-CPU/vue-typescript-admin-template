import axios from 'axios'

const host = 'http://test.api.purchase-admin.jianqiyun.com/authc'
const _random = 'mqleas457uc0'
const _token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyYW5kb21TdHIiOiJtcWxlYXM0NTd1YzAiLCJjdUlkIjozLCJpc01nciI6dHJ1ZSwiZXhwIjoxNTcwNzc3MjQ1LCJ1c2VySWQiOjIsImlhdCI6MTU3MDc3MzY0NX0.n873GBJBV8QKngrTd0oWYAqRoHSzkne74XkOl16D_UA'

// 获取项目列表
export const getProjectList = (params: any) => {
  return axios({
    url: `${host}/project/listPage`,
    method: 'get',
    headers: {
      'x-auth-random': _random,
      'x-auth-token': _token
    },
    params
  })
}
