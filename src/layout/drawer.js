import { useRef } from "react";

import styled from "@emotion/styled";
import { css } from "@emotion/react";

import NavLinks from "./nav-links";

import Close from "../svg/close";

export const Drawer = ({ isDrawerOpen, closeDrawer }) => {
  const drawerRef = useRef();

  function handelClick(e) {
    if (!drawerRef.current) return;
    if (
      drawerRef.current.className === e.target.className ||
      e.target.nodeName === "A"
    ) {
      closeDrawer();
    }
  }

  if (!isDrawerOpen) return null;

  return (
    <DrawerContainer ref={drawerRef} onClick={handelClick}>
      <div className="drawer">
        <div className="drawer-content">
          <div className="close" onClick={closeDrawer}>
            <Close />
          </div>
          <NavLinks />
        </div>
      </div>
    </DrawerContainer>
  );
};

const DrawerContainer = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;

  display: flex;
  justify-content: flex-end;
  height: 100%;
  width: 100%;

  ${({ theme }) => css`
  
  background: ${theme.getRGB(theme.BACK_DROP, 0.5)};

  .drawer {
    position: relative;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: inherit;
    width: 245px;

    background: ${theme.PRIMARY.main};
    padding-top: 7rem;

    box-shadow: -7px 2px 10px 1px ${theme.getRGB(theme.BOX_SHADOW_CUSTOM, 0.2)};
    -webkit-box-shadow: -7px 2px 10px 1px ${theme.getRGB(
      theme.BOX_SHADOW_CUSTOM,
      0.2
    )};
    -moz-box-shadow: -7px 2px 10px 1px ${theme.getRGB(
      theme.BOX_SHADOW_CUSTOM,
      0.2
    )};
    transition: 225ms;

  `}

  }

  .drawer-content > div,
  a {
    text-decoration: none;
    display: block;
    margin-bottom: 1.3rem;
  }

  .drawer-content .nav-menu-group {
    display: block;
  }

  .drawer-content .close {
    position: absolute;
    top: 1rem;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
    cursor: pointer;
    display: inline-flex;
    padding: 9px;
    line-height: 2.4rem;
    border-radius: 50%;
  }
  .drawer-content .close:hover {
    background: ${({ theme }) => theme.getRGB(theme.SECONDARY.main, 0.1)};
    transition: 150ms;
  }
`;
