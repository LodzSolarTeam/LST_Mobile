import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { CarStatus } from "../components/home-screen/CarStatus";
import TileSection from "../components/home-screen/TileSection";
import useHomeScreenData from "../hooks/useHomeScreenData";

export const HomeScreen = () => {
  const homeScreenData = useHomeScreenData();
  const [top, setTop] = useState(0);

  const handleScroll = (event: { nativeEvent: { contentOffset: number } }) => {
    const { contentOffset } = event.nativeEvent;
    setTop(contentOffset.y);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView onScroll={handleScroll}>
        <CarStatus
          status={homeScreenData?.isHighBeamLights!}
          batteryPercentage={homeScreenData?.batterySOC!}
        />
        {!top && (
          <View style={styles.arrowDown}>
            <Image source={require("../assets/icons/arrow-down.png")} />
          </View>
        )}

        <TileSection
          ambientTemperature={homeScreenData?.ambientTemperature!}
          interiorTemperature={homeScreenData?.interiorTemperature!}
          batterySOC={homeScreenData?.batterySOC!}
          CO2saved={homeScreenData?.CO2saved!}
          isHighBeamLights={homeScreenData?.isHighBeamLights!}
          estimatedRange={homeScreenData?.estimatedRange!}
          idealRange={homeScreenData?.idealRange!}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const containerBackgroundColor = "#060606";
const arrowDownTop = 480;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: containerBackgroundColor,
  },
  arrowDown: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: arrowDownTop,
    left: 0,
    right: 0,
    zIndex: 100,
  },
});
