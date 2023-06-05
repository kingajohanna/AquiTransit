import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { HomeScreen } from "../screens/HomeScreen";
import { SettingsScreen } from "../screens/SettingsScreen";
import Icon from "react-native-vector-icons/Ionicons";
import { MapScreen } from "../screens/MapScreen";

const Tab = createMaterialBottomTabNavigator();

export const RootNavigator = () => {
  return (
    <Tab.Navigator>
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
    </Tab.Navigator>
  );
};
