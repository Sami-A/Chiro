import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { WORKOUT_ROUTES } from "helpers/routes";

import Menu from "svg/menu";

import { ToolBarContainer } from "./basement";
import { Drawer } from "./drawer";

const Logo = ({ logo, goHome }) => (
  <div className="side-nav-header pointer" onClick={goHome}>
    <img
      src={require(`../assets/${logo}`)}
      width="130"
      height="50"
      alt="logo"
    />
  </div>
);

export const ToolBar = ({ logo, goHome }) => {
  const [bodyArea, setBodyArea] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const path = decodeURI(location.pathname).slice(1);
    if (WORKOUT_ROUTES.has(path)) {
      setBodyArea(decodeURI(location.pathname).slice(1));
    } else {
      setBodyArea(null);
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
      <Logo logo={logo} goHome={goHome} />
      {bodyArea && (
        <div className="text-center toolbar-title">
          <h4>{bodyArea}</h4>
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
