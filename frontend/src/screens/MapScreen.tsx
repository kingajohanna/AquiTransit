import Mapbox from "@rnmapbox/maps";
import Geolocation from "@react-native-community/geolocation";
import { useEffect, useRef, useState } from "react";
import { MapPin, PinType } from "../components/MapPin";
import { busRoutes } from "../assets/lines/lines";
import { Point } from "../types/Point";
import { getRouteDirection } from "../helpers/getRouteDirection";
import { RouteDrawer } from "../components/RouteDrawer";
import { Route } from "../types/Route";
import { Platform, StatusBar, View } from "react-native";
import { SearchBar } from "../components/SearchBar";
import { SafeAreaView } from "react-native-safe-area-context";
import { FAB } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";
import {
  Camera,
  CameraRef,
} from "@rnmapbox/maps/lib/typescript/components/Camera";
import { Colors } from "../styles/colors";
import RBSheet from "react-native-raw-bottom-sheet";
import { BottomModal } from "../components/BottomModal";

const camplusPos: Point = { longitude: 13.395538, latitude: 42.34656 };
const forteSpagnoloPos: Point = { longitude: 13.404768, latitude: 42.355627 };

const mockPos = forteSpagnoloPos;

export const MapScreen = () => {
  const camera = useRef<Camera>(null);
  const refRBSheet = useRef() as React.MutableRefObject<RBSheet>;

  const [location, setLocation] = useState<undefined | Point>(undefined);
  const [tripCoords, setTripCoords] = useState<Route | undefined>(undefined);
  const [destination, setDest] = useState<Point | undefined>(undefined);

  useEffect(() => {
    getLocation();
  }, []);

  const flyToCoords = (coords: Point) => {
    camera.current?.flyTo([coords.longitude, coords.latitude]);
  };

  const planRoute = async (destination: Point) => {
    setTripCoords(await getRouteDirection(location!, destination));
  };

  const setDestination = (dest: Point, withFly?: boolean) => {
    setTripCoords(undefined);
    setDest(dest);
    if (withFly) flyToCoords(dest);
  };

  const getLocation = () => {
    if (__DEV__) {
      setLocation(mockPos);
    } else {
      Geolocation.getCurrentPosition((info) =>
        setLocation(info.coords as Point)
      );
    }
  };

  const openTimetable = () => {
    refRBSheet.current!.open();
  };

  return (
    <>
      <View style={{ flex: 1 }}>
        {/* route planning */}
        <Mapbox.MapView
          style={{ flex: 1 }}
          onPress={(event) => {
            const coords = event.geometry as {
              coordinates: number[];
              type: string;
            };
            setDestination({
              longitude: coords.coordinates[0],
              latitude: coords.coordinates[1],
            });
          }}
        >
          {/* userLocation pin */}
          {location && (
            <>
              <MapPin
                id="userLocation"
                point={location}
                type={PinType.CURRENT_LOCATION}
              />
              <Mapbox.Camera
                zoomLevel={15}
                ref={camera}
                centerCoordinate={[location.longitude, location.latitude]}
                animationMode="flyTo"
                animationDuration={2000}
              />
            </>
          )}
          {/* bus stops */}
          {busRoutes.map((route) =>
            route.stops.map((stop, index) => {
              return (
                <MapPin
                  key={index}
                  id={stop.name}
                  point={stop.point}
                  type={PinType.BUS_STATION}
                  onPress={openTimetable}
                />
              );
            })
          )}
          {/* destination pin */}
          {destination && (
            <MapPin
              id="destination"
              point={destination}
              type={PinType.DESTINATION}
              onPress={planRoute}
            />
          )}
          {tripCoords && <RouteDrawer route={tripCoords} />}
        </Mapbox.MapView>
      </View>

      <View style={{ position: "absolute", top: 50, alignSelf: "center" }}>
        <SearchBar setLocation={setDestination} />
      </View>

      <FAB
        style={{
          position: "absolute",
          margin: 16,
          right: 0,
          borderRadius: 40,
          backgroundColor: Colors.darkPastelGreen,
          bottom: Platform.OS === "ios" ? 120 : 80,
        }}
        icon="crosshairs-gps"
        onPress={() => {
          if (location) flyToCoords(location);
        }}
        color={Colors.darkGreen}
      />

      <BottomModal refRBSheet={refRBSheet} data={""} />
    </>
  );
};
