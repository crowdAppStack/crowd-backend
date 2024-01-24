import { createBrowserRouter } from "react-router-dom";
import AppHome from "@/components/pages/AppHome";
import AppLogin from "@/components/pages/AppLogin";

const routes = createBrowserRouter([

  {
    path: "/",
    element: <AppHome />
  },
  {
    path: "/login",
    element: <AppLogin />
  }
]);

export { routes }