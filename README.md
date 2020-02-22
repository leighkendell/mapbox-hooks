# useMapbox

A simple hook that provides an easy way to get up and running with [mapbox-gl-js](https://github.com/mapbox/mapbox-gl-js) in your React app.

## Install

```
$ npm install mapbox-hooks mapbox-gl-js @mapbox/mapbox-gl-geocoder
```

## Usage

```
import { useMapbox } from 'mapbox-hooks';

const accessToken = 'YOUR_ACCESS_TOKEN';
const options = {};

function App() {
  const { setContainer, map, loaded } = useMapbox({ accessToken, options });

  return <div ref={setContainer} />
}
```

Once the the map has loaded you will have access to the Map instance to use however you want: https://docs.mapbox.com/mapbox-gl-js/api/
