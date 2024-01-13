import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const icon = L.icon({ iconUrl: "/images/icon_101670.svg", iconSize: [44, 62] });

const polylines: [number, number][][] = [
  //route1
  [
    [49.286, -123.1116],
    [49.2825, -123.1186],
    [49.2746, -123.1219],
    [49.2665, -123.1156],
    [49.2628, -123.1145],
    [49.24966, -123.1159],
    [49.2332, -123.1166],
    [49.2263, -123.1161],
    [49.2097, -123.117],
    [49.1955, -123.1261],
    [49.1840, -123.1364],
    [49.1748, -123.1364],
    [49.1681, -123.1363],
  ],
  //route2(Airport)
  [
    [49.286, -123.1116],
    [49.2825, -123.1186],
    [49.2746, -123.1219],
    [49.2665, -123.1156],
    [49.2628, -123.1145],
    [49.24966, -123.1159],
    [49.2332, -123.1166],
    [49.2263, -123.1161],
    [49.2097, -123.117],
    [49.1955, -123.1261],
    [49.1967, -123.1463],
    [49.1930, -123.1579],
    [49.1951, -123.1788],
  ],
];

const fillBlueOptions = { color: "blue" };

const Map = () => {
  return (
    <MapContainer
      style={{ height: "100vh" }}
      center={[49.24966, -123.1159]}
      zoom={14}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://github.com/Civic86/canada.git">By Kai Koharazawa </a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={[49.286, -123.1116]} icon={icon}>
        <Popup>Waterfront</Popup>
      </Marker>

      <Marker position={[49.2825, -123.1186]} icon={icon}>
        <Popup>Vancouver City Centre</Popup>
      </Marker>

      <Marker position={[49.2746, -123.1219]} icon={icon}>
        <Popup>Yaletown-Roundhouse</Popup>
      </Marker>

      <Marker position={[49.2665, -123.1156]} icon={icon}>
        <Popup>Olympic Village</Popup>
      </Marker>

      <Marker position={[49.2628, -123.1145]} icon={icon}>
        <Popup>Broadway-City Hall</Popup>
      </Marker>

      <Marker position={[49.24966, -123.1159]} icon={icon}>
        <Popup>King Edward</Popup>
      </Marker>

      <Marker position={[49.2332, -123.1166]} icon={icon}>
        <Popup>Oakridge-41st Avenue</Popup>
      </Marker>

      <Marker position={[49.2263, -123.1161]} icon={icon}>
        <Popup>Langara-49th Avenue</Popup>
      </Marker>

      <Marker position={[49.2097, -123.117]} icon={icon}>
        <Popup>Marine Drive</Popup>
      </Marker>

      <Marker position={[49.1955, -123.1261]} icon={icon}>
        <Popup>Bridgeport</Popup>
      </Marker>

      <Marker position={[49.1840, -123.1364]} icon={icon}>
        <Popup>Aberdeen</Popup>
      </Marker>

      <Marker position={[49.1748, -123.1364]} icon={icon}>
        <Popup>Lansdowne</Popup>
      </Marker>

      <Marker position={[49.1681, -123.1363]} icon={icon}>
        <Popup>Richmond–Brighouse</Popup>
      </Marker>

      <Marker position={[49.1967, -123.1463]} icon={icon}>
        <Popup>Templeton</Popup>
      </Marker>

      <Marker position={[49.1930, -123.1579]} icon={icon}>
        <Popup>Sea Island Centre</Popup>
      </Marker>

      <Marker position={[49.1951, -123.1788]} icon={icon}>
        <Popup>YVR-Airport</Popup>
      </Marker>

      <Polyline pathOptions={fillBlueOptions} positions={polylines} />
    </MapContainer>
  );
};

export default Map;
