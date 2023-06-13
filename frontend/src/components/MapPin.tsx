import Mapbox from "@rnmapbox/maps";
import { BusStationIcon } from "./BusStationIcon";
import Icon from "react-native-vector-icons/Ionicons";
import { Point } from "../types/Point";

interface Props {
  id: string;
  point: Point;
  notBusStation?: boolean;
}

export const MapPin: React.FC<Props> = (props) => (
  <Mapbox.PointAnnotation
    id={props.id}
    coordinate={[props.point.longitude, props.point.latitude]}
    onSelected={() => {
      console.log(props.id);
    }}
  >
    {props.notBusStation ? (
      <Icon name="location-sharp" size={26} color="red" />
    ) : (
      <BusStationIcon />
    )}
  </Mapbox.PointAnnotation>
);
