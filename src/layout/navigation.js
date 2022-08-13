import { NavLink } from "react-router-dom";

import { WorkoutBodyArea } from "../config/data";

import { ToolBar } from "./toolbar";

const Logo = () => <h1>Chiro</h1>;
const SideNavContainer = () => (
  <div className="side-nav-container">
    <Logo />
    <div className="side-nav">
      <div className="nav-menu-group">
        <h3>Category</h3>
        <NavLink to={`/${WorkoutBodyArea.UPPER_BACK}`}>Upper Back</NavLink>
        <NavLink to={`/${WorkoutBodyArea.LOWER_BACK}`}>Lower Back</NavLink>
      </div>

      <NavLink to="/settings">Settings</NavLink>
    </div>
  </div>
);

export const Navigation = () => (
  <>
    <ToolBar />
    <SideNavContainer />
  </>
);
