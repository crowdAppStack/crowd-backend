import { CssVarsProvider, ThemeProvider } from '@mui/joy'
import TemporaryHome from './global/TemporaryHome'
import theme from '~/theme'

export default function App() {
  return (
    <CssVarsProvider>
      <ThemeProvider theme={theme}>
        <TemporaryHome />
      </ThemeProvider>
    </CssVarsProvider>
  )
}