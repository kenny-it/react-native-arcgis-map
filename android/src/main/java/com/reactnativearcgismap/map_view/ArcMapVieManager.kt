package com.reactnativearcgismap.map_view

import com.esri.arcgisruntime.mapping.Basemap
import com.esri.arcgisruntime.mapping.BasemapStyle
import com.esri.arcgisruntime.mapping.Viewpoint
import com.facebook.react.bridge.ReadableMap
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.ViewGroupManager
import com.facebook.react.uimanager.annotations.ReactProp
import com.reactnativearcgismap.getEventTypeConstants

@Suppress("unused")
class ArcMapVieManager : ViewGroupManager<ArcMapView>() {

  override fun getName() = "ArcMapView"

  override fun createViewInstance(reactContext: ThemedReactContext): ArcMapView {
    return ArcMapView(reactContext)
  }

  override fun onDropViewInstance(view: ArcMapView) {
    super.onDropViewInstance(view)
    view.mapView.dispose()
  }

  override fun getExportedCustomBubblingEventTypeConstants(): Map<String, Any> {
    return getEventTypeConstants(listOf("onLoad"))
  }

//  override fun getCommandsMap(): Map<String, Int> {
//    return mapOf(
//      "call" to 1
//    )
//  }

//  override fun receiveCommand(root: ArcMapView, commandId: String?, args: ReadableArray?) {
//    super.receiveCommand(root, commandId, args)
//
//  }

  @ReactProp(name = "mapType")
  fun setMapType(view: ArcMapView, mapType: String) {
    view.mapView.map.basemap = Basemap(BasemapStyle.valueOf(mapType))
  }

  @ReactProp(name = "webMapUrl")
  fun setWebMapUrl(view: ArcMapView, url: String) {
    view.mapView.map.basemap = Basemap(url)
  }

  @ReactProp(name = "minZoom")
  fun setMinZoom(view: ArcMapView, zoomLevel: Double){
    view.mapView.map.minScale = zoomLevel
  }

  @ReactProp(name = "maxZoom")
  fun setMaxZoom(view: ArcMapView, zoomLevel: Double){
    view.mapView.map.maxScale = zoomLevel
  }

  @ReactProp(name = "backgroundColor")
  fun setMapBackgroundColor(view: ArcMapView, color: Int) {
    view.mapView.map.backgroundColor = color
  }

  @ReactProp(name = "initPosition")
  fun setPosition(view: ArcMapView, initPosition: ReadableMap) {
    val latitude = initPosition.getDouble("latitude")
    val longitude = initPosition.getDouble("longitude")
    val scale = if(initPosition.hasKey("scale")) initPosition.getDouble("scale") else 10000.0
    view.mapView.setViewpointAsync(Viewpoint(latitude,longitude,scale))
  }

  @ReactProp(name = "paused")
  fun setPaused(view: ArcMapView, paused: Boolean) {
    view.paused = paused
  }
}
