import { AdvancedMarker, Map as GoogleMap } from "@vis.gl/react-google-maps";
import { ENV } from "@/constants";
import type { MapProps } from "@/typings/components/map";
import { DEFAULT_CENTER, DEFAULT_ZOOM, MARKERS } from "./map.data";

export const Map = (props: MapProps) => {
  const { center = DEFAULT_CENTER, zoom = DEFAULT_ZOOM, markers = MARKERS } = props;
  if (!ENV.GOOGLE_MAPS_API_KEY) {
    return (
      <p>Falta configurar VITE_GOOGLE_MAPS_API_KEY para mostrar el mapa.</p>
    );
  }
  return (
    <div className="w-full h-[500px]">
      <GoogleMap
        defaultCenter={center}
        defaultZoom={zoom}
        mapId={ENV.GOOGLE_MAPS_MAP_ID || "DEMO_MAP_ID"}
      >
        {markers.map((marker) => {
          const { id, position } = marker;

          return <AdvancedMarker key={id} position={position} title={id} />;
        })}
      </GoogleMap>
    </div>
  );
};
