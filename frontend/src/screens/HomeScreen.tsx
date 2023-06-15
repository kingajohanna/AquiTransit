import React from "react";
import { ScrollView } from "react-native";
import { Header } from "../components/Header";

export const HomeScreen = () => {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <Header title="demo" />
    </ScrollView>
  );
};
