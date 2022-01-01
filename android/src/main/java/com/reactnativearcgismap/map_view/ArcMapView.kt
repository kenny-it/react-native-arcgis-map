package com.reactnativearcgismap.map_view

import android.content.Context
import android.widget.FrameLayout
import com.esri.arcgisruntime.mapping.ArcGISMap
import com.esri.arcgisruntime.mapping.view.MapView
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.WritableMap
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.events.RCTEventEmitter

class ArcMapView(context: Context) : FrameLayout(context) {

  private val eventEmitter = (context as ThemedReactContext).getJSModule(RCTEventEmitter::class.java)

  val mapView  = MapView(context)

  private val map: ArcGISMap by lazy { ArcGISMap() }

  var paused = false
    set(value){
      if(!field && value) {
        mapView.pause()
        removeView(mapView)
      }
      if (field && !value) {
        addView(mapView)
        mapView.resume()
      }
      field = value
    }

  init {
      addView(mapView)
    mapView.map = map

    // add listener when map loading done
    map.addDoneLoadingListener { emit(id,"onLoad") }

  }

  override fun onSizeChanged(w: Int, h: Int, oldw: Int, oldh: Int) {
    super.onSizeChanged(w, h, oldw, oldh)
   //scale map when keyboard shown
    mapView.setViewpointScaleAsync(mapView.mapScale)
  }

  private fun emit(id: Int?, event: String, data: WritableMap = Arguments.createMap()) {
    id?.let { eventEmitter.receiveEvent(it,event,data) }
  }

}
