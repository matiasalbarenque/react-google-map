import { AdvancedMarker, Map as GoogleMap } from "@vis.gl/react-google-maps";
import { ENV } from "@/constants";

const DEFAULT_CENTER = { lat: -34.6037, lng: -58.3816 };
const DEFAULT_ZOOM = 12;

// Markers de ejemplo en CABA. Cambiar las coordenadas cuando sea necesario.
const MARKERS = [
  { id: "palermo", position: { lat: -34.5889, lng: -58.4306 } }, // Plaza Italia, Palermo
  { id: "san-telmo", position: { lat: -34.6212, lng: -58.3731 } }, // Plaza Dorrego, San Telmo
];

export const Map = () => {
  if (!ENV.GOOGLE_MAPS_API_KEY) {
    return (
      <p>Falta configurar VITE_GOOGLE_MAPS_API_KEY para mostrar el mapa.</p>
    );
  }
  return (
    <div className="w-full h-[500px]">
      <GoogleMap
        defaultCenter={DEFAULT_CENTER}
        defaultZoom={DEFAULT_ZOOM}
        mapId={ENV.GOOGLE_MAPS_MAP_ID || "DEMO_MAP_ID"}
      >
        {MARKERS.map(({ id, position }) => (
          <AdvancedMarker key={id} position={position} title={id} />
        ))}
      </GoogleMap>
    </div>
  );
};
