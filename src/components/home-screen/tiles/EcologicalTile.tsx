import {ImageBackground, StyleSheet, Text} from "react-native";
import Tile from "../../shared/Tile";

interface EcologicalTileProps {
    totalMileage?: number;
    unit: string;
}

const EcologicalTile = (props: EcologicalTileProps) => {
    const leaf = require("../../../assets/leaf.png");
    const CO2saved = props.totalMileage ? (props.totalMileage * 1.6 * 59).toFixed(0) : 0;

    return (
        <Tile style={ecologicalStyle.container}>
            <ImageBackground source={leaf} imageStyle={ecologicalStyle.image}>
                <Text style={ecologicalStyle.value}>{CO2saved + " "}{props.unit}</Text>
                <Text style={ecologicalStyle.title}>Saved CO2 emission</Text>
                <Text style={ecologicalStyle.text}>from last charging</Text>
            </ImageBackground>
        </Tile>
    )
}

const ecologicalStyle = StyleSheet.create({
    value: {
        color: "#fff",
        fontSize: 40
    },
    title: {
        color: "#989ca1",
        fontSize: 20,
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
        margin: -30,
        padding: 20, //fixme test on other devices
        position: "absolute",
        right: "-40%"
    }
})


export default EcologicalTile;
