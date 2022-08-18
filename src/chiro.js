import { BrowserRouter } from "react-router-dom";

import GlobalStyle from "./layout/global";
import ThemeConfig from "./theme-config";

import { ChiroContainer, MainContainer } from "./layout/basement";

import { Navigation } from "./layout/navigation";

import Router from "./helpers/routes";

export default function Chiro() {
  return (
    <ThemeConfig>
      <GlobalStyle />
      <BrowserRouter>
        <ChiroContainer>
          <Navigation />
          <MainContainer>
            <Router />
          </MainContainer>
        </ChiroContainer>
      </BrowserRouter>
    </ThemeConfig>
  );
}
