import React from "react";
import {StyleSheet, View, Text} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";

const StatusCharging = () => {
    return (
        <View style={style.container}>
            <Text style={style.text}>Status</Text>
            <View style={style.chargingContainer}>
                <MaterialCommunityIcons name="lightning-bolt" size={30} color="white"/>
                <Text style={style.text}>
                    Charging
                </Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "96%",
        minHeight: 60,
        paddingHorizontal: 30,
        margin: 8,
        backgroundColor: "#00d41f",
        borderRadius: 30
    },
    text: {
        color: "#fff"
    },
    chargingContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    }
})

export default StatusCharging;