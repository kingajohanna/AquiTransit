import { View } from "react-native";
import React from "react";
import { SortedStopData } from "../types/SortedStopData";
import { TimetableComponent } from "./TimetableComponent";

export const TimetableBothDirection: React.FC<{ data: SortedStopData }> = ({
  data,
}) => {
  return (
    <View>
      <TimetableComponent
        stop={data.routes[0].stop}
        lineName={data.routeName}
        direction={data.routes[0].direction}
        children={
          <View style={{ paddingTop: 6 }}>
            {data.routes[1] && (
              <TimetableComponent
                stop={data.routes[1].stop}
                lineName={data.routeName}
                direction={data.routes[1].direction}
                onlyData
              />
            )}
          </View>
        }
      />
    </View>
  );
};
