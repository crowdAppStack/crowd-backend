import { createBrowserRouter } from "react-router-dom"
import { dynamicRoutes } from "@/d-router"
    
const routes = createBrowserRouter([
  ...dynamicRoutes
])
    
export { routes }