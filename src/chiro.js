import { BrowserRouter } from "react-router-dom";

import ThemeConfig from "./theme-config";
import GlobalStyle from "./layout/global";

import ErrorBoundary from "./scene/error-boundary";

import { ChiroContainer, MainContainer } from "./layout/basement";

import { Navigation } from "./layout/navigation";

import Router from "./helpers/routes";

export default function Chiro() {
  return (
    <ThemeConfig>
      <GlobalStyle />
      <BrowserRouter>
        <ErrorBoundary>
          <ChiroContainer>
            <Navigation />
            <MainContainer>
              <Router />
            </MainContainer>
          </ChiroContainer>
        </ErrorBoundary>
      </BrowserRouter>
    </ThemeConfig>
  );
}
