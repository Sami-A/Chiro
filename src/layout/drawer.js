import { NavLink } from "react-router-dom";

import { WorkoutBodyArea } from "../config/data";

import Close from "../svg/close";

export const Drawer = ({ drawerRef, closeMenu }) => {
  return (
    <div ref={drawerRef} className="drawer-backdrop">
      <div className="drawer">
        <div className="drawer-content">
          <div className="close" onClick={closeMenu}>
            <Close />
          </div>
          <div className="nav-menu-group">
            <h3 className="nav-menu-group-header">Category</h3>
            <NavLink to={`/${WorkoutBodyArea.UPPER_BACK}`}>Upper Back</NavLink>
            <NavLink to={`/${WorkoutBodyArea.LOWER_BACK}`}>Lower Back</NavLink>
          </div>

          <NavLink to="/settings">Settings</NavLink>
        </div>
      </div>
    </div>
  );
};
