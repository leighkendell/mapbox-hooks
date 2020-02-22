import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import mapboxgl, { Map } from 'mapbox-gl';
import { useEffect, useRef } from 'react';
const MapboxGeocoder = require('@mapbox/mapbox-gl-geocoder');

type Inputs = {
  accessToken: string;
  map?: Map;
  options?: any;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
};

/** Adds a MapBox geocoder to a given map instance */
export function useGeocoder({
  accessToken,
  map,
  options = {},
  position = 'top-right',
}: Inputs) {
  const geocoderRef = useRef<any | null>(null);

  useEffect(() => {
    if (map && !geocoderRef.current) {
      geocoderRef.current = map.addControl(
        new MapboxGeocoder({ accessToken, mapboxgl, ...options }),
        position
      );
    }
  }, [accessToken, map, options, position]);

  return { geocoder: geocoderRef.current };
}
