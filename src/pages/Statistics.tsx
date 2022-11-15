import {Image, ImageBackground, StyleSheet, Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import * as React from "react";
import carCharging from "../assets/carImg/car_3.png";
export function Statistics() {
    const image = { uri: "https://reactjs.org/logo-og.png" };

    return (
        <View style={styles.container}>
            <ImageBackground source={carCharging} resizeMode="cover" style={styles.image}>
                {/*<View*/}
                {/*    style={[styles.box, { backgroundColor: "steelblue" }]}*/}
                {/*/>*/}
                <View
                    style={[styles.box]}
                />
                <View
                    style={[styles.box_2]}
                >
                    <Text style={{color: "white"}}> Tire</Text>
                    <Text > Eagle Two</Text>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    container_2: {
        flex: 1,
        justifyContent: "space-around",
        padding: 20,
    },
    box: {
        width: "100%",
        height: "50%",
    },
    box_2: {
        display :"flex",
        flexDirection :"row",
        justifyContent :"space-between",
        width: "100%",
        height: "50%",
    },
    image: {
        flex: 1,
        justifyContent: "center",
        backgroundColor : "black",
        color : "white"
    },
    text: {
        color: "white",
        fontSize: 42,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000c0"
    }
});

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         paddingTop : 56,
//         backgroundColor: '#060606',
//         color : 'white',
//         alignItems: 'center',
//         // justifyContent: 'center',
//     },
//     baseText: {
//         fontSize : 17,
//         color: '#FFF',
//         fontWeight: "300",
//     },
//     innerText: {
//         fontWeight: '600'
//     },
//     batteryPercentageText: {
//         fontWeight: '600',
//         color: '#FFF',
//         marginTop : 26,
//         fontSize : 32
//     },
//     car: {
//         marginTop : 30,
//     },
//     range : {
//         marginTop : 30,
//     },
//     marginTop10 : {
//         marginTop : 40,
//     }
//
// });

