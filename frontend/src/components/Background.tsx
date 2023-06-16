import React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  ViewProps,
  StatusBar,
} from "react-native";
import { Colors } from "../theme/colors";

export const ScreenBackground: React.FC<ViewProps> = (props) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: Colors.bottom_top_bar,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        flex: 1,
      }}
    >
      <View style={styles.background}>{props.children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: Colors.main_stack_bg,
    paddingTop: 45,
    paddingBottom: 50,
  },
});
