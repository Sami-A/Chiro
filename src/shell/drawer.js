import { useRef } from "react";
import useDelayUnmount from "helpers/use-delay-unmount";

import styled from "@emotion/styled";
import { css } from "@emotion/react";

import NavLinks from "./nav-links";

import Close from "svg/close";

import animate, { ANIMATION_TYPES, ANIMATION_STYLES } from "helpers/animate";

export const Drawer = ({ isDrawerOpen, closeDrawer }) => {
  const drawerRef = useRef();

  /**
     ~ When drawer is about to close,
        unmounting will be delayed by 200ms-
        to animate drawer slide out.
     ~ Rendering will not be delayed.
     ~ Ahh! The things we do for simple animation.
  */
  const delayTimeWhenUnmount = !isDrawerOpen ? 200 : 0;
  const showComponent = useDelayUnmount(delayTimeWhenUnmount);

  function handelClick(e) {
    if (!drawerRef.current) return;
    if (
      drawerRef.current.className === e.target.className ||
      e.target.nodeName === "A"
    ) {
      closeDrawer();
    }
  }

  return (
    showComponent && (
      <DrawerContainer
        ref={drawerRef}
        onClick={handelClick}
        style={
          isDrawerOpen
            ? ANIMATION_STYLES.get(ANIMATION_TYPES.FADE_IN)
            : ANIMATION_STYLES.get(ANIMATION_TYPES.FADE_OUT)
        }
      >
        <div
          className="drawer"
          style={
            isDrawerOpen
              ? ANIMATION_STYLES.get(ANIMATION_TYPES.SLIDE_IN)
              : ANIMATION_STYLES.get(ANIMATION_TYPES.SLIDE_OUT)
          }
        >
          <div className="drawer-content">
            <div className="close" onClick={closeDrawer}>
              <Close />
            </div>
            <NavLinks />
          </div>
        </div>
      </DrawerContainer>
    )
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

    ${animate(ANIMATION_TYPES.FADE_IN, "opacity", 0, 1)};

    ${animate(ANIMATION_TYPES.FADE_OUT, "opacity", 1, 0)};

    .drawer {
      position: absolute;
      right: 0;
      overflow-x: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;
      height: inherit;
      width: 245px;

      ${animate(ANIMATION_TYPES.SLIDE_IN, "right", "-245px", 0)};

      ${animate(ANIMATION_TYPES.SLIDE_OUT, "right", 0, "-245px")};

      background: ${theme.PRIMARY.main};
      padding-top: 7rem;

      box-shadow: -7px 2px 10px 1px
        ${theme.getRGB(theme.BOX_SHADOW_CUSTOM, 0.2)};
      -webkit-box-shadow: -7px 2px 10px 1px
        ${theme.getRGB(theme.BOX_SHADOW_CUSTOM, 0.2)};
      -moz-box-shadow: -7px 2px 10px 1px
        ${theme.getRGB(theme.BOX_SHADOW_CUSTOM, 0.2)};
      transition: 225ms;
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
      background: ${theme.getRGB(theme.SECONDARY.main, 0.1)};
      transition: 150ms;
    }
  `}
`;
