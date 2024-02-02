import { UserApiResource } from "@/interfaces/User"
import { AxiosResponse } from "axios"
import { useLocalStorage } from "@/hooks/useLocalStorage"

export const useAuth = () => {
  const lc = useLocalStorage()

  async function login(email: string, password: string) {
    const { data: { data } } = await window.axios.post<AxiosResponse<UserApiResource, any>>('/auth/login', {
      email,
      password,
    })

    lc.set('user', data)
    setClientUser(data)
  }

  async function logout() {
    await window.axios.post('/auth/logout')
    clearClientUser()
  }

  function setClientUser(user: UserApiResource) {
    window.axios.defaults.headers.common['Authorization'] = `Bearer ${user.auth_token}`
  }

  function clearClientUser() {
    window.axios.defaults.headers.common['Authorization'] = ''
    lc.remove('user')
  }

  return {
    login,
    logout,
  }
}