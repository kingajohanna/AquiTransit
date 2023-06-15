import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import MapboxGL from "@rnmapbox/maps";
import { RootNavigator } from "./src/navigation/RootNavigator";
import { MAP_API_KEY } from "@env";
import { Provider } from "react-native-paper";
import { baseTheme } from "./src/styles/paperTheme";

MapboxGL.setAccessToken(MAP_API_KEY);

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Provider theme={baseTheme}>
        <RootNavigator />
      </Provider>
    </NavigationContainer>
  );
}

export default App;
