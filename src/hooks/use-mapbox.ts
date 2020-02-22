import mapboxgl, { Map, MapboxOptions } from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useCallback, useRef, useState } from 'react';

type Inputs = {
  /** Mapbox access token */
  accessToken: string;
  /** Mapbox Map options */
  options?: Omit<MapboxOptions, 'container'>;
};

type Outputs = {
  /** Sets the mapbox container to the element passed in via ref */
  setContainer: (node: HTMLElement | null) => void;
  /** Set when the mapbox instance has loaded */
  loaded: boolean;
  /** The mapbox instance */
  map?: Map;
};

// Default options if none are specified
const defaultOptions: Inputs['options'] = {
  style: 'mapbox://styles/mapbox/streets-v11',
};

/** A simple hook that binds mapbox to the given container ref and returns the mapbox instance */
export function useMapbox({ accessToken, options }: Inputs): Outputs {
  const mapRef = useRef<Map>();
  const [loaded, setLoaded] = useState(false);

  const setContainer = useCallback(
    node => {
      if (node !== null) {
        mapboxgl.accessToken = accessToken;

        mapRef.current = new mapboxgl.Map({
          container: node,
          ...defaultOptions,
          ...options,
        });

        mapRef.current.on('load', () => {
          setLoaded(true);
        });
      }
    },
    [accessToken, options]
  );

  return { setContainer, map: mapRef.current, loaded };
}
