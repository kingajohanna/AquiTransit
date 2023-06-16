import { Stop } from "./Stop";

export interface BusRoute {
  name: string;
  stops: Stop[];
  direction: string;
}
