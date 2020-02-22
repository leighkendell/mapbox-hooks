import React from 'react';
import { useGeocoder, useMapbox } from '../src';

export default { title: 'Mapbox' };

const accessToken = process.env.MAPBOX_ACCESS_TOKEN;

export const Hook: React.FC = () => {
  const { setContainer, map } = useMapbox({
    accessToken,
  });
  useGeocoder({ accessToken, map });

  return <div ref={setContainer} style={{ width: '800px', height: '600px' }} />;
};
