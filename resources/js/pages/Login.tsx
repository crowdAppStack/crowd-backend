import { useState } from 'react'
import { Container, Typography, Input, Button, Sheet } from '@mui/joy'

import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'

export type LoginFormErrors = {
  email?: string[]
  password?: string[]
}

const defaultLoginErrors: LoginFormErrors = {
  email: [],
  password: [],
}

const AppLogin: React.FC = () => {
  const navigate = useNavigate()
  const { login } = useAuth()

  const [email, setEmail] = useState('test@test.fr')
  const [password, setPassword] = useState('testtest')
  const [errors, setErrors] = useState<LoginFormErrors>(defaultLoginErrors)
  const [globalError, setGlobalError] = useState<string | null>(null)

  const onSubmit = async () => {
    try {
      await login(email, password)
      navigate('/')
    } catch (error: any) {
      setErrors(error.response.data.errors || defaultLoginErrors)
      setGlobalError(error.response.data.message || null)
    }
  }

  return (
    <Container maxWidth="sm">
      <Sheet
        variant='outlined'
        sx={{
          width: 'fit-content',
          marginTop: '20vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderRadius: 'md',
          mx: 'auto',
          p: 3,
        }}
      >
        <Typography
          level="h4"
          sx={{ marginBottom: '2rem' }}
        >
          Login
        </Typography>
        <Input
          variant="outlined"
          sx={{ marginBottom: '1rem' }}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type='email'
        />
        <Typography
          sx={{ marginBottom: '1rem', color: 'red' }}
        >
          {errors.email?.join('\n')}
        </Typography>
        <Input
          variant="outlined"
          type="password"
          sx={{ marginBottom: '1rem' }}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <Typography
          sx={{ marginBottom: '1rem', color: 'red' }}
        >
          {errors.password?.join('\n')}
        </Typography>
        <Typography
          sx={{ marginBottom: '1rem', color: 'red' }}
        >
          {globalError}
        </Typography>
        <Button
          variant="solid"
          color="primary"
          onClick={onSubmit}
        >
          Sign In
        </Button>

        <Link to="/">Back</Link>
      </Sheet>
    </Container>
  )
}

export default AppLogin
