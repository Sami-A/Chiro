import { useState, useRef, useEffect } from "react";

import styled from "@emotion/styled";
import { css } from "@emotion/react";

import NavLinks from "./nav-links";

import Close from "../svg/close";

const useDelayUnmount = (delayTime) => {
  const [showComponent, setShowComponent] = useState(false);
  useEffect(() => {
    let timeout = setTimeout(
      () => setShowComponent(delayTime ? false : true),
      delayTime
    );

    return () => clearTimeout(timeout);
  }, [delayTime, showComponent]);

  return showComponent;
};

export const Drawer = ({ isDrawerOpen, closeDrawer }) => {
  const drawerRef = useRef();

  // when drawer is closed,
  // this component unmounting will be delayed by 200ms-
  // to slide out the drawer.
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

const animate = (slide, style, from, to) => {
  const __from__ = { [style]: from };
  const __to__ = { [style]: to };
  return css`
    @keyframes ${slide} {
      0% {
        ${(() => __from__)()}
      }
      100% {
        ${(() => __to__)()}
      }
    }
  `;
};

const ANIMATION_TYPES = Object.freeze({
  FADE_IN: "fadeIn",
  FADE_OUT: "fadeOut",
  SLIDE_IN: "slideIn",
  SLIDE_OUT: "slideOut",
});

const ANIMATION_STYLES = new Map([
  [
    ANIMATION_TYPES.FADE_IN,
    { animation: `${ANIMATION_TYPES.FADE_IN} 150ms linear 1 forwards` },
  ],
  [
    ANIMATION_TYPES.FADE_OUT,
    { animation: `${ANIMATION_TYPES.FADE_OUT} 150ms linear 1 forwards` },
  ],
  [
    ANIMATION_TYPES.SLIDE_IN,
    { animation: `${ANIMATION_TYPES.SLIDE_IN} 150ms ease-in` },
  ],
  [
    ANIMATION_TYPES.SLIDE_OUT,
    { animation: `${ANIMATION_TYPES.SLIDE_OUT} 150ms ease-out forwards` },
  ],
]);
