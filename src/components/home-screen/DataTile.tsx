import {StyleSheet, Text} from "react-native";
import TileWrapper from "./TileWrapper";

interface TitleProps {
    value: number;
    unit: string;
    text: string;
}

const DataTile = (props: TitleProps) => {
    return (
        <TileWrapper style={{flex: 1}}>
            <Text style={tileStyle.valueStyle}>
                {props.value + " "}
                {props.unit}
            </Text>
            <Text style={tileStyle.textStyle}>
                {props.text}
            </Text>
        </TileWrapper>
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