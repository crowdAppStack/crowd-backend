import { User, UserApiResource } from "@/interfaces/User"
import { useMemo } from "react"
import { useLocalStorage } from "./useLocalStorage"

export const useUser = () => {
  const { get } = useLocalStorage()

  return useMemo<User | null>(() => {
    const user = get<UserApiResource>('user')

    if (user) {
      return {
        name: user.name,
        email: user.email,
      } as User
    }

    return null
  }, [get])
}