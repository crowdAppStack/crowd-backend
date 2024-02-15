import { useEffect, useState } from "react"
import { useAuth } from "@/hooks/useAuth"
import { useNavigate } from "react-router-dom"
import { useUser } from "@/hooks/useUser"

import { UiLayout } from "@/components/global/UiLayout"
import { UiButton } from "@/components/global/UiButton"
import { LayoutGrid } from "@/components/global/LayoutGrid"
import { LayoutFlex } from "@/components/global/LayoutFlex"
import { UiTypo } from "@/components/global/UiTypo"
import { UiBox } from "@/components/global/UiBox"

const TemporaryHome: React.FC = () => {
  const [arrayLen, setArrayLen] = useState(8)
  const { logout } = useAuth()
  const { user } = useUser()
  const navigate = useNavigate()

  const click = () => {
    window.axios.get('')
  }

  useEffect(() => {
    window.Echo.channel('test').listen('.hello', () => {
      setArrayLen(arrayLen + 1)
    })
  })

  useEffect(() => {
    if (!user) return

    window.Echo.private(`user.${user.id}`).listen('.hello', () => {
      setArrayLen(arrayLen + 1)
    })
  }, [user])

  return (
    <UiLayout>
      <UiTypo
        kind="h1"
        className="text-center"
      >
        Temporary Home
      </UiTypo>

      <LayoutFlex
        justify="center"
        align="center"
        wrap
        gap={2}
        className="mt-4"
      >
        <UiButton
          onClick={click}
          outlined
        >Welcome {user?.name}
        </UiButton>
        { !user && <UiButton onClick={() => navigate('/login')}>Login</UiButton> }
        { user && <UiButton onClick={logout}>Logout {user.name}</UiButton> }
        <UiButton
          outlined
          onClick={() => navigate('/profile')}
        >Profile
        </UiButton>
        <UiButton onClick={() => navigate('/ds')}>
          Design System
        </UiButton>
      </LayoutFlex>

      <LayoutGrid
        className="mt-4"
      >
        {
          Array.from({ length: arrayLen }).map((_, i) => (
            <UiBox
              key={i}
              kind="secondary"
            >
              <UiTypo
                kind="h3"
                className="text-center"
              >
                {i + 1}
              </UiTypo>
            </UiBox>
          ))
        } 
      </LayoutGrid>
    </UiLayout>
  )
}

export default TemporaryHome