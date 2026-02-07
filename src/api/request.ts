import axios from 'axios'
import { useAuthStore } from '@/stores/auth'
import { ElMessage } from 'element-plus'

const request = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

// 请求拦截器
request.interceptors.request.use((config) => {
  const authStore = useAuthStore()
  if (authStore.token) {
    config.headers.Authorization = `Bearer ${authStore.token}`
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    // 统一处理API响应格式
    const { code, msg, data } = response.data
    if (code === 0) {
      return { success: true, data, msg }
    } else {
      ElMessage.error(msg || '请求失败')
      return { success: false, data: null, msg, code }
    }
  },
  (error) => {
    // HTTP错误处理
    if (error.response?.status === 401) {
      const authStore = useAuthStore()
      authStore.logout()
      window.location.href = '/login'
    } else if (error.response?.status === 403) {
      ElMessage.error('权限不足')
    } else if (error.response?.status === 404) {
      ElMessage.error('资源不存在')
    } else {
      ElMessage.error('网络错误，请稍后重试')
    }
    return { success: false, data: null, msg: error.message }
  }
)

export default request