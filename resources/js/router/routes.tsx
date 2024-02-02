import Home from "@/components/pages/Home"
import Login from "@/components/pages/Login"
import Profile from "@/components/pages/Profile"

type RawRoute = {
  path: string
  element: JSX.Element
  guard?: string|string[]
}
    
export const routes: RawRoute[] = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/profile",
    element: <Profile />,
    guard: 'auth'
  }
]