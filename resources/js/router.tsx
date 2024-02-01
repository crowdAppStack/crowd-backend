import { createBrowserRouter } from "react-router-dom"
import { dynamicRoutes } from "@/d-router"

import Home from "@/components/pages/Home"
    
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  ...dynamicRoutes
])
    
export { routes }