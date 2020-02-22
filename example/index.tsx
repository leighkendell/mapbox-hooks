import * as React from 'react';
import 'react-app-polyfill/ie11';
import * as ReactDOM from 'react-dom';
import { useGeocoder, useMapbox } from '../.';

const accessToken = process.env.MAPBOX_ACCESS_TOKEN || '';

const App = () => {
  const { setContainer, map, loaded } = useMapbox({ accessToken });
  useGeocoder({ accessToken, map });

  return (
    <div ref={setContainer} style={{ width: '800px', height: '600px' }}></div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
