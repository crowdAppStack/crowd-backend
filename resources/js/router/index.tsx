import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import { routes as rawRoutes } from "@/router/routes"
import ProtectedRoute from "@/components/core/ProtectedRoute"

const routes = createRoutesFromElements(
  <>
    {rawRoutes.map((route, i) => (
      <Route
        key={i}
        path={route.path}
        element={route.guard ? 
          <ProtectedRoute
            guard={route.guard}
            element={route.element}
          /> : route.element}
      />
    ))}
  </>
)

const router = createBrowserRouter(routes)
    
export { router }