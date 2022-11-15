import {StyleProp, StyleSheet, View, ViewStyle} from "react-native";
import React from "react";

interface ITileProps {
    style: StyleProp<ViewStyle>
}

const Tile = (props: React.PropsWithChildren<ITileProps>) => {
    return (
        <View style={[wrapper.container, props.style]}>
            {props.children}
        </View>
    )
}

const wrapper = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#3f3f3f",
        borderRadius: 10,
        minHeight: 85,
        padding: 20,
        margin: 8
    },
})

export default Tile;
