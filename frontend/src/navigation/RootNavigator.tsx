import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import { SettingsScreen } from "../screens/SettingsScreen";
import { FavoritesScreen } from "../screens/FavoritesScreen";
import Icon from "react-native-vector-icons/Ionicons";
import { MapScreen } from "../screens/MapScreen";

import { StyleSheet } from "react-native";
import { androidBottomPadding } from "../utils/androidHelper";
import { Colors } from "../theme/colors";

const Tab = createMaterialBottomTabNavigator();

export const RootNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Map"
      barStyle={styles.tabBar}
      activeColor={Colors.active_icon}
      inactiveColor={Colors.non_active_icon}
      shifting
    >
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
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color }) => (
            <Icon name="settings" color={color} size={26} />
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
    backgroundColor: Colors.bottom_top_bar,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderColor: Colors.bottom_top_bar,
    overflow: "hidden",
    paddingBottom: androidBottomPadding,
  },
});
