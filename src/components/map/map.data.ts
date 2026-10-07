import type { LatLng, MapMarker } from "@/typings/components/map";

export const DEFAULT_CENTER: LatLng = { lat: -34.6037, lng: -58.3816 };
export const DEFAULT_ZOOM = 12;

// Markers de ejemplo en CABA. Cambiar las coordenadas cuando sea necesario.
export const MARKERS: MapMarker[] = [
  { id: "palermo", position: { lat: -34.5889, lng: -58.4306 } }, // Plaza Italia, Palermo
  { id: "san-telmo", position: { lat: -34.6212, lng: -58.3731 } }, // Plaza Dorrego, San Telmo
];
