import {StyleSheet, View} from "react-native";
import DataTile from "./tiles/DataTile";
import Button from "../shared/Button";
import EcologicalTile from "./tiles/EcologicalTile";
import ChargeManagementWrapper from "./tiles/ChargeManagementWrapper";
import React, {useState} from "react";

export interface ITileSectionProps {
    interiorTemperature: number;
    ambientTemperature: number;
    estimatedRange: number;
    idealRange: number;
    batterySOC: number;
    CO2saved: number;
    isHighBeamLights: boolean;
}

const TileSection = (props: ITileSectionProps) => {
    const [isCharging, setIsCharging] = useState<boolean>(true);

    return (
        <View>
            {isCharging && <ChargeManagementWrapper batterySOC={props.batterySOC}/>}
            <View style={style.rowContainer}>
                <Button iconName={"car-light-high"}/>
                <Button iconName={"bullhorn-variant-outline"}/>
            </View>
            <View style={style.rowContainer}>
                <DataTile text={"Estimated range"} value={props.estimatedRange} unit={"km"}/>
                <DataTile text={"Ideal range"} value={props.idealRange} unit={"km"}/>
            </View>
            <View style={style.rowContainer}>
                <DataTile text={"Temperature outside"} value={props.ambientTemperature} unit={"°C"}/>
                <DataTile text={"Temperature inside"} value={props.interiorTemperature} unit={"°C"}/>
            </View>
            <EcologicalTile totalMileage={props.CO2saved} unit={"mg"}/>
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
