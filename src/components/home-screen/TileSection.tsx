import {StyleSheet, View} from "react-native";
import DataTile from "./tiles/DataTile";
import Button from "../shared/Button";
import EcologicalTile from "./tiles/EcologicalTile";
import ChargeManagementWrapper from "./tiles/ChargeManagementWrapper";
import React, {useState} from "react";

interface ITileSectionProps {
    ambientTemperature: number;
    batterySOC: number;
    totalMileage?: number;
}

const TileSection = (props: ITileSectionProps) => {
    const [isCharging, setIsCharging] = useState<boolean>(true);

    return (
        <View>
            {isCharging && <ChargeManagementWrapper/>}
            <View style={style.rowContainer}>
                <Button iconName={"car-light-high"}/>
                <Button iconName={"bullhorn-variant-outline"}/>
            </View>
            <View style={style.rowContainer}>
                <DataTile text={"Estimated range"} value={props.batterySOC * 4.5 * 0.87} unit={"km"}/>
                <DataTile text={"Ideal range"} value={props.batterySOC * 4.5} unit={"km"}/>
            </View>
            <View style={style.rowContainer}>
                <DataTile text={"Temperature outside"} value={props.ambientTemperature} unit={"°C"}/>
                <DataTile text={"Temperature inside"} value={props.ambientTemperature + 5} unit={"°C"}/>
            </View>
            <EcologicalTile totalMileage={props.totalMileage} unit={"mg"}/>
        </View>
    )
}

const style = StyleSheet.create({
    rowContainer: {
        display: "flex",
        flexDirection: "row"
    }
})

export default TileSection;
