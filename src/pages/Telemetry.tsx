import { StyleSheet, Text, View } from "react-native";
import * as React from "react";
import Tires from "../components/Telemetry/Tires";
import Battery from "../components/Telemetry/Battery";
import Swiper from "react-native-swiper";
import useTelemetryData from "../hooks/useTelemetryData";

export function Telemetry() {
  const { finalResult, loading } = useTelemetryData();
  return (
    <>
      {!loading && finalResult != undefined && (
        <Swiper showsButtons={true} loop={false}>
          <Battery power={finalResult?.solar?.power!} />
          <Tires
            pressures={finalResult?.tires?.pressures!}
            temperatures={finalResult?.tires?.temperatures!}
          />
        </Swiper>
      )}
    </>
  );
}
