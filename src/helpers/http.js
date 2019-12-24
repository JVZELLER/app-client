import axios from './axios'

function post (url, params) {
  return axios.post(url, params)
}

function get (url, params) {
  return axios.get(url, params)
}

function setAuthorizationToken (token) {
  axios.defaults.headers.common.Authorization = `Token ${token}`
}

const http = {
  get,
  post,
  setAuthorizationToken
}

export default http
