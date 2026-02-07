// 通用类型
export interface ApiResponse<T = any> {
  code: number
  msg: string
  data: T
  timestamp: number
}

export interface PaginatedData<T> {
  items: T[]
  total: number
  page: number
  size: number
  pages: number
}

// 用户类型
export interface User {
  id: number
  username: string
  email: string
  avatar?: string
  role?: string
  createdAt: string
  updatedAt: string
}

export interface LoginData {
  username: string
  password: string
  remember?: boolean
}

export interface RegisterData {
  username: string
  email: string
  password: string
  confirmPassword: string
}

// 帖子类型
export interface Post {
  id: number
  title: string
  content: string
  excerpt?: string
  authorId: number
  author?: User
  viewCount: number
  likeCount: number
  commentCount: number
  tags?: string[]
  category?: string
  createdAt: string
  updatedAt: string
}

export interface CreatePostData {
  title: string
  content: string
  tags?: string[]
  category?: string
}

export interface PostListParams {
  page?: number
  size?: number
  category?: string
  tag?: string
  keyword?: string
}