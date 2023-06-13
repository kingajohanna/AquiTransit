import Mapbox from "@rnmapbox/maps";
import { Text, View } from "react-native";

export const MapScreen = () => {
  return <Mapbox.MapView style={{ flex: 1 }} />;
};
