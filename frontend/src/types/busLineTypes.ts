export interface Point {
  longitude: number;
  latitude: number;
}

export interface Stop {
  point: Point;
  name: string;
}

export interface BusRoute {
  name: string;
  stops: Stop[];
}
