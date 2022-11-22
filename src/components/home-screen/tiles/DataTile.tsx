import {StyleSheet, Text} from "react-native";
import Tile from "../../shared/Tile";

export interface IDataTileProps {
    value: number;
    unit: string;
    text: string;
}

const DataTile = (props: IDataTileProps) => {
    return (
        <Tile style={{flex: 1}}>
            <Text style={tileStyle.valueStyle}>
                {props.value + " "}
                {props.unit}
            </Text>
            <Text style={tileStyle.textStyle}>
                {props.text}
            </Text>
        </Tile>
    );
}

const tileStyle = StyleSheet.create({
    valueStyle: {
        color: "#fff",
        fontSize: 25
    },
    textStyle: {
        color: "#989ca1"
    }
})

export default DataTile;
