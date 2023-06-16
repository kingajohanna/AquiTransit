import React from "react";
import { Stop } from "../types/Stop";
import { ScrollView, View } from "react-native";
import { Text } from "react-native-paper";
import { Colors } from "../theme/colors";

type BusTimetable = {
  lineName: string;
  direction: string;
  stop: Stop;
};

export const TimetableComponent: React.FC<BusTimetable> = (props) => {
  return (
    <View>
      <Text
        style={{
          fontSize: 16,
          fontWeight: "bold",
          color: Colors.stop_line_title,
          paddingBottom: 4,
        }}
      >
        {props.lineName} - {props.stop.name}
      </Text>
      <Text
        style={{
          fontSize: 14,
          fontWeight: "bold",
          color: Colors.bus_departure_time,
          paddingBottom: 6,
        }}
      >
        {props.direction}
      </Text>

      <ScrollView
        horizontal
        style={{
          flexDirection: "row",
          paddingLeft: 30,
        }}
      >
        {props.stop.times.map((time) => {
          return (
            <Text
              style={{
                paddingRight: 12,
                color: Colors.bus_departure_time,
                fontSize: 12,
              }}
            >
              {time}
            </Text>
          );
        })}
      </ScrollView>
      <View
        style={{
          backgroundColor: Colors.bus_departure_time,
          height: 1,
          width: "70%",
          alignSelf: "center",
          marginTop: 8,
          marginBottom: 16,
        }}
      />
    </View>
  );
};
