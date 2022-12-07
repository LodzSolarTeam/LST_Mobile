import { StyleSheet, Text, View } from "react-native";
import * as React from "react";
import Tires from "../components/Statistics/Tires";
import Battery from "../components/Statistics/Battery";
import Swiper from "react-native-swiper";

export function Statistics() {
  return (
    <Swiper showsButtons={true}>
      <Battery />
      <Tires />
    </Swiper>
  );
}
