import { useRoutes } from "react-router-dom";
import { Workouts } from "../scene/workouts/workouts";
import { Settings } from "../scene/settings/settings";
import { PageNotFound } from "../scene/404";

export const WORKOUT_ROUTES = new Set(["Upper Back", "Lower Back"]);

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
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);

  return routes;
};

export default Router;
