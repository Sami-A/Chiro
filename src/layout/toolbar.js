import { useRef } from "react";

import Menu from "../svg/menu";
import { Drawer } from "./drawer";

const Logo = () => <h1>Chiro</h1>;

export const ToolBar = () => {
  const drawerRef = useRef();

  function openMenu() {
    drawerRef.current.style.display = "flex";
  }
  function closeMenu() {
    drawerRef.current.style.display = "none";
  }

  return (
    <div className="tool-bar">
      <Logo />

      <div className="pointer" onClick={openMenu}>
        <Menu />
      </div>
      <Drawer drawerRef={drawerRef} closeMenu={closeMenu} />
    </div>
  );
};
