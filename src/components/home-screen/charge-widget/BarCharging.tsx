import {StyleSheet, Text, View} from "react-native";
import Slider from '@react-native-community/slider';
import React, {useState} from "react";

const BarCharging = () => {
    const [chargingLevel, setChargingLevel] = useState<number>(50);

    return (
        <View style={style.container}>
            <View style={style.textContainer}>
                <Text style={style.text}>Charging level</Text>
                <Text style={style.text}>{chargingLevel}%</Text>
            </View>
            <Slider
                maximumValue={100}
                minimumValue={0}
                step={1}
                value={chargingLevel}
                minimumTrackTintColor={"#00d41f"}
                onValueChange={(value) => setChargingLevel(value)}
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

export default BarCharging;