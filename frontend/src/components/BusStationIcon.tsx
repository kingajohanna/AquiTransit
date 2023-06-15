import { View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Colors } from "../styles/colors";

export const BusStationIcon = () => {
  return (
    <View
      style={{
        backgroundColor: Colors.yellow,
        borderRadius: 5,
        borderColor: "black",
        borderWidth: 1,
      }}
    >
      <Icon name="bus-stop" size={22} />
    </View>
  );
};
