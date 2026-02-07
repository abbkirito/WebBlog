export const validate = {
  email: (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  },
  
  username: (username: string): boolean => {
    const regex = /^[a-zA-Z0-9_]{3,20}$/
    return regex.test(username)
  },
  
  password: (password: string): boolean => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    return regex.test(password)
  }
}