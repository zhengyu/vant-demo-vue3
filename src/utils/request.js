/*
 * @Name: 请求
 */

import axios from 'axios'
import { Toast, Dialog } from 'vant'

const showFullScreenLoading = () => {
  Toast.loading({
    message: '加载中...',
    forbidClick: true
  })
}
const tryHideFullScreenLoading = () => {
  Toast.clear()
}
const showAlert = ({ title = '提示', content = null }) => {
  Dialog({ title, message: content, confirmButtonColor: '#07c160' })
}

const config = {
  timeout: 60000,
  withCredentials: false,
  baseURL: process.env.VUE_APP_API_BASE_URL
}
const server = axios.create(config)

server.interceptors.request.use(
  config => {
    showFullScreenLoading()
    return config
  },
  error => {
    tryHideFullScreenLoading()
    showAlert({ content: error.status })
    return Promise.reject(error)
  }
)

const responseStatus = {
  400: '请求错误',
  401: '未授权，请登录',
  403: '拒绝访问',
  404: '请求地址异常',
  408: '请求超时',
  500: '服务器内部错误',
  501: '服务未实现',
  502: '网关错误',
  503: '服务不可用',
  504: '网关超时',
  505: 'HTTP版本不受支持'
}

server.interceptors.response.use(
  res => {
    tryHideFullScreenLoading()
    if (res.data.code && res.data.code !== 'RC00000') {
      showAlert({ content: res.data.info })
      return Promise.reject({ code: res.data.code, message: res.data.info })
    }
    return res
  },
  err => {
    debugger
    if (err && err.response) {
      err.message = responseStatus[err.response.status] || '请求异常'
    }
    if (err.message.search('timeout') !== -1) {
      err.message = '请求超时'
    } else if (err.message === 'Network Error') {
      err.message = '请求异常'
    }

    tryHideFullScreenLoading()
    showAlert({ content: err.message })
    return Promise.reject(err)
  }
)

export default {
  post(url, data, headers = null) {
    return server({
      method: 'post',
      url,
      data,
      headers: headers
        ? headers
        : {
            'Content-Type': 'application/json; charset=UTF-8'
          }
    })
  },
  get(url, params) {
    return server({
      method: 'get',
      url,
      params, // get 请求时带的参数
      headers: {
        'Content-Type': 'application/json'
      }
    })
  },
  form(url, data) {
    return server({
      method: 'post',
      url,
      data, // form 请求时带的参数
      headers: { 'Content-Type': 'multipart/form-data' }
    })
  }
}
