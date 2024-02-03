import { User } from "@/interfaces/User"
import { useMemo } from "react"
import { useLocalStorage } from "./useLocalStorage"

export const useUser = () => {
  const { user } = useLocalStorage()

  return useMemo<User | null>(() => {
    if (user) {
      return {
        name: user.name,
        email: user.email,
      } as User
    }

    return null
  }, [user])
}