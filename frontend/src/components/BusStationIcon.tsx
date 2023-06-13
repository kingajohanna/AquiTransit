import { View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export const BusStationIcon = () => {
  return (
    <View
      style={{
        backgroundColor: "yellow",
        borderRadius: 5,
        borderColor: "black",
        borderWidth: 1,
      }}
    >
      <Icon name="bus-marker" size={22} />
    </View>
  );
};
