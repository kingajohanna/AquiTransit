import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { HomeScreen } from "../screens/HomeScreen";
import { SettingsScreen } from "../screens/SettingsScreen";
import { FavoritesScreen } from "../screens/FavoritesScreen";
import Icon from "react-native-vector-icons/Ionicons";
import { MapScreen } from "../screens/MapScreen";
import { Colors } from "../styles/colors";

import { StyleSheet } from "react-native";
import { androidBottomPadding } from "../utils/androidHelper";

const Tab = createMaterialBottomTabNavigator();

export const RootNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Map"
      barStyle={styles.tabBar}
      activeColor={Colors.neonGreen}
      inactiveColor={Colors.mediumGreen}
      shifting
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarLabel: "Map",
          tabBarIcon: ({ color }) => (
            <Icon name="map" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarLabel: "Favorites",
          tabBarIcon: ({ color }) => (
            <Icon name="heart" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    borderWidth: 0.5,
    borderBottomWidth: 1,
    backgroundColor: Colors.darkGreen,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderColor: Colors.darkGreen,
    overflow: "hidden",
    paddingBottom: androidBottomPadding,
  },
});
