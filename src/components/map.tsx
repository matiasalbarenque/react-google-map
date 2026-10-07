import { AdvancedMarker, Map as GoogleMap } from '@vis.gl/react-google-maps';

const DEFAULT_CENTER = { lat: -34.6037, lng: -58.3816 };
const DEFAULT_ZOOM = 12;

export const Map = () => {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  return (
    <div className="w-full h-[500px]">
      {!apiKey ? (
        <p>Falta configurar VITE_GOOGLE_MAPS_API_KEY para mostrar el mapa.</p>
      ) : (
        <GoogleMap
          defaultCenter={DEFAULT_CENTER}
          defaultZoom={DEFAULT_ZOOM}
          mapId={import.meta.env.VITE_GOOGLE_MAPS_MAP_ID || 'DEMO_MAP_ID'}
        >
          <AdvancedMarker position={DEFAULT_CENTER} />
        </GoogleMap>
      )}
    </div>
  );
};
