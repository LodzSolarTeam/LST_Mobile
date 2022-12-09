import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import useTelemetryData from "../../hooks/useTelemetryData";

export interface IBatterySectionProps {
  power: number[];
}

const Battery = (props: IBatterySectionProps) => {
  const battery = require("../../assets/carImg/batter_panels_2.png");
  return (
    <ImageBackground source={battery} resizeMode="cover" style={styles.image}>
      <View style={[styles.container_top]}>
        <View style={[styles.stat1]}>
          <Text style={styles.parameterTitle}>Power</Text>
          <Text style={styles.parameterValue}>{props.power[0]}W</Text>
        </View>
      </View>
      <View style={[styles.container_mid]}>
        <View style={[styles.stat2]}>
          <Text style={styles.parameterTitle}> Power</Text>
          <Text style={styles.parameterValue}>{props.power[1]}W</Text>
        </View>
      </View>
      <View style={[styles.container_bottom]}>
        <View style={[styles.stat3]}>
          <Text style={styles.parameterTitle}> Power</Text>
          <Text style={styles.parameterValue}>{props.power[2]}W</Text>
        </View>
        <View style={[styles.stat4]}>
          <Text style={styles.parameterTitle}> Power</Text>
          <Text style={styles.parameterValue}>{props.power[3]}W</Text>
        </View>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  stat1: {
    position: "absolute",
    top: 110,
    left: 20,
  },
  stat2: {
    position: "absolute",
    top: 60,
    right: 30,
  },
  stat3: {
    position: "absolute",
    top: 75,
    left: 20,
  },
  stat4: {
    position: "absolute",
    top: 75,
    right: 20,
  },
  parameterTitle: {
    fontSize: 12,
    fontWeight: "300",
    color: "#fff",
  },
  parameterValue: {
    fontSize: 22,
    fontWeight: "300",
    color: "#fff",
  },
  container_top: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    height: "30%",
    paddingHorizontal: 30,
    paddingVertical: 42,
  },
  container_mid: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "100%",
    height: "25%",
    padding: 40,
  },
  container_bottom: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    height: "50%",
    padding: 35,
    paddingTop: 80,
  },
  image: {
    justifyContent: "center",
    backgroundColor: "black",
  },
});
export default Battery;
