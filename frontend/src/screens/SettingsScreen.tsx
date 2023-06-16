import { SafeAreaView, ScrollView, Text, View, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { ScreenBackground } from "../components/Background";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useStore } from "../stores";
import { StopData, getStopData } from "../helpers/getStopData";
import { Colors } from "../theme/colors";

export const SettingsScreen = () => {
  const { favoriteStore } = useStore();

  return (
    <ScreenBackground>
      <Header title="Settings" />
      <Pressable
        style={{
          marginTop: 40,
          paddingHorizontal: 15,
          backgroundColor: Colors.red,
          width: 342,
          height: 54,
          borderRadius: 10,
          alignItems: "center",
          flexDirection: "row",
        }}
        onPress={() => favoriteStore.clean()}
      >
        <View
          style={{
            marginRight: 20,
            alignItems: "center",
            transform: [{ scaleX: -1 }],
          }}
        >
          <Icon name="delete" size={20} />
        </View>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 24,
          }}
        >
          Delete all favorites
        </Text>
      </Pressable>
    </ScreenBackground>
  );
};
