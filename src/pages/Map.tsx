import {StyleSheet, Text, View} from "react-native";
import * as React from "react";
import {LegacyRef, useRef} from "react";
import MapView, {Callout, Camera, LatLng, Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Button from "../components/shared/Button";
import {useMapScreenQuery} from "../types";
import SmallButton from "../components/shared/SmallButton";

export function Map() {
    const {data, loading, error} = useMapScreenQuery();

    const carImage = require("../assets/carImg/car_2.png")
    const coordinate: LatLng = {
        latitude: data?.recentCar?.gps!.latitude,
        longitude: data?.recentCar?.gps!.longitude
    }
    const camera: Camera = {
        center: coordinate,
        heading: 0,
        pitch: 0,
        zoom: 16,
        altitude: 0
    }

    const map: LegacyRef<MapView> = useRef(null);

    const onZoomInPress = () => {
        map?.current?.getCamera().then((camera: Camera) => {
            camera.zoom += 1;
            map?.current?.animateCamera(camera);
        })
    }

    const onZoomOutPress = () => {
        map?.current?.getCamera().then((camera: Camera) => {
            camera.zoom -= 1;
            map?.current?.animateCamera(camera);
        })
    }

    const onCenterPress = () => {
        map?.current?.getCamera().then((camera: Camera) => {
            camera.center.latitude = data?.recentCar?.gps!.latitude;
            camera.center.longitude = data?.recentCar?.gps!.longitude;
            map?.current?.animateCamera(camera);
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <MapView style={styles.map}
                         ref={map}
                         provider={PROVIDER_GOOGLE}
                         camera={camera}
                         showsUserLocation={true}
                         followsUserLocation={true}>
                    <Marker coordinate={coordinate}
                            image={carImage}>
                        <Callout>
                            <Text>Eagle Two</Text>
                        </Callout>
                    </Marker>
                </MapView>
                <SmallButton iconName={"minus"} onClickAction={onZoomOutPress}
                             style={{position: "absolute", bottom: 0, right: 10}}/>
                <SmallButton iconName={"plus"} onClickAction={onZoomInPress}
                             style={{position: "absolute", bottom: 60, right: 10}}/>
                <SmallButton iconName={"image-filter-center-focus-weak"} onClickAction={onCenterPress}
                             style={{position: "absolute", bottom: 0, left: 10}}/>
            </View>
            <View style={styles.buttons}>
                <Button iconName={"arrow-up"}/>
                <Button iconName={"arrow-down"}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#060606',
    },
    map: {
        width: "100%",
        height: "100%"
    },
    buttons: {
        display: "flex",
        flexDirection: "row"
    }
});
