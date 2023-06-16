import Mapbox from "@rnmapbox/maps";
import { BusStationIcon } from "./BusStationIcon";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Point } from "../types/Point";

export enum PinType {
  BUS_STATION,
  CURRENT_LOCATION,
  DESTINATION,
}

interface Props {
  id: string;
  point: Point;
  type: PinType;
  onPress?: Function;
}

export const MapPin: React.FC<Props> = (props) => {
  const getIcon = () => {
    switch (props.type) {
      case PinType.CURRENT_LOCATION:
        return <Icon name="my-location" size={26} color="blue" />;
      case PinType.DESTINATION:
        return <Icon name="location-on" size={26} color="red" />;
      case PinType.BUS_STATION:
      default:
        return <BusStationIcon />;
    }
  };

  return (
    <Mapbox.PointAnnotation
      id={props.id}
      coordinate={[props.point.longitude, props.point.latitude]}
      onSelected={() => {
        if (props.onPress) props.onPress(props.point);
        else console.log(props.id);
      }}
      selected={props.type !== PinType.BUS_STATION}
    >
      {getIcon()}
    </Mapbox.PointAnnotation>
  );
};
