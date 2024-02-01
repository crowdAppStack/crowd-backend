import { useEffect, useState } from "react"

import { User, UserApiResource } from "@/interfaces/User"
import { useLocalStorage } from "@/hooks/useLocalStorage"
import { AxiosResponse } from "axios"

export const useAuth = () => {
  const lc = useLocalStorage()
  const [user, setUser] = useState<User|null>(null)

  useEffect(() => {
    const user = lc.get('user') as UserApiResource

    if (user) {
      logClientUser(user)
    }
  }, [])

  async function login(email: string, password: string) {
    const { data: { data } } = await window.axios.post<AxiosResponse<UserApiResource, any>>('/auth/login', {
      email,
      password,
    })

    lc.set('user', data)
    logClientUser(data)
  }

  async function logout() {
    await window.axios.post('/auth/logout')
    clearClientUser()
  }

  function logClientUser(user: UserApiResource) {
    window.axios.defaults.headers.common['Authorization'] = `Bearer ${user.auth_token}`
    setUser({
      name: user.name,
      email: user.email,
    })
  }

  function clearClientUser() {
    window.axios.defaults.headers.common['Authorization'] = ''
    lc.remove('user')
    setUser(null)
  }

  return {
    user,
    login,
    logout,
  }
}