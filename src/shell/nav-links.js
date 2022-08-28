import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

import { WorkoutBodyArea } from "config/data";

const NavLinks = () => (
  <NavLinksContainer>
    <div className="nav-menu">
      <div className="nav-menu-group">
        <h3>Workouts</h3>
        <NavLink to={`/${WorkoutBodyArea.UPPER_BACK}`}>Upper Back</NavLink>
        <NavLink to={`/${WorkoutBodyArea.LOWER_BACK}`}>Lower Back</NavLink>
      </div>
      <NavLink to="/settings">Settings</NavLink>
    </div>
  </NavLinksContainer>
);

export default NavLinks;

const NavLinksContainer = styled.div`
  .nav-menu-group {
    margin-top: 0.75rem;
    position: relative;
  }
  .nav-menu-group > h3 {
    position: absolute;
    top: -1.3rem;
    font-size: 0.7rem;
    font-weight: bold;
    text-decoration: underline;
  }

  .nav-menu-group > a {
    margin-left: 0.7rem;
  }

  .nav-menu a {
    display: block;
    margin-bottom: 2.7rem;
    font-size: 1rem;
    font-weight: bold;
    color: ${({ theme }) => theme.TEXT_COLOR};
  }

  .nav-menu a:hover {
    color: ${({ theme }) => theme.TEXT_COLOR};
    text-decoration: underline solid ${({ theme }) => theme.TEXT_COLOR} 0.3rem;
    text-underline-offset: 0.7rem;
    text-shadow: 0.3px 0.3px ${({ theme }) => theme.BOX_SHADOW};
  }
  .nav-menu > a:last-child {
    margin-top: 4rem;
  }
`;
