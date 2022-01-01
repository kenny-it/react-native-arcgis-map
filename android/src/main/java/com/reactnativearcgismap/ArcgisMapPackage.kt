package com.reactnativearcgismap

import com.facebook.react.ReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.ViewManager
import com.reactnativearcgismap.map_view.ArcMapVieManager
import com.reactnativearcgismap.modules.SdkModule


class ArcgisMapPackage : ReactPackage {
    override fun createNativeModules(reactContext: ReactApplicationContext): List<NativeModule> {
        return listOf(
          SdkModule()
        )
    }

    override fun createViewManagers(reactContext: ReactApplicationContext): List<ViewManager<*, *>> {
        //return listOf(MapViewManager())
      return listOf(ArcMapVieManager())
    }
}
