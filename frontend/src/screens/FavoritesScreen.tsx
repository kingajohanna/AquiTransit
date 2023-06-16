import { FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { ScreenBackground } from "../components/Background";
import { useStore } from "../stores";
import { StopData, getStopData } from "../helpers/getStopData";
import { SortedStopData } from "../types/SortedStopData";
import { TimetableBothDirection } from "../components/TimetableBothDirection";
import { observer } from "mobx-react-lite";

export const FavoritesScreen = observer(() => {
  const { favoriteStore } = useStore();
  const [data, setData] = useState<StopData[]>([]);
  const [sortedData, setSortedData] = useState<SortedStopData[]>([]);

  useEffect(() => {
    let unsortedData: StopData[] = [];
    favoriteStore.favorites.map(
      (fav) => (unsortedData = unsortedData.concat(getStopData(fav)))
    );

    setSortedData(groupStops(unsortedData));

    setData(
      unsortedData.sort((a, b) => a.routeName.localeCompare(b.routeName))
    );
  }, [favoriteStore.favorites.length]);

  const groupStops = (rawStopData: StopData[]) => {
    const names: string[] = [];
    const sortedData: SortedStopData[] = [];

    rawStopData.map((stopData) => {
      const name = stopData.routeName + stopData.stop.name;
      if (!names.includes(name)) {
        names.push(name);
        const routes = rawStopData.filter(
          (s) =>
            s.routeName === stopData.routeName &&
            s.stop.name === stopData.stop.name
        );

        sortedData.push({ routeName: stopData.routeName, routes: routes });
      }
    });

    return sortedData;
  };

  const renderItem = (stop: SortedStopData, index: number) => {
    return <TimetableBothDirection data={stop} key={index} />;
  };

  return (
    <ScreenBackground>
      <Header title="Favourites" />
      <FlatList
        style={{ marginTop: 40, marginBottom: 60 }}
        showsVerticalScrollIndicator={false}
        data={sortedData}
        renderItem={({ item, index }) => renderItem(item, index)}
      />
    </ScreenBackground>
  );
});
