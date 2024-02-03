import { UserApiResource } from "@/interfaces/User"
import { getStorage } from "@bingoben/b-storage"
import { useEffect, useState } from "react"

export type CrowdLocalStorage = {
  user: UserApiResource
  auth_token: string
}

export const useLocalStorage = () => {
  const [storage, setStorage] = useState(getStorage<CrowdLocalStorage>())

  useEffect(() => {
    window.addEventListener('bstorage', () => {
      setStorage(getStorage<CrowdLocalStorage>())
    })
  }, [])

  return storage
}