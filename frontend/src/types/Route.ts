import { Position } from "@rnmapbox/maps/lib/typescript/types/Position";

export type Route = {
  beforeBus: Position[];
  onBus: Position[];
  afterBus: Position[];
};
