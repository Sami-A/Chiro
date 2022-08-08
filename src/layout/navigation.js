import { NavLink } from "react-router-dom";
import { WorkoutBodyArea } from "../config/data";

const Logo = () => <h1>Chiro</h1>;
const NavigationContainer = () => (
  <>
    <div className="navigation-container-menu-group">
      <h3>Category</h3>
      <NavLink to={`/${WorkoutBodyArea.UPPER_BACK}`}>Upper Back</NavLink>
      <NavLink to={`/${WorkoutBodyArea.LOWER_BACK}`}>Lower Back</NavLink>
    </div>

    <NavLink to="/settings">Settings</NavLink>
  </>
);

export const Navigation = () => (
  <div className="navigation-container">
    <Logo />
    <NavigationContainer />
  </div>
);
