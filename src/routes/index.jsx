import { useRoutes } from "react-router-dom";
import Home from "../Pages";
import Layouts from './../components/layouts/Layouts';

export default function AppRouter() {
  const publicRoutes = [
    {
      path: "/",
      element: (
        <Layouts>
          <Home />
        </Layouts>
      ),
      index: true,
    },
  ];

  const routes = useRoutes([...publicRoutes]);
  return routes;
}
