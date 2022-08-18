import { useSelector } from "react-redux";

import { ThemeProvider } from "@emotion/react";

import { THEME_MODE, LIGHT, DARK } from "./theme";

export default function ThemeConfig({ children }) {
  const theme = useSelector(({ settings }) => settings.theme);

  return (
    <ThemeProvider theme={theme === THEME_MODE.LIGHT ? LIGHT : DARK}>
      {children}
    </ThemeProvider>
  );
}
