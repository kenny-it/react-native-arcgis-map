import React from 'react';

import { View, useWindowDimensions } from 'react-native';
import { MapSdk, MapType, MapView } from 'react-native-arcgis-map';
import { TabView, SceneMap } from 'react-native-tab-view';

MapSdk.setApiKey(
  'AAPKd0657f1a4dbe444cbee96d27f835ff0dwxR3tAs-zhsqDvC8dIq3Cf3Euq15-AjfY00lS4JfpbCaZmnKXaBs91JlbHbmnAQ-'
);

const obj = {
  latitude: 39.916668,
  longitude: 116.383331,
  scale: 20000000.0,
};

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7' }}>
    <MapView
      style={{ flex: 1 }}
      onLoad={() => {
        console.log('Mapview onload success');
      }}
      mapType={MapType.ARCGIS_STREETS}
      initPosition={obj}
    />
  </View>
);

const renderScene = SceneMap({
  first: FirstRoute,
});

export default function App() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([{ key: 'first', title: 'First' }]);
  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}
