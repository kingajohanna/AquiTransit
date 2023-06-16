import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { Header } from "../components/Header";
import { Colors } from "../theme/colors";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ScreenBackground } from "../components/Background";
import { TimetableComponent } from "../components/TimetableComponent";
import { busRoutes } from "../assets/lines/lines";

export const FavoritesScreen = () => {
  return (
    <ScreenBackground>
      <Header title="Favourites" />
      <ScrollView style={{ marginTop: 40 }}>
        <TimetableComponent
          stop={busRoutes[0].stops[1]}
          lineName={busRoutes[0].name}
          direction={busRoutes[0].direction}
        />
      </ScrollView>
    </ScreenBackground>
  );
};
