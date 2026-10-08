export type LatLng = { lat: number; lng: number };
export type MapMarker = { id: string; position: LatLng };
export type MapProps = {
  center?: LatLng;
  zoom?: number;
  markers?: MapMarker[];
};
