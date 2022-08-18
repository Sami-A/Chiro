import { useRoutes } from "react-router-dom";
import { Workouts } from "../scene/workouts/workouts";
import { Settings } from "../scene/settings/settings";

const Router = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Workouts />,
      children: [
        {
          path: ":bodyArea",
          element: null,
        },
      ],
    },

    {
      path: "settings",
      element: <Settings />,
    },
  ]);

  return routes;
};

export default Router;
