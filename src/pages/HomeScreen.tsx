import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {CarStatus} from "../components/home-screen/CarStatus"
import TileSection from "../components/home-screen/TileSection";
import {useHomeScreenQuery} from "../types";
import axios from 'axios';


export const HomeScreen = () => {
    const {data, loading, error} = useHomeScreenQuery();
    const [temperature, setTemperature] = useState<number>(0);

    const lat = data?.recentCar?.gps!.latitude;
    const lon = data?.recentCar?.gps!.longitude;
    const APIkey = "5a86d693b18204975cc0160f3587e676";
    const url = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" +
        lon + "&units=metric&appid=" + APIkey;

    axios({
        method: "get",
        url: url,
    }).then((response) => {
        setTemperature(response.data.main.temp);
    })

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView stickyHeaderIndices={[0]}>
                <CarStatus status={data?.recentCar?.lights!.highBeamLights}
                           batteryPercentage={data?.recentCar?.battery!.stateOfCharge}/>
                <TileSection ambientTemperature={temperature} batterySOC={data?.recentCar?.battery!.stateOfCharge}
                             totalMileage={data?.recentCar?.general!.mileage}/>
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
