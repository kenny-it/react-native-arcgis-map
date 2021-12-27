package com.reactnativearcgismap.modules

import com.esri.arcgisruntime.ArcGISRuntimeEnvironment
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

@Suppress("unused")
class SdkModule : ReactContextBaseJavaModule(){
  override fun getName() = "MapSdk"

  @ReactMethod
  fun setApiKey(apiKey: String?) {
    apiKey?.let { ArcGISRuntimeEnvironment.setApiKey(apiKey) }
  }

  @ReactMethod
  fun getVersion(promise: Promise) {
    promise.resolve(ArcGISRuntimeEnvironment.getAPIVersion())
  }
}
