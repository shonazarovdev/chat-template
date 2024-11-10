import PropTypes from "prop-types";
import { useMemo } from "react";

// @mui
import { CssBaseline, GlobalStyles } from "@mui/material";
import {
  ThemeProvider as MUIThemeProvider,
  StyledEngineProvider,
  createTheme,
} from "@mui/material/styles";

// hooks
import useSettings from "../hooks/useSettings.js";
import breakpoints from "./breakpoints";
import componentsOverride from "./overrides";
//
import palette from "./palette";
import shadows, { customShadows } from "./shadows";
import typography from "./typography";

// ----------------------------------------------------------------------

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

export default function ThemeProvider({ children }) {
  const { themeMode, themeDirection } = useSettings();

  const isLight = themeMode === "light";

  const themeOptions = useMemo(
    () => ({
      palette: isLight ? palette.light : palette.dark,
      typography,
      breakpoints,
      shape: { borderRadius: 8 },
      direction: themeDirection,
      shadows: isLight ? shadows.light : shadows.dark,
      customShadows: isLight ? customShadows.light : customShadows.dark,
    }),
    [isLight, themeDirection],
  );

  const theme = createTheme(themeOptions);

  theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles
          styles={{
            "*::-webkit-scrollbar": {
              width: "8px", // ширина скроллбара
              height: "8px", // высота для горизонтального скроллбара
            },
            "*::-webkit-scrollbar-thumb": {
              backgroundColor: "#888", // цвет ползунка
              borderRadius: "4px", // закругление ползунка
            },
            "*::-webkit-scrollbar-track": {
              backgroundColor: "#f1f1f1", // цвет фона скроллбара
            },
          }}
        />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
