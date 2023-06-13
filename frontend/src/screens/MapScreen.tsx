import Mapbox from "@rnmapbox/maps";
import Geolocation from "@react-native-community/geolocation";
import { useEffect, useState } from "react";
import { MapPin } from "../components/MapPin";
import { busRoutes } from "../assets/lines/lines";
import { Point } from "../types/Point";
import { getRouteDirection } from "../helpers/getRouteDirection";
import { RouteDrawer } from "../components/RouteDrawer";
import { Route } from "../types/Route";

const aquilaPos: Point = { longitude: 13.395538, latitude: 42.34656 };

export const MapScreen = () => {
  const [location, setLocation] = useState<undefined | Point>(undefined);
  const [tripCoords, setTripCoords] = useState<Route | undefined>(undefined);

  useEffect(() => {
    if (__DEV__) {
      setLocation(aquilaPos);
    } else {
      Geolocation.getCurrentPosition((info) =>
        setLocation(info.coords as Point)
      );
    }

    const fetchData = async () => {
      setTripCoords(await getRouteDirection(startpoint, endpoint));
    };

    fetchData().catch(console.error);
  }, []);

  const startpoint = { latitude: 42.346271, longitude: 13.401994 } as Point;
  const endpoint = { latitude: 42.347682, longitude: 13.397885 } as Point;

  return (
    <Mapbox.MapView style={{ flex: 1 }}>
      {tripCoords && <RouteDrawer route={tripCoords} />}
      {location && (
        <Mapbox.Camera
          zoomLevel={14}
          centerCoordinate={[location.longitude, location.latitude]}
          animationMode="flyTo"
          animationDuration={2000}
        />
      )}
      {busRoutes.map((route) =>
        route.stops.map((stop, index) => {
          return <MapPin key={index} id={stop.name} point={stop.point} />;
        })
      )}
    </Mapbox.MapView>
  );
};
