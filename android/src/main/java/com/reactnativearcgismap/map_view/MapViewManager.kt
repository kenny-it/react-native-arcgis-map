package com.reactnativearcgismap.map_view

import android.annotation.SuppressLint
import com.esri.arcgisruntime.mapping.ArcGISMap
import com.esri.arcgisruntime.mapping.Basemap
import com.esri.arcgisruntime.mapping.BasemapStyle
import com.esri.arcgisruntime.mapping.Viewpoint
import com.esri.arcgisruntime.mapping.view.MapView
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.ReadableMap
import com.facebook.react.bridge.WritableMap
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.annotations.ReactProp
import com.facebook.react.uimanager.events.RCTEventEmitter

class MapViewManager : SimpleViewManager<MapView>() {
  private lateinit var eventEmitter: RCTEventEmitter

  override fun getName() = "MapView"

  @SuppressLint("ClickableViewAccessibility")
  override fun createViewInstance(reactContext: ThemedReactContext): MapView {
    eventEmitter = reactContext.getJSModule(RCTEventEmitter::class.java)

    val view = MapView(reactContext)
    val map = ArcGISMap()
    view.map = map

    // add listener when map loading done
    map.addDoneLoadingListener { emit(view.id,"onLoad") }

    //view.setViewpoint(Viewpoint(22.302711, 114.177216, 10000.0))
    return view
  }

  override fun onDropViewInstance(view: MapView) {
    super.onDropViewInstance(view)
    view.dispose()
  }

  override fun getExportedCustomBubblingEventTypeConstants(): Map<String, Any> {
    return listOf("onLoad").associateWith { mapOf("phasedRegistrationNames" to mapOf("bubbled" to it)) }
  }

  private fun emit(id: Int?, event: String, data: WritableMap = Arguments.createMap()) {
    id?.let { eventEmitter.receiveEvent(it,event,data) }
  }

  @ReactProp(name = "mapType")
  fun setMapType(view: MapView, mapType: String) {
    view.map.basemap = Basemap(BasemapStyle.valueOf(mapType))
  }

  @ReactProp(name = "webMapUrl")
  fun setWebMapUrl(view: MapView, url: String) {
    view.map.basemap = Basemap(url)
  }

  @ReactProp(name = "minZoom")
  fun setMinZoom(view: MapView, zoomLevel: Double){
    view.map.minScale = zoomLevel
  }

  @ReactProp(name = "maxZoom")
  fun setMaxZoom(view: MapView, zoomLevel: Double){
    view.map.maxScale = zoomLevel
  }

  @ReactProp(name = "initPosition")
  fun setPosition(view: MapView,initPosition: ReadableMap) {
    val latitude = initPosition.getDouble("latitude")
    val longitude = initPosition.getDouble("longitude")
    val scale = if(initPosition.hasKey("scale")) initPosition.getDouble("scale") else 10000.0
    view.setViewpointAsync(Viewpoint(latitude,longitude,scale))
  }

}
