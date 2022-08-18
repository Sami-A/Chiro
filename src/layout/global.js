import { Global, css, useTheme } from "@emotion/react";
const GlobalStyle = () => {
  const theme = useTheme();
  return (
    <Global
      styles={css`
        /* @font-face {
        font-family: "font1";
        src: url("https://fonts.googleapis.com/css?family=Kosugi+Maru&display=swap") format("truetype");
      } */
        *,
        *::before,
        *::after {
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          padding: 0;
          margin: 0;
          scrollbar-color: ${theme.SCROLLBAR} transparent;
          font-family: ${theme.FONT};
        }

        *::-webkit-scrollbar-thumb {
          background-color: ${theme.SCROLLBAR} transparent;
        }

        ::selection {
          background: ${theme.getRGB(theme.SECONDARY.main, 0.4)};
        }
        ::-moz-selection {
          background: ${theme.getRGB(theme.SECONDARY.main, 0.4)};
        }

        html {
          height: 100%;
        }

        body {
          background: ${theme.BACKGROUND};
          color: ${theme.ON_BACKGROUND};
          height: 100vh;
        }

        button {
          cursor: pointer;
        }

        a {
          text-decoration: none;
          color: ${theme.ON_BACKGROUND};
        }

        .pointer {
          cursor: pointer;
        }

        .text-center {
          text-align: center;
        }
      `}
    />
  );
};

export default GlobalStyle;
