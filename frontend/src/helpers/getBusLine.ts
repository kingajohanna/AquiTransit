import { BusRoute } from "../types/BusRoute";
import { Point } from "../types/Point";
import { Stop } from "../types/Stop";

export function getBusLine(
  startPoint: Point,
  endPoint: Point,
  busRoutes: BusRoute[]
): BusRoute | null {
  let bestRoutePlanning: BusRoute | null = null;
  let shortestDistance = Infinity;

  for (const busRoute of busRoutes) {
    const stops = busRoute.stops;
    const startIndex = findNearestStopIndex(startPoint, stops);
    const endIndex = findNearestStopIndex(endPoint, stops);

    if (startIndex !== -1 && endIndex !== -1 && startIndex < endIndex) {
      const distance = calculateDistance(stops, startIndex, endIndex);
      if (distance < shortestDistance) {
        shortestDistance = distance;
        bestRoutePlanning = {
          name: busRoute.name,
          stops: stops.slice(startIndex, endIndex + 1),
        };
      }
    }
  }

  return bestRoutePlanning;
}

function findNearestStopIndex(point: Point, stops: Stop[]): number {
  let nearestStopIndex = -1;
  let shortestDistance = Infinity;

  for (let i = 0; i < stops.length; i++) {
    const stop = stops[i];
    const distance = calculateDistanceBetweenPoints(point, stop.point);

    if (distance < shortestDistance) {
      shortestDistance = distance;
      nearestStopIndex = i;
    }
  }

  return nearestStopIndex;
}

function calculateDistanceBetweenPoints(point1: Point, point2: Point): number {
  const lonDiff = point1.longitude - point2.longitude;
  const latDiff = point1.latitude - point2.latitude;
  return Math.sqrt(lonDiff * lonDiff + latDiff * latDiff);
}

function calculateDistance(
  stops: Stop[],
  startIndex: number,
  endIndex: number
): number {
  let distance = 0;

  for (let i = startIndex; i < endIndex; i++) {
    const currentStop = stops[i];
    const nextStop = stops[i + 1];
    distance += calculateDistanceBetweenPoints(
      currentStop.point,
      nextStop.point
    );
  }

  return distance;
}
