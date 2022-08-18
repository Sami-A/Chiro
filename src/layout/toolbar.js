import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { ToolBarContainer } from "./basement";

import Menu from "../svg/menu";
import { Drawer } from "./drawer";

const Logo = ({ logo }) => (
  <div className="side-nav-header">
    <img
      src={require(`../assets/${logo}`)}
      width="130"
      height="50"
      alt="logo"
    />
  </div>
);

export const ToolBar = ({ logo }) => {
  const [workoutBodyArea, setWorkoutBodyArea] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (decodeURI(location.pathname).slice(1) === "settings") {
      setWorkoutBodyArea(null);
    } else {
      setWorkoutBodyArea(decodeURI(location.pathname).slice(1));
    }
  }, [location.pathname]);

  function openDrawer() {
    setIsDrawerOpen(true);
  }
  function closeDrawer() {
    setIsDrawerOpen(false);
  }

  return (
    <ToolBarContainer>
      <Logo logo={logo} />
      {workoutBodyArea && (
        <div className="text-center toolbar-title">
          <h4>{workoutBodyArea}</h4>
          <span>Workouts</span>
        </div>
      )}
      <div className="pointer" onClick={openDrawer}>
        <Menu />
      </div>
      <Drawer isDrawerOpen={isDrawerOpen} closeDrawer={closeDrawer} />
    </ToolBarContainer>
  );
};
