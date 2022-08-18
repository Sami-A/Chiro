import { useRef } from "react";
import { ToolBarContainer } from "./basement";

import Menu from "../svg/menu";
import { Drawer } from "./drawer";

const Header = ({ logo }) => (
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
  const drawerRef = useRef();

  function openMenu() {
    drawerRef.current.style.display = "flex";
  }
  function closeMenu() {
    drawerRef.current.style.display = "none";
  }

  return (
    <ToolBarContainer>
      <Header logo={logo} />

      <div className="pointer" onClick={openMenu}>
        <Menu />
      </div>
      <Drawer drawerRef={drawerRef} closeMenu={closeMenu} />
    </ToolBarContainer>
  );
};
