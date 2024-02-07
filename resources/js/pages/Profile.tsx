import { UiLayout } from "@/components/global/UiLayout"
import { useUser } from "@/hooks/useUser"
import { Sheet } from "@mui/joy"
import React from "react"

const Profile: React.FC = () => {
  const { user } = useUser()

  return (
    <UiLayout>
      <Sheet>
        <h1>Profile</h1>
        <p>{user?.name}</p>
        <p>{user?.email}</p>
      </Sheet>
    </UiLayout>
  )
}

export default Profile