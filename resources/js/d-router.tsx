
import Login from "@/components/pages/Login"
import Profile from "@/components/pages/Profile"
    
const dynamicRoutes = [
      
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/profile",
    element: <Profile />
  }
]
    
export { dynamicRoutes }