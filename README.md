# react-native-arcgis-map

**React Native ArcGIS Mapview component for Android only**


## Installation Instructions
Install the package

```sh
npm install react-native-arcgis-map
```

#### Modify your Android native project 

First, make sure your Minimun SDK version is **23** or above. You can modify your project in  `android` > `build.gradle`. And add the following lines to the  repositories block in allprojects to reference the API from Esri's maven repository.

```sh
allprojects {
    repositories {

        maven {
            url 'https://esri.jfrog.io/artifactory/arcgis'
        }

    }
}
```

and in the `android` > `build.gradle`
enable view binding by adding it to a buildFeatures block in the android block.

```kotlin
    buildFeatures {
        viewBinding true
    }
```

######if you receive the error message like this

```
Execution failed for task ':app:mergeDebugNativeLibs'.
> A failure occurred while executing com.android.build.gradle.internal.tasks.MergeJavaResWorkAction
   > 2 files found with path 'lib/arm64-v8a/libc++_shared.so' from inputs:
```

go to your project in `android` > `app` > `build.gradle` path, add the following lines to the android block.

```kotlin
packagingOptions {
        pickFirst 'lib/arm64-v8a/libc++_shared.so'
        pickFirst 'lib/x86/libc++_shared.so'
        pickFirst 'lib/armeabi-v7a/libc++_shared.so'
    }
```

#### set up API key
Set your API key before you use the mapView

```js
import { MapSdk } from 'react-native-arcgis-map'

MapSdk.setApiKey("YOUR_API_KEY");

```

### Usage

```js
import { MapView } from 'react-native-arcgis-map'

<MapView
      style={{ flex: 1 }}
      onLoad={() => {
        console.log('Mapview onload success');
      }}
      mapType={MapType.ARCGIS_STREETS}
      initPosition={{
        latitude: 39.916668,
        longitude: 116.383331,
        scale: 20000000.0,
      }}
    />

```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
