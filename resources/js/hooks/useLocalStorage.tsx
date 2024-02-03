import { UserApiResource } from "@/interfaces/User"
import { getStorage } from "@bingoben/b-storage"
import { useEffect, useState } from "react"

export type CrowdLocalStorage = {
  user: UserApiResource | null
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