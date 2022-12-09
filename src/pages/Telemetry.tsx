import * as React from "react";
import Tires from "../components/Telemetry/Tires";
import Battery from "../components/Telemetry/Battery";
import Swiper from "react-native-swiper";
import useTelemetryData from "../hooks/useTelemetryData";
import { StyleSheet, View } from "react-native";

export function Telemetry() {
  const { finalResult, loading } = useTelemetryData();
  return (
    <>
      <View style={style.container}>
        {!loading && finalResult != undefined && (
          <Swiper showsButtons={true} loop={false}>
            <Battery power={finalResult?.solar?.power!} />
            <Tires
              pressures={finalResult?.tires?.pressures!}
              temperatures={finalResult?.tires?.temperatures!}
            />
          </Swiper>
        )}
      </View>
    </>
  );
}

const style = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
  },
});
