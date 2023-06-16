import { DefaultTheme } from "react-native-paper";

export const baseTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    secondaryContainer: "transparent",
  },
};
