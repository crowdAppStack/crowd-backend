import Home from "@/components/pages/Home"
import Login from "@/components/pages/Login"
    
const dynamicRoutes = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element: <Login />
  }
]
    
export { dynamicRoutes }