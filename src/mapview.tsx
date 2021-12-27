import React, { useState, useEffect } from 'react';
import { requireNativeComponent, ViewProps } from 'react-native';
import type { MapType, LatLng } from './types';

export interface MapViewProps extends ViewProps {
  /*
   * MapType
   */
  mapType?: MapType;
  /*
   * Creates a Basemap instance from a web map URL. Example URL
   */
  webMapUrl?: string;
  /*
   *  the maximum scale of the ArcGISMap.
   */
  maxZoom?: number;
  /*
   *  the maximum scale of the ArcGISMap.
   */
  minZoom?: number;
  /*
   * Asynchronously updates the MapView to the given Viewpoint.
   */
  initPosition?: LatLng;
  /*
   * invoked when map loading has completed.
   */
  onLoad?: () => void;
}

const name = 'MapView';
const NativeMapView = requireNativeComponent<MapViewProps>(name);

const MapView = (props: any) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1000);
  }, []);

  const { style, onLoad } = props;

  return (
    <NativeMapView
      {...props}
      style={[style, !loaded ? { width: 1, height: 1 } : null]}
      onLoad={() => {
        setLoaded(true);
        onLoad && onLoad();
      }}
    />
  );
};

export default MapView;
