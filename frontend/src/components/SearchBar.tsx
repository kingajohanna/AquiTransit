import React, { useState } from "react";
import { View, TextInput, Text, Pressable } from "react-native";

import axios from "axios";
import { MAP_API_KEY } from "@env";

import { Card, Menu } from "react-native-paper";
import { Point } from "../types/Point";
import Icon from "react-native-vector-icons/Ionicons";

type Place = {
  text: string;
  place_name: string;
  center: number[];
};

export const SearchBar: React.FC<{
  setLocation: (p: Point, fly?: boolean) => void;
}> = (props) => {
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState<Place[]>([]);
  const [visible, setVisible] = useState(false);

  const handleSearch = async (text: string) => {
    setVisible(true);
    setSearchText(text);
    try {
      const response = await axios.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${text}.json?proximity=ip&access_token=${MAP_API_KEY}`
      );

      const extractedData = response.data.features.map((feature: any) => {
        const { text, place_name, center } = feature;
        return { text, place_name, center } as Place;
      });

      setSuggestions(extractedData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Menu
        contentStyle={{
          paddingVertical: 0,
          borderRadius: 10,
          borderWidth: 1,
        }}
        onDismiss={() => {
          setVisible(false);
        }}
        visible={visible}
        anchorPosition="bottom"
        anchor={
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              borderWidth: 2,
              padding: 10,
              borderRadius: 40,
              marginHorizontal: 8,
              width: 330,
              borderColor: "#777777",
              backgroundColor: "white",
            }}
          >
            <Icon name="search" size={26} color="#777777" />
            <TextInput
              style={{ paddingLeft: 10 }}
              onChangeText={handleSearch}
              value={searchText}
              placeholderTextColor="#CCCCCC"
              placeholder="Bring me here..."
            />
          </View>
        }
      >
        {suggestions.map((place, index) => {
          return (
            <Pressable
              key={index}
              onPress={() => {
                props.setLocation(
                  {
                    latitude: place.center[1],
                    longitude: place.center[0],
                  } as Point,
                  true
                );
                setSearchText(place.text);
                setVisible(false);
              }}
            >
              <Card.Title
                style={{ width: 330 }}
                title={place.text}
                subtitle={place.place_name}
              />
            </Pressable>
          );
        })}
      </Menu>
    </>
  );
};
