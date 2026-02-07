import { defineStore } from 'pinia'

export interface User {
  id: number
  username: string
  email: string
  avatar?: string
  role?: string
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('token') || null,
    user: JSON.parse(localStorage.getItem('user') || 'null') as User | null,
    isAuthenticated: !!localStorage.getItem('token')
  }),
  
  getters: {
    username: (state) => state.user?.username || '',
    isAdmin: (state) => state.user?.role === 'admin'
  },
  
  actions: {
    setAuth(token: string, user: User) {
      this.token = token
      this.user = user
      this.isAuthenticated = true
      localStorage.setItem('token', token)
      localStorage.setItem('user', JSON.stringify(user))
    },
    
    logout() {
      this.token = null
      this.user = null
      this.isAuthenticated = false
      localStorage.removeItem('token')
      localStorage.removeItem('user')
    },
    
    checkAuthStatus() {
      // 检查token是否有效
      const token = localStorage.getItem('token')
      const user = localStorage.getItem('user')
      
      if (token && user) {
        this.token = token
        this.user = JSON.parse(user)
        this.isAuthenticated = true
      }
    },
    
    updateUserInfo(userInfo: Partial<User>) {
      if (this.user) {
        this.user = { ...this.user, ...userInfo }
        localStorage.setItem('user', JSON.stringify(this.user))
      }
    }
  }
})