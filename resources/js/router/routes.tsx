import { CrowdLocalStorage } from "@/hooks/useLocalStorage"
import { getStorage } from "@bingoben/b-storage"
import { type Guard, type Route } from "@bingoben/react-router-g"

import Home from "@/pages/Home"
import Login from "@/pages/Login"
import Profile from "@/pages/Profile"
import DesignSystem from "@/pages/design-system/DesignSystem"
    
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
  },
  {
    path: "ds",
    element: <DesignSystem />
  }
]

export const guards: Guard[] = [
  {
    name: 'auth',
    handler: () => getStorage<CrowdLocalStorage>().user !== null,
    redirectTo: '/login'
  }
]