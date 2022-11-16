import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, Image, SafeAreaView} from 'react-native';
import {CarStatus} from "../components/carStatus/CarStatus"
import TileSection from "../components/home-screen/TileSection";


export function HomeScreen() {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <CarStatus status={1} batteryPercentage={90}/>
            </View>
            <TileSection/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop : 56,
        backgroundColor: '#060606',
    },
});
