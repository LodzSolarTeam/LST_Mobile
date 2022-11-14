import {StyleSheet, View} from "react-native";
import React from "react";

interface TitlesWrapperProps {
    children: JSX.Element[] | JSX.Element;
    style: any
}

const TileWrapper = (props: TitlesWrapperProps) => {
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
        paddingHorizontal: 20,
        paddingVertical: 20,
        margin: 8
    },
})

export default TileWrapper;