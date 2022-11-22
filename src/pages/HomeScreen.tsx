import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {CarStatus} from "../components/home-screen/CarStatus"
import TileSection from "../components/home-screen/TileSection";
import useHomeScreenData from "../hooks/useHomeScreenData";


export const HomeScreen = () => {
    const homeScreenData = useHomeScreenData();

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView stickyHeaderIndices={[0]}>
                <CarStatus status={homeScreenData?.isHighBeamLights!}
                           batteryPercentage={homeScreenData?.batterySOC!}/>
                <TileSection ambientTemperature={homeScreenData?.ambientTemperature!}
                             interiorTemperature={homeScreenData?.interiorTemperature!}
                             batterySOC={homeScreenData?.batterySOC!}
                             CO2saved={homeScreenData?.CO2saved!}
                             isHighBeamLights={homeScreenData?.isHighBeamLights!}
                             estimatedRange={homeScreenData?.estimatedRange!}
                             idealRange={homeScreenData?.idealRange!}/>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#060606'
    }
});
