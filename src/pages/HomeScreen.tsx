import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {StatusBar} from "expo-status-bar";



export function  HomeScreen() {
    return (
        <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#060606',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
