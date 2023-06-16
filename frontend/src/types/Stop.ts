import { Point } from "./Point";

export interface Stop {
  point: Point;
  name: string;
  times: string[];
}
