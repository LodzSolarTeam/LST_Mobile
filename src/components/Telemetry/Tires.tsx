import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
export interface ITiresSectionProps {
  pressures: number[];
  temperatures: number[];
}

const Tires = (props: ITiresSectionProps) => {
  const car = require("../../assets/carImg/car_3.png");

  return (
    <ImageBackground source={car} resizeMode="cover" style={styles.image}>
      <View style={[styles.container]}>
        <View>
          <Text style={styles.parameterTitle}> pressure</Text>
          <Text style={styles.parameterValue}>{props?.pressures!} bar</Text>
          <Text style={styles.parameterTitle}> pressure</Text>
          <Text style={styles.parameterValue}>{props?.pressures[0]!} °C</Text>
        </View>
        <View>
          <Text style={styles.parameterTitle}> pressure</Text>
          <Text style={styles.parameterValue}>{props?.pressures[1]!} bar</Text>
          <Text style={styles.parameterTitle}> pressure</Text>
          <Text style={styles.parameterValue}>{props?.pressures[1]!} °C</Text>
        </View>
      </View>
      <View style={[styles.container]}>
        <View>
          <Text style={styles.parameterTitle}> pressure</Text>
          <Text style={styles.parameterValue}>{props?.pressures[2]!} bar</Text>
          <Text style={styles.parameterTitle}> pressure</Text>
          <Text style={styles.parameterValue}>{props?.pressures[2]!} °C</Text>
        </View>
        <View>
          <Text style={styles.parameterTitle}> pressure</Text>
          <Text style={styles.parameterValue}>{props?.pressures[3]!} bar</Text>
          <Text style={styles.parameterTitle}> Temperatures</Text>
          <Text style={styles.parameterValue}>
            {props?.temperatures[3]!} °C
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
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

  topNavigation: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#000",
  },

  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    height: "50%",
    paddingVertical: 65,
    paddingHorizontal: 25,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#000",
    color: "#FFF",
  },
});

export default Tires;
