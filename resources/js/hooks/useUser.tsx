import { User } from "@/interfaces/User"
import { useMemo } from "react"
import { useLocalStorage } from "./useLocalStorage"
import { usePrevious } from "./usePrevious"

export function useUser() {
  const { user } = useLocalStorage()

  const previousClientUser = usePrevious(user)

  const clientUser = useMemo<User | null>(() => {
    if (user) {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
      } as User
    }

    // If the user was listening to events, we should leave the channel
    if (previousClientUser) {
      leaveChannel(previousClientUser)
    }

    return null
  }, [user])

  function listenEvent(event: string, callback: (data: any) => void) {
    if (clientUser) {
      window.Echo.private(`user.${clientUser.id}`).listen(`.${event}`, callback)
      return
    }

    throw new Error('User is not authenticated')
  }

  function leaveChannel(user: User | null) {
    if (user) {
      window.Echo.leave(`user.${user.id}`)
      return
    }

    throw new Error('User should not be null.')
  }

  return {
    user: clientUser,
    listenEvent,
    leaveChannel,
  }
}