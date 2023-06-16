import React, { useEffect, useState } from "react";
import { Pressable, View } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import { Stop } from "../types/Stop";
import Icon from "react-native-vector-icons/Ionicons";
import { Colors } from "../theme/colors";
import { TimetableComponent } from "./TimetableComponent";
import { getDirection } from "../helpers/getDirection";
import { useStore } from "../stores";
import { BusRoute } from "../types/BusRoute";

interface SearchModalProps {
  refRBSheet: React.MutableRefObject<RBSheet>;
  data: { stop: Stop; route: BusRoute } | undefined;
}

export const BottomModal: React.FC<SearchModalProps> = ({
  refRBSheet,
  data,
}) => {
  const { favoriteStore } = useStore();
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    if (data) setIsFav(favoriteStore.isFav(data.stop.name));
  }, [data]);

  const editFav = () => {
    if (data)
      if (isFav) {
        favoriteStore.removeFavStop(data.stop.name);
        setIsFav(false);
      } else {
        favoriteStore.addFavStop(data.stop.name);
        setIsFav(true);
      }
  };

  return (
    <RBSheet
      ref={refRBSheet}
      closeOnDragDown={false}
      closeOnPressMask={true}
      height={60}
      customStyles={{
        container: {
          borderTopWidth: 3,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          padding: 20,
          paddingBottom: 5,
          flex: 1,
          backgroundColor: Colors.auth_stack_bg,
          borderColor: Colors.auth_stack_bg,
        },
      }}
    >
      {data && (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TimetableComponent
            stop={data.stop}
            lineName={data.route.name}
            direction={getDirection(data.route)}
          />
          <Pressable onPress={() => editFav()}>
            {isFav ? (
              <Icon name="heart" color={Colors.stop_line_title} size={32} />
            ) : (
              <Icon
                name="heart-outline"
                color={Colors.stop_line_title}
                size={32}
              />
            )}
          </Pressable>
        </View>
      )}
    </RBSheet>
  );
};
