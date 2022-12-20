import React, {useEffect, useState} from "react";
import {Dimensions, StyleSheet, View, Text} from "react-native";

import {LineChart} from 'react-native-chart-kit';
import DataTile from "../components/home-screen/tiles/DataTile";
import Tile from "../components/shared/Tile";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import dayjs from "dayjs";

const formatDate = (val: dayjs.Dayjs) => {
    return val.format("YYYY-MM-DD");
}

const myData = {
    [`${formatDate(dayjs().subtract(1, "day"))}`]: [0, 0, 0, 0, 0, 0, 0, 0.3, 0.5, 0.6, 0.7, 0.9, 0.92, 0.9, 0.7, 0.5, 0.15, 0, 0, 0, 0, 0, 0, 0],
    [`${formatDate(dayjs())}`]: [0, 0, 0, 0, 0, 0, 0, 0.3, 0.5, 0.6, 0.7, 0.4, 0.92, 0.9, 0.7, 0.5, 0.15, 0, 0, 0, 0, 0, 0, 0],
    [`${formatDate(dayjs().add(1, "day"))}`]: [0, 0, 0, 0, 0, 0, 2, 0.3, 0.5, 0.6, 0.7, 0.9, 0.92, 0.9, 0.7, 0.5, 0.15, 0, 0, 0, 0, 0, 0, 0]
};


const ChartScreen = () => {

    const [points, setPoints] = useState<number[]>([]);
    const [currentDate, setCurrentDate] = useState(formatDate(dayjs()));

    useEffect(() => {
        setPoints(
            myData[`${currentDate}`] ?? []
        );
    }, [currentDate]);

    return (
        <View style={style.container}>
            <Text style={style.header}>Solar panels</Text>

            <Tile style={{}}>
                <View style={style.buttons}>
                    <MaterialCommunityIcons
                        onPress={() => {
                            setCurrentDate(
                                prev => formatDate(dayjs(prev).subtract(1, "day"))
                            );
                        }}
                        name={"arrow-left"}
                        size={40}
                        color={"white"}
                    />
                    <Text style={style.date}>{currentDate}</Text>
                    <MaterialCommunityIcons
                        onPress={() => {
                            setCurrentDate(
                                prev => formatDate(dayjs(prev).add(1, "day"))
                            );
                        }}
                        name={"arrow-right"}
                        size={40}
                        color={"white"}
                    />
                </View>
                <LineChart
    data={{
        labels: ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22"].map((value: string) => value + "h"),
        datasets: [
            {
                data: points,
                color: (opacity = 1) => `rgba(255, 255, 255, 1)`,
            },
            {
                data: points.map(val => val === 0 ? val : val + Math.random() * 0.3),
                color: (opacity = 1) => `rgba(0, 212, 31, 0.89)`,

            }
        ],
    }}
    width={Dimensions.get('window').width - 50}
    height={400}
    yAxisSuffix={'kWh'}
    xAxisLabel={'h'}
    withInnerLines={false}

    chartConfig={{
        backgroundColor: '#3f3f3f',
        backgroundGradientFrom: '#3f3f3f',
        backgroundGradientTo: '#3f3f3f',
        decimalPlaces: 1,
        color: (opacity = 1) => `rgba(255, 255, 255, 1)`,
        style: {
            borderRadius: 16,
            margin: 0,
            padding: 0,
        },
    }}
    style={{
        margin: 0,
        padding: 0,
        transform: [{translateX: -18}, {translateY: 18}]
    }}
    bezier/>
            </Tile>
            <View>
                <DataTile text={"Total from front panels"} unit={"kWh"} value={7.4}/>
                <DataTile text={"Total from back panels"} unit={"kWh"} value={8.2}/>
            </View>

        </View>
    )
}

const style = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: "#060606",
        paddingTop: 50,
    },
    header: {
        color: 'white',
        fontSize: 30,
        alignSelf: "center",
        paddingBottom: 20,
        paddingTop: 10
    },
    date: {
        color: 'white',
        fontSize: 20,
    },
    buttons: {
        display:"flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingBottom: 20,
        paddingTop: 5

    },
    tiles: {
        flex: 1,
    }
})


export default ChartScreen;