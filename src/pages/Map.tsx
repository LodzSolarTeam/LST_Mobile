import {StyleSheet, Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import * as React from "react";

export function Map() {
    return (
        <View style={styles.container}>
            <Text>Setting screen !</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
