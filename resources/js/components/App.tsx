import { CssVarsProvider, ThemeProvider } from '@mui/joy'
import theme from '~/theme'
import { RouterProvider } from 'react-router-dom'
import { routes } from '@/router'

export default function App() {
  return (
    <CssVarsProvider>
      <ThemeProvider theme={theme}>
        <RouterProvider router={routes} />
      </ThemeProvider>
    </CssVarsProvider>
  )
}