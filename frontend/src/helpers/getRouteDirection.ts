import axios from "axios";
import { Point } from "../types/Point";
import { MAP_API_KEY } from "@env";
import { busRoutes } from "../assets/lines/lines";
import { getBusLine } from "./getBusLine";
import { Route } from "../types/Route";

const url = "https://api.mapbox.com/directions/v5/mapbox/driving";

export const getRouteDirection = async (startPoint: Point, endPoint: Point) => {
  const busline = getBusLine(startPoint, endPoint, busRoutes);

  const firstBusStop = busline?.stops[0].point;
  const lastBusStop = busline?.stops[busline.stops.length - 1].point;

  return {
    beforeBus: await getCoords(startPoint, firstBusStop!),
    onBus: await getCoords(firstBusStop!, lastBusStop!),
    afterBus: await getCoords(lastBusStop!, endPoint),
  } as Route;
};

const getCoords = async (startPoint: Point, endPoint: Point) => {
  try {
    const directionResponse = await axios.get(
      `${url}/${startPoint.longitude},${startPoint.latitude};${endPoint.longitude},${endPoint.latitude}?alternatives=false&geometries=geojson&overview=simplified&steps=false&access_token=${MAP_API_KEY}`
    );
    if (directionResponse.data?.code === "Ok") {
      return directionResponse.data?.routes[0].geometry.coordinates;
    }
  } catch (error) {
    return [];
  }
};
