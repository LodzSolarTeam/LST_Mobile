import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, Image, SafeAreaView, ScrollView} from 'react-native';
import {CarStatus} from "../components/carStatus/CarStatus"
import TileSection from "../components/home-screen/TileSection";


export function HomeScreen() {

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.ScrollView}  stickyHeaderIndices={[240]}>
            <CarStatus status={1} batteryPercentage={90}/>
            <TileSection/>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#060606',
    },
    ScrollView : {
        paddingTop : 40
    }
});
