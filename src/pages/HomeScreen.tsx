import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {CarStatus} from "../components/carStatus/CarStatus"

export function  HomeScreen() {

    return (
        <View style={styles.container}>
            <CarStatus status={1}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop : 56,
        backgroundColor: '#060606',
    },
});
