import Home from "@/pages/Home"
import Login from "@/pages/Login"
import Profile from "@/pages/Profile"
import { CrowdLocalStorage } from "@/hooks/useLocalStorage"
import { getStorage } from "@bingoben/b-storage"
import { type Guard, type Route } from "@bingoben/react-router-g"
    
export const routes: Route[] = [
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

export const guards: Guard[] = [
  {
    name: 'auth',
    handler: () => getStorage<CrowdLocalStorage>().user !== null,
    redirectTo: '/login'
  }
]