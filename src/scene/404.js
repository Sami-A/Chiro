import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import styled from "@emotion/styled";
import { ElevatedButton } from "skin/button";

import { THEME_MODE } from "config/theme";

const _404_GIF = {
  light: "404_light.gif",
  dark: "404_dark.gif",
};

export const PageNotFound = () => {
  const theme = useSelector(({ settings }) => settings.theme);
  return (
    <PageNotFoundContainer>
      <img
        src={require(`assets/${
          theme === THEME_MODE.LIGHT ? _404_GIF.light : _404_GIF.dark
        }`)}
        alt="404"
      />
      <Link to="/">
        <ElevatedButton>Go Home</ElevatedButton>
      </Link>
    </PageNotFoundContainer>
  );
};

const PageNotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  font-size: 5rem;
  gap: 4rem;

  & > img {
    min-width: 300px;
  }
`;
