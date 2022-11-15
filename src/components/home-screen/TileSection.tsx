import {SafeAreaView, ScrollView, StyleSheet, View} from "react-native";
import DataTile from "./tiles/DataTile";
import Button from "../shared/Button";
import EcologicalTile from "./tiles/EcologicalTile";
import ChargeManagementWrapper from "./tiles/ChargeManagementWrapper";
import {useState} from "react";

const TileSection = () => {
    const [isCharging, setIsCharging] = useState<boolean>(true);

    return (
        <ScrollView style={style.container} stickyHeaderIndices={[240]}>
                {isCharging && <ChargeManagementWrapper/>}
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
    rowContainer: {
        display: "flex",
        flexDirection: "row"
    }
})

export default TileSection;
