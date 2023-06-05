import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import MapboxGL from "@rnmapbox/maps";
import { RootNavigator } from "./src/navigation/RootNavigator";
import { MAP_API_KEY } from "@env";

MapboxGL.setAccessToken(MAP_API_KEY);

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

export default App;
