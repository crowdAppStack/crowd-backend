import { useUser } from "@/hooks/useUser"
import { Sheet } from "@mui/joy"
import React from "react"

const Profile: React.FC = () => {
  const user = useUser()

  return (
    <Sheet>
      <h1>Profile</h1>
      <p>{user?.name}</p>
      <p>{user?.email}</p>
    </Sheet>
  )
}

export default Profile