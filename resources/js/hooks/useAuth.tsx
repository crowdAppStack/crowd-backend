import { UserApiResource } from "@/interfaces/User"
import { AxiosResponse } from "axios"
import { useLocalStorage } from "@/hooks/useLocalStorage"
import { useMemo, useState } from "react"

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const storage = useLocalStorage()

  async function login(email: string, password: string) {
    const { data: { data } } = await window.axios.post<AxiosResponse<UserApiResource, any>>('/auth/login', {
      email,
      password,
    })

    storage.user = data
    setIsAuthenticated(true)
    setClientUser(data)
  }

  async function logout() {
    await window.axios.post('/auth/logout')
    setIsAuthenticated(false)
    clearClientUser()
  }

  function setClientUser(user: UserApiResource) {
    window.axios.defaults.headers.common['Authorization'] = `Bearer ${user.auth_token}`
  }

  function clearClientUser() {
    delete window.axios.defaults.headers.common['Authorization']
    storage.remove('user')
  }

  useMemo(async () => {
    if (storage.user) {
      setClientUser(storage.user)
      setIsAuthenticated(true)
    }
  }, [])

  return {
    login,
    logout,
    isAuthenticated,
    clearClientUser,
    setClientUser,
  }
}