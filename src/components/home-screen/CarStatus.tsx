import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const car = {
    lightsOn : require("../../assets/carImg/car.png"),
    lightsOff : require("../../assets/carImg/car_2.png"),
    charging : require("../../assets/carImg/charging_car.png"),
}

interface Data {
    status: number,
    batteryPercentage : number
}

export function CarStatus(ICarStatusProps : Data) {
    const [carImg, setCarImg] = useState(car.lightsOn);
    useEffect(() => {
        setCarImg(car.lightsOn)
    } , []);
    return (
        <View style={styles.container}>
            <Text style={styles.baseText}>
                Welcome,
                <Text style={styles.innerText}> Eagle Two</Text>
            </Text>
            <Text style={styles.batteryPercentageText}>
                {ICarStatusProps.batteryPercentage}%
            </Text>
            <Text style={styles.batteryText}>
                BATTERY
            </Text>
            <Image
                style={styles.batteryPercentageText}
                source={carImg}
            />
            <View style={{marginTop : 40}}>
                <Text style={styles.baseText}>
                    Range,
                    <Text style={styles.innerText}> 450km</Text>
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#060606',
        color : '#FFF',
        alignItems: 'center',
        paddingBottom: 40
    },
    baseText: {
        fontSize : 17,
        color: '#FFF',
        fontWeight: "300",
    },
    innerText: {
        fontWeight: '600'
    },
    batteryPercentageText: {
        fontWeight: '600',
        color: '#FFF',
        marginTop : 20,
        fontSize : 32
    },
    car: {
        marginTop : 30,
    },
    batteryText : {
        fontSize : 10,
        color : "#FFF"
    },
});
