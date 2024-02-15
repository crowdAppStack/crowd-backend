import { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'
import { UiLayout } from '@/components/global/UiLayout'
import { UiTypo } from '@/components/global/UiTypo'
import { UiInput } from '@/components/global/UiInput'
import { UiButton } from '@/components/global/UiButton'
import { LayoutFlex } from '@/components/global/LayoutFlex'
import { UiInfo } from '@/components/global/UiInfo'

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
    <UiLayout>
      <UiTypo kind="h1">
        Login
      </UiTypo>
      <LayoutFlex
        direction="column"
        gap={1}
        className="mt-4"
      >
        <UiInput
          kind="secondary"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
        />
        <UiInfo kind="error">
          {errors.email?.join('\n')}
        </UiInfo>
        <UiInput
          kind="secondary"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <UiInfo kind="error">
          {errors.password?.join('\n')}
        </UiInfo>
        <UiInfo kind="error">
          {globalError}
        </UiInfo>
      </LayoutFlex>
      <LayoutFlex gap={2}>
        <UiButton
          onClick={onSubmit}
        >
          Sign In
        </UiButton>
        <Link to="/"><UiButton kind="secondary">Back</UiButton></Link>
      </LayoutFlex>

    </UiLayout>
  )
}

export default AppLogin
