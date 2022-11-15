import {StyleSheet, Text, View} from "react-native";
import Slider, {SliderReferenceType} from '@react-native-community/slider';
import React, {useState} from "react";

// @ts-ignore
function findAllMethods(obj, methods = []) {
    if (!obj) {
        return [...new Set(methods)];
    }

    const props = Object.getOwnPropertyNames(obj);
    // @ts-ignore
    return findAllMethods(Object.getPrototypeOf(obj), [
        ...methods,
        ...props.filter(prop => typeof obj[prop] === 'function'),
    ]);
}

const batteryLevelFromCloud = 50;

const BatterySOCLimitTile = () => {
    const [batteryLevel, setBatteryLevel] = useState<number>(50);
    const [chargingLimit, setChargingLimit] = useState<number>(batteryLevel);

    const changeChargingLimit =
        (value: number) => {
            setChargingLimit(value);
        };


    return (
        <View style={style.container}>
            <View style={style.textContainer}>
                <Text style={style.text}>Charging limit</Text>
                <Text style={style.text}>{chargingLimit}%</Text>
            </View>
            <Slider
                onResponderRelease={(event) => {
                    if (chargingLimit < batteryLevel) {
                        changeChargingLimit(batteryLevel);
                    }
                }}
                maximumValue={100}
                minimumValue={0}
                step={1}
                value={chargingLimit}
                minimumTrackTintColor={chargingLimit < batteryLevel ? "#ccc" : "#00d41f"}
                onValueChange={changeChargingLimit}

            />
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        marginVertical: 30,
        marginHorizontal: 20,
    },
    slider: {
        color: "#00d41f"
    },
    textContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    text: {
        color: "white"
    }
})

export default BatterySOCLimitTile;
