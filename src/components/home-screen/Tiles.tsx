import {SafeAreaView, ScrollView, StyleSheet, View} from "react-native";
import DataTile from "./DataTile";
import Button from "./Button";
import EcologicalTile from "./EcologicalTile";
import ChargingTile from "./ChargingTile";
import {useState} from "react";

const Tiles = () => {
    const [isCharging, setIsCharging] = useState<boolean>(true);

    return (
        <ScrollView style={style.container}>
                {isCharging && <ChargingTile/>}
                <View style={style.rowContainer}>
                    <Button iconName={"car-light-high"}/>
                    <Button iconName={"bullhorn-variant-outline"}/>
                </View>
                <View style={style.rowContainer}>
                    <DataTile text={"Estimated range"} value={359} unit={"km"}/>
                    <DataTile text={"Ideal range"} value={367} unit={"km"}/>
                </View>
                <View style={style.rowContainer}>
                    <DataTile text={"Temperature outside"} value={15} unit={"°C"}/>
                    <DataTile text={"Temperature inside"} value={22} unit={"°C"}/>
                </View>
                <EcologicalTile value={96} unit={"mg"}/>
        </ScrollView>
    )
}

const style = StyleSheet.create({
    container: {
        width: "100%"
    },
    wrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
    },
    rowContainer: {
        display: "flex",
        flexDirection: "row"
    }
})

export default Tiles;