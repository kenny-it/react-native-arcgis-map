/* 
* Position
*/
export interface LatLng {
    latitude?: number;
    longitude?: number;
    scale?: number;
  }
/* 
* MapType
*/
export enum MapType {
    /* 
    *   A composite basemap with elevation hillshade (raster) and the world featuring a geopolitical style reminiscent of a school classroom wall map (vector) as the base layers.
    */
    ARCGIS_CHARTED_TERRITORY = 'ARCGIS_CHARTED_TERRITORY',
    /* 
    *   A vector basemap in a geopolitical style reminiscent of a school classroom wall map as the base layer.
    */
    ARCGIS_CHARTED_TERRITORY_BASE = 'ARCGIS_CHARTED_TERRITORY_BASE',
    /* 
    *   A vector basemap presented in the style of hand-drawn = '', colored pencil cartography.
    */
    ARCGIS_COLORED_PENCIL = 'ARCGIS_COLORED_PENCIL',
    /* 
    *   A vector basemap for the world in a style that is optimized to display special areas of interest (AOIs) that have been created and edited by Community Maps contributors.
    */
    ARCGIS_COMMUNITY = 'ARCGIS_COMMUNITY',
    /* 
    *   A vector basemap for the world featuring a dark neutral background style with minimal colors as the base layer and labels as the reference layer.
    */
    ARCGIS_DARK_GRAY = 'ARCGIS_DARK_GRAY',
    /* 
    *   A vector basemap for the world featuring a dark neutral background style with minimal colors as the base layer.
    */
    ARCGIS_DARK_GRAY_BASE = 'ARCGIS_DARK_GRAY_BASE',
    /* 
    *   A vector basemap with labels for the world as the reference layer.
    */
    ARCGIS_DARK_GRAY_LABELS = 'ARCGIS_DARK_GRAY_LABELS',
    /* 
    *   A raster basemap with world hillshade (Dark) is useful in building maps that provide terrain context while highlighting feature layers and labels.
    */
    ARCGIS_HILLSHADE_DARK = 'ARCGIS_HILLSHADE_DARK',
    /* 
    *   A raster basemap with elevation hillshade.
    */
    ARCGIS_HILLSHADE_LIGHT = 'ARCGIS_HILLSHADE_LIGHT',
    /* 
    *   A composite basemap with satellite imagery of the world (raster) as the base layer and labels (vector) as the reference layer.
    */
    ARCGIS_IMAGERY = 'ARCGIS_IMAGERY',
    /* 
    *   A vector basemap with labels for the world as the reference layer.
    */
    ARCGIS_IMAGERY_LABELS = 'ARCGIS_IMAGERY_LABELS',
    /* 
    *   A raster basemap with satellite imagery of the world as the base layer.
    */
    ARCGIS_IMAGERY_STANDARD = 'ARCGIS_IMAGERY_STANDARD',
    /* 
    *   A vector basemap for the world featuring a light neutral background style with minimal colors as the base layer and labels as the reference layer.	
    */
    ARCGIS_LIGHT_GRAY = 'ARCGIS_LIGHT_GRAY',
    /* 
    *   A vector basemap for the world featuring a light neutral background style with minimal colors as the base layer.
    */
    ARCGIS_LIGHT_GRAY_BASE = 'ARCGIS_LIGHT_GRAY_BASE',
    /* 
    *   A vector basemap with labels for the world as the reference layer.
    */
    ARCGIS_LIGHT_GRAY_LABELS = 'ARCGIS_LIGHT_GRAY_LABELS',
    /* 
    *   A vector basemap inspired by the art and advertising of the 1950's that presents a unique design option to the ArcGIS basemaps.
    */
    ARCGIS_MIDCENTURY = 'ARCGIS_MIDCENTURY',  
    /* 
    *   A composite basemap with elevation hillshade (raster) and the look of 18th and 19th century antique maps in the modern world of multi-scale mapping (vector) as the base layers.
    */
    ARCGIS_MODERN_ANTIQUE = 'ARCGIS_MODERN_ANTIQUE',
    /* 
    *   A vector basemap in the style of 18th and 19th century antique maps in the modern world of multi-scale mapping as the base layer.
    */
    ARCGIS_MODERN_ANTIQUE_BASE = 'ARCGIS_MODERN_ANTIQUE_BASE',
    /* 
    *   A vector basemap for the world featuring a custom navigation map style.
    */
    ARCGIS_NAVIGATION = 'ARCGIS_NAVIGATION',
    /* 
    *   A vector basemap for the world featuring a 'dark mode' version of the ARCGIS_NAVIGATION style = '', using the same content.
    */
    ARCGIS_NAVIGATION_NIGHT = 'ARCGIS_NAVIGATION_NIGHT',
    /* 
    *   A vector basemap in black & white design with halftone patterns = '', red highlights = '', and stylized fonts to depict a unique "newspaper" styled theme.
    */
    ARCGIS_NEWSPAPER = 'ARCGIS_NEWSPAPER',
    /* 
    *   A vector basemap for the world featuring a dark background with glowing blue symbology inspired by science-fiction and futuristic themes.
    */
    ARCGIS_NOVA = 'ARCGIS_NOVA',	
    /* 
    *   A composite basemap with ocean data of the world (raster) as the base layer and labels (vector) as the reference layer.
    */
    ARCGIS_OCEANS = 'ARCGIS_OCEANS',
    /* 
    *   A raster basemap with ocean data of the world as the base layer.
    */
    ARCGIS_OCEANS_BASE = 'ARCGIS_OCEANS_BASE',
    /* 
    *   A vector basemap with labels for the world as the reference layer.
    */
    ARCGIS_OCEANS_LABELS = 'ARCGIS_OCEANS_LABELS',
    /* 
    *   A vector basemap for the world featuring a classic Esri street map style.
    */
    ARCGIS_STREETS = 'ARCGIS_STREETS',
    /* 
    *   A vector basemap for the world featuring a custom 'night time' street map style.
    */
	ARCGIS_STREETS_NIGHT = 'ARCGIS_STREETS_NIGHT',
    /* 
    *   A composite basemap with elevation hillshade (raster) and a classic Esri street map style (vector) as the base layers. 
    */
	ARCGIS_STREETS_RELIEF = 'ARCGIS_STREETS_RELIEF',
    /* 
    *   A vector basemap in the classic Esri street map style = '', using a relief map as the base layer.
    */
	ARCGIS_STREETS_RELIEF_BASE = 'ARCGIS_STREETS_RELIEF_BASE',
    /* 
    *   A composite basemap with elevation hillshade (raster) = '', minimal map content like water and land fill = '', water lines and roads (vector) as the base layers and minimal map content like populated place names = '', admin and water labels with boundary lines (vector) as the reference layer.
    */
	ARCGIS_TERRAIN = 'ARCGIS_TERRAIN',
    /* 
    *   A vector basemap with minimal map content like water and land fill = '', water lines and roads as the base layer.
    */
	ARCGIS_TERRAIN_BASE = 'ARCGIS_TERRAIN_BASE',
    /* 
    *   A vector basemap with minimal map content like populated place names = '', admin and water labels with boundary lines as the reference layer.
    */
	ARCGIS_TERRAIN_DETAIL = 'ARCGIS_TERRAIN_DETAIL',
    /* 
    *   A composite basemap with elevation hillshade (raster) and classic Esri topographic map style including a relief map (vector) as the base layers.
    */
	ARCGIS_TOPOGRAPHIC = 'ARCGIS_TOPOGRAPHIC',
    /* 
    *   A vector basemap in the classic Esri topographic map style = '', using a relief map as the base layer.
    */
	ARCGIS_TOPOGRAPHIC_BASE = 'ARCGIS_TOPOGRAPHIC_BASE',
    /* 
    *   A vector basemap version of Open Street Map (OSM) data hosted by Esri and rendered using dark neutral style with minimal colors as the base layer and labels as the reference layer.
    */
	OSM_DARK_GRAY = 'OSM_DARK_GRAY',
    /* 
    *   A vector basemap version of Open Street Map (OSM) data hosted by Esri and rendered using dark neutral style with minimal colors as the base layer.
    */
    OSM_DARK_GRAY_BASE = 'OSM_DARK_GRAY_BASE',
    /* 
    *   A vector basemap version of Open Street Map (OSM) data hosted by Esri.
    */
    OSM_DARK_GRAY_LABELS = 'OSM_DARK_GRAY_LABELS',
    /* 
    *   A vector basemap version of Open Street Map (OSM) data hosted by Esri and rendered using light neutral style with minimal colors as the base layer and labels as the reference layer.
    */
    OSM_LIGHT_GRAY = 'OSM_LIGHT_GRAY',
    /* 
    *   A vector basemap version of Open Street Map (OSM) data hosted by Esri and rendered using light neutral style with minimal colors as the base layer.
    */
    OSM_LIGHT_GRAY_BASE = 'OSM_LIGHT_GRAY_BASE',
    /* 
    *   A vector basemap version of Open Street Map (OSM) data hosted by Esri.
    */
    OSM_LIGHT_GRAY_LABELS = 'OSM_LIGHT_GRAY_LABELS',
    /* 
    *   A vector basemap version of Open Street Map (OSM) data hosted by Esri and rendered using Open Street Map (OSM) cartography.
    */
    OSM_STANDARD = 'OSM_STANDARD',
    /* 
    *   A composite basemap that uses elevation as an artistic hillshade (raster) and Open Street Map (OSM) data hosted by Esri.
    */
    OSM_STANDARD_RELIEF = 'OSM_STANDARD_RELIEF',
    /* 
    *   A vector basemap is a version of Open Street Map (OSM) data hosted by Esri and rendered using Esri Street Map cartographic style.
    */
    OSM_STANDARD_RELIEF_BASE = 'OSM_STANDARD_RELIEF_BASE',
    /* 
    *   A vector basemap version of Open Street Map (OSM) data hosted by Esri and rendered using Esri Street Map style.
    */
    OSM_STREETS = 'OSM_STREETS',
    /* 
    *   A composite basemap with elevation as an artistic hillshade (raster) and Open Street Map (OSM) data hosted by Esri and rendered similarly to the Esri Street Map (with Relief) cartographic style (vector) as the base layers.
    */
    OSM_STREETS_RELIEF = 'OSM_STREETS_RELIEF',
    /* 
    *   A vector basemap with Open Street Map (OSM) data hosted by Esri.
    */
    OSM_STREETS_RELIEF_BASE = 'OSM_STREETS_RELIEF_BASE',
}