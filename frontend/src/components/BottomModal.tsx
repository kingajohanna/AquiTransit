import React from "react";
import { Text } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";

interface SearchModalProps {
  refRBSheet: React.MutableRefObject<RBSheet>;
  data: any;
}

export const BottomModal: React.FC<SearchModalProps> = (props) => {
  return (
    <RBSheet
      ref={props.refRBSheet}
      closeOnDragDown={false}
      closeOnPressMask={true}
      height={140}
      customStyles={{
        container: {
          borderTopWidth: 3,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          padding: 20,
          paddingBottom: 5,
          flex: 1,
        },
      }}
    >
      <Text>show data here</Text>
    </RBSheet>
  );
};
