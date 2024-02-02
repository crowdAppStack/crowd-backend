import { CssVarsProvider, ThemeProvider } from '@mui/joy'
import theme from '~/theme'
import { RouterProvider } from 'react-router-dom'
import { router } from '@/router'

export default function App() {
  return (
    <CssVarsProvider>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </CssVarsProvider>
  )
}