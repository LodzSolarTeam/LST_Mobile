import { StyleSheet, Text, View } from "react-native";
import * as React from "react";
import Tires from "../components/Statistics/Tires";
import Battery from "../components/Statistics/Battery";
import Swiper from "react-native-swiper";

export function Statistics() {
  return (
    <Swiper showsButtons={false}>
      <View style={styles.slide}>
        <Battery />
      </View>
      <View style={styles.slide}>
        <Tires />
      </View>
    </Swiper>
  );
}

const styles = StyleSheet.create({
  slide: { flex: 1 },
});
