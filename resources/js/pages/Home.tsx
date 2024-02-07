import { Button, Divider, Grid, Sheet, Stack, Typography } from "@mui/joy"
import React, { useEffect, useState } from "react"
import { useAuth } from "@/hooks/useAuth"
import { useNavigate } from "react-router-dom"
import { useUser } from "@/hooks/useUser"
import { UiLayout } from "@/components/global/UiLayout"

const TemporaryHome: React.FC = () => {
  const [arrayLen, setArrayLen] = useState(0)
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
      <Sheet
        sx={{
          borderRadius: 'sm',
          border: '1px solid',
          borderColor: 'neutral.200',
          maxWidth: 1024,
          m: 'auto',
          p: 3,
        }}
        variant="soft"
      >
        <Typography
          level='h1'
          color="primary"
        >
          Hello, World!
        </Typography>
        <Typography
          level='title-lg'
        >
          Now with MUI! {user && `You are logged in as ${user.name} (${user.email})`}
        </Typography>
        <Typography>
          This would be the place to start building your app.
        </Typography>
        <Typography
          level="body-sm"
          color="neutral"
        >
          I added Typescript, MUI, and a few other things to get started. This would be perfect for building a CMS or a dashboard.
        </Typography>
      </Sheet>

      <Stack
        direction="row"
        spacing={1}
        sx={{ my: 1 }}
      >
        <Button onClick={click}>Welcome {user?.name}</Button>
        { !user && <Button onClick={() => navigate('/login')}>Login</Button> }
        { user && <Button onClick={logout}>Logout {user.name}</Button> }
        <Button
          onClick={() => navigate('/profile')}
          color="warning"
        >Profile
        </Button>
      </Stack>

      <Grid
        container
        spacing={2}
      >
        {
          Array.from({ length: arrayLen }).map((_, i) => (
            <Grid
              key={i}
              xs={12}
              sm={6}
              lg={4}
            >
              <Sheet
                sx={{
                  borderRadius: 'sm',
                  border: '1px solid',
                  borderColor: 'neutral.200',
                  p: 2,
                }}
              >
                <Typography
                  level='h3'
                  variant="plain"
                  color="primary"
                >
                  Card #{i + 1} 
                </Typography>
                <Divider sx={{ mb: 1 }} />
                <Typography level='title-md'>
                  Title of Card #{i + 1}
                </Typography>
                <Typography>
                  This is a temporary home for our app.
                </Typography>
                <Typography
                  level="body-sm"
                  color="neutral"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, eaque sed esse quae similique architecto facilis recusandae, delectus laboriosam ab saepe corrupti ea? Corporis laboriosam dolore recusandae consequatur quas consequuntur!
                </Typography>
              </Sheet>
            </Grid>
          ))
        }
      </Grid>
    </UiLayout>
  )
}

export default TemporaryHome