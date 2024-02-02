import { useEffect, useMemo } from "react"
import { useNavigate } from "react-router-dom"
import { useUser } from "./useUser"

export type Guard = {
  name: string
  redirectTo: string
  handler: () => boolean
}

export const useGuards = (name: string|string[]) => {
  const user = useUser()
  const navigate = useNavigate()

  const guards = useMemo(() => [
    {
      name: 'auth',
      handler: () => !!user,
      redirectTo: '/login'
    }
  ], [user])

  const guardSelected = useMemo<Guard[]>(() => {
    if (Array.isArray(name)) {
      return guards.filter(guard => name.includes(guard.name))
    } else {
      return guards.filter(guard => guard.name === name)
    }
  }, [name])

  if (!guardSelected.length) {
    throw new Error(`Guard "${name}" not found`)
  }

  useEffect(() => {
    if (!guardSelected.every(guard => guard.handler())) {
      navigate(guardSelected[0].redirectTo, { replace: true })
    }
  }, [guardSelected, navigate])

  return guardSelected.every(guard => guard.handler())
}