import { breakpoints } from "./breakpoints";
import { fontStyle } from "./fontStyle";

export const theme = {
  colors: {
    primary: "#fff",
    secondary: "#90a4b4",
    surface: "#aa8270",

    other: {
      primary: "#374d5e",
      secondary: "#00e600",
    },
  },

  grid: {
    col3: "33.333%",
    col2: "50%",
    col1: "100%",
  },

  desktopFirst: {
    tablet: `(max-width: ${breakpoints.medium}px)`,
    desktop: `(max-width: ${breakpoints.large}px)`,
  },

  mobileFirst: {
    breakpoints: {},
  },

  fontStyle,
};
