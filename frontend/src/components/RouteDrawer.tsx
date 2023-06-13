import Mapbox from "@rnmapbox/maps";
import React from "react";
import { Route } from "../types/Route";

export const RouteDrawer: React.FC<{ route: Route }> = ({ route }) => {
  const featureCollection: any = [
    {
      type: "Feature",
      properties: { color: "#34a1eb" },
      geometry: {
        type: "LineString",
        coordinates: route.beforeBus,
      },
    },
    {
      type: "Feature",
      properties: { color: "#068a55" },
      geometry: {
        type: "LineString",
        coordinates: route.onBus,
      },
    },
    {
      type: "Feature",
      properties: { color: "#34a1eb" },
      geometry: {
        type: "LineString",
        coordinates: route.afterBus,
      },
    },
  ];
  return (
    <Mapbox.ShapeSource
      id="line"
      shape={{
        type: "FeatureCollection",
        features: featureCollection,
      }}
    >
      <Mapbox.LineLayer
        id={"linelayer"}
        style={{
          lineJoin: "round",
          lineColor: ["get", "color"],
          lineWidth: 5,
          lineCap: "round",
        }}
      />
    </Mapbox.ShapeSource>
  );
};
