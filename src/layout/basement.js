import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const ChiroContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-wrap: wrap;

  @media (max-width: 1200px) {
    height: calc(100vh - 4rem); /*minus toolbar height*/
  }
`;

export const SideNavigationContainer = styled.div`
  flex: 0 0 14.5rem;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;
  position: relative;

  ${({ theme }) => css`
    border-right: 1px solid ${theme.BORDER_COLOR};
    box-shadow: 2px 0 5px -5px ${theme.BOX_SHADOW};
    -webkit-box-shadow: 2px 0 5px -5px ${theme.BOX_SHADOW};
    -moz-box-shadow: 2px 0 5px -5px ${theme.BOX_SHADOW};
  `}

  @media (max-width: 1200px) {
    display: none;
  }

  .side-nav {
    position: fixed;
    top: 17rem;
    z-index: 1;
    width: 14.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .side-nav-header {
    position: fixed;
    top: 40px;
  }
`;

export const ToolBarContainer = styled.div`
  flex: 0 0 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  padding: 0 1rem;

  ${({ theme }) => css`
    background: ${theme.TOOLBAR_SURFACE.main};
    -webkit-box-shadow: 0 7px 4px -7px ${theme.getRGB(theme.BOX_SHADOW_CUSTOM, 0.5)};
    -moz-box-shadow: 0 7px 4px -7px ${theme.getRGB(theme.BOX_SHADOW_CUSTOM, 0.5)};
    box-shadow: 0 7px 4px -7px ${theme.getRGB(theme.BOX_SHADOW_CUSTOM, 0.5)};
  `}

  @media (min-width: 1200px) {
    display: none;
  }

  .toolbar-title {
    & span {
      font-weight: bold;
      font-size: 0.9rem;
    }
  }
`;

export const MainContainer = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
`;
