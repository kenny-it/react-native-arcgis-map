import {NativeModules} from 'react-native'

const {MapSdk} = NativeModules;

export function setApiKey(apiKey?:string) {
    MapSdk.setApiKey(apiKey);
}

export function getVersion(): Promise<string> {
    return MapSdk.getVersion();
}