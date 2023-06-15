import { Dimensions, Platform } from "react-native";

const screenHeight = Dimensions.get("screen").height;
const windowHeight = Dimensions.get("window").height;

export const NAVBARHEIGHT = screenHeight - windowHeight;

export const androidBottomPadding =
  Platform.OS === "ios" ? 0 : NAVBARHEIGHT > 0 ? 0 : 20;
