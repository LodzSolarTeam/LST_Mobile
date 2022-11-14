import {ImageBackground, StyleSheet, Text} from "react-native";
import TileWrapper from "./TileWrapper";

interface EcologicalTileProps {
    value: number;
    unit: string;
}

const EcologicalTile = (props: EcologicalTileProps) => {
    const leaf = require("../../assets/leaf.png");

    return (
        <TileWrapper style={ecologicalStyle.container}>
            <ImageBackground source={leaf} imageStyle={ecologicalStyle.image}>
                <Text style={ecologicalStyle.value}>{props.value + " "}{props.unit}</Text>
                <Text style={ecologicalStyle.title}>Saved CO2 emission</Text>
                <Text style={ecologicalStyle.text}>from last charging</Text>
            </ImageBackground>
        </TileWrapper>
    )
}

const ecologicalStyle = StyleSheet.create({
    value: {
        color: "#fff",
        fontSize: 40
    },
    title: {
        color: "#989ca1",
        fontSize: 20
    },
    text: {
        color: "#989ca1",
        fontSize: 15
    },
    container: {
        padding: 30,
    },
    image: {
        opacity: 0.15,
        margin: -20,
        padding: 20, //fixme test on other devices
        position: "absolute",
        right: -200
    }
})


export default EcologicalTile;