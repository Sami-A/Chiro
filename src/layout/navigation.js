import { useSelector } from "react-redux";

import { ToolBarContainer, SideNavigationContainer } from "./basement";
import { ToolBar } from "./toolbar";
import NavLinks from "./nav-links";

import { THEME_MODE } from "../theme";

const LOGO_NAMES = {
  chiroLight: "chiro_light.png",
  chiroLightSmall: "chiro_light_small.png",
  chiroDark: "chiro_dark.png",
  chiroDarkSmall: "chiro_dark_small.png",
};

const Header = ({ logo }) => {
  return (
    <div className="side-nav-header">
      <img
        src={require(`../assets/${logo}`)}
        width="80"
        height="120"
        alt="logo"
      />
    </div>
  );
};

export const Navigation = () => {
  const theme = useSelector(({ settings }) => settings.theme);

  return (
    <>
      <ToolBarContainer>
        <ToolBar
          logo={
            theme === THEME_MODE.LIGHT
              ? LOGO_NAMES.chiroDarkSmall
              : LOGO_NAMES.chiroLightSmall
          }
        />
      </ToolBarContainer>
      <SideNavigationContainer>
        <div className="side-nav">
          <Header
            logo={
              theme === THEME_MODE.LIGHT
                ? LOGO_NAMES.chiroDark
                : LOGO_NAMES.chiroLight
            }
          />
          <NavLinks />
        </div>
      </SideNavigationContainer>
    </>
  );
};
