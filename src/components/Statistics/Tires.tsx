import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

const Tires = () => {
  const car = require("../../assets/carImg/car_3.png");

  return (
    <ImageBackground source={car} resizeMode="cover" style={styles.image}>
      <View style={[styles.container]}>
        <View>
          <Text style={styles.parameterTitle}> pressure</Text>
          <Text style={styles.parameterValue}> 1.5 Bar</Text>
        </View>
        <View>
          <Text style={styles.parameterTitle}> pressure</Text>
          <Text style={styles.parameterValue}> 1.5 Bar</Text>
        </View>
      </View>
      <View style={[styles.container]}>
        <View>
          <Text style={styles.parameterTitle}> pressure</Text>
          <Text style={styles.parameterValue}> 1.5 Bar</Text>
        </View>
        <View>
          <Text style={styles.parameterTitle}> pressure</Text>
          <Text style={styles.parameterValue}> 1.5 Bar</Text>
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
    padding: 40,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "black",
    color: "white",
  },
});

export default Tires;
