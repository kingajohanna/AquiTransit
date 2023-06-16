import { busRoutes } from "../assets/lines/lines";
import { BusRoute } from "../types/BusRoute";
import { Stop } from "../types/Stop";

export const getDirection = (busRoute: BusRoute) => {
  const [lastStop] = busRoute.stops.slice(-1);
  return lastStop.name;
};

export const getDirectionByStop = (busStop: Stop) => {
  let direction = "";
  busRoutes.map((route) => {
    route.stops.every((stop) => {
      if (stop === busStop) {
        direction = getDirection(route);
        return false;
      }
    });
  });
  return direction;
};
