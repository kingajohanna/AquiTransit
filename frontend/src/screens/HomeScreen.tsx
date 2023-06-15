import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Header } from '../components/Header';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from "react-native/Libraries/NewAppScreen";
import { Section } from "../components/Section";

export const HomeScreen = () => {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <Header />
      <View
        style={{
          backgroundColor: Colors.white,
        }}
      >
        <Section title="Step One">
          Edit <Text style={styles.highlight}>App.tsx</Text> to change this
          screen and then come back to see your edits.
        </Section>
        <Section title="See Your Changes">
          <ReloadInstructions />
        </Section>
        <Section title="Debug">
          <DebugInstructions />
        </Section>
        <Section title="Learn More">
          Read the docs to discover what to do next:
        </Section>
        <LearnMoreLinks />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  highlight: {
    fontWeight: "700",
  },
});
