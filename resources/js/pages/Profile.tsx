import { UiBox } from "@/components/global/UiBox"
import { UiButton } from "@/components/global/UiButton"
import { UiLayout } from "@/components/global/UiLayout"
import { UiTypo } from "@/components/global/UiTypo"
import { useUser } from "@/hooks/useUser"
import { Link } from "react-router-dom"

const Profile: React.FC = () => {
  const { user } = useUser()

  return (
    <UiLayout>
      <UiTypo kind="h1">Profile</UiTypo>

      <UiBox
        className="mt-2 text-white"
        kind="secondary"
      >
        <UiTypo>{user?.name}</UiTypo>
        <UiTypo>{user?.email}</UiTypo>
      </UiBox>
      
      <Link to="/"><UiButton className="mt-4">Back</UiButton>
      </Link>
    </UiLayout>
  )
}

export default Profile