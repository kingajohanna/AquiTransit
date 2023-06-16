import { busRoutes } from "../assets/lines/lines";
import { Stop } from "../types/Stop";
import { getDirection } from "./getDirection";

export type StopData = {
  routeName: string;
  direction: string;
  stop: Stop;
};

export const getStopData = (name: string) => {
  const stopsWithThisName: StopData[] = [];

  busRoutes.map((route) => {
    const direction = getDirection(route);

    route.stops.map((stop) => {
      if (stop.name === name) {
        stopsWithThisName.push({
          stop: stop,
          routeName: route.name,
          direction: direction,
        });
      }
    });
  });

  return stopsWithThisName;
};
