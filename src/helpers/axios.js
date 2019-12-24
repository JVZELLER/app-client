import axios from 'axios'

const DEFAULT_REQUEST_TIMEOUT_VALUE_MS = 60000

const AxiosInstance = axios.create({
  baseURL: process.env.API_BASE_URL,
  timeout: DEFAULT_REQUEST_TIMEOUT_VALUE_MS
})

export default AxiosInstance
