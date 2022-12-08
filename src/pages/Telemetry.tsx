import { StyleSheet, Text, View } from "react-native";
import * as React from "react";
import Tires from "../components/Telemetry/Tires";
import Battery from "../components/Telemetry/Battery";
import Swiper from "react-native-swiper";
import useTelemetryData from "../hooks/useTelemetryData";
import useHomeScreenData from "../hooks/useHomeScreenData";

export function Telemetry() {
  const telemetryData = useTelemetryData();
  return (
    <Swiper showsButtons={true}>
      {/*<Battery />*/}
      {/*<Tires*/}
      {/*  pressures={telemetryData}*/}
      {/*  temperatures={telemetryData?.tires.temperatures!}*/}
      {/*/>*/}
    </Swiper>
  );
}
