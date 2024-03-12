import { guards, routes } from "@/router/routes"
import { createBrowserGuardRouter } from "@bingoben/react-router-g"

const router = createBrowserGuardRouter(routes, guards)
    
export { router }