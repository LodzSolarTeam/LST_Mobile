import * as React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {StatusBar} from "expo-status-bar";



export function  HomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.baseText}>
                Welcome,
                <Text style={styles.innerText}> Eagle Two</Text>
            </Text>
            <Text style={styles.batteryPercentageText}>
                90%
            </Text>
            <Image
                style={styles.batteryPercentageText}
                source={require('../assets/car.png')}
            />
            <View style={styles.marginTop10}>
            <Text style={styles.baseText}>
                Range,
                <Text style={styles.innerText}> 450km</Text>
            </Text>
            </View>
            {/*<StatusBar style="auto" />*/}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop : 56,
        backgroundColor: '#060606',
        color : 'white',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    baseText: {
        fontSize : 17,
        color: '#FFF',
        fontWeight: "300",
    },
    innerText: {
        fontWeight: '600'
    },
    batteryPercentageText: {
        fontWeight: '600',
        color: '#FFF',
        marginTop : 26,
        fontSize : 32
    },
    car: {
        marginTop : 30,
    },
    range : {
        marginTop : 30,
    },
    marginTop10 : {
        marginTop : 40,
    }

});
