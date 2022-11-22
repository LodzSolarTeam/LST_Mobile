import { StyleSheet, View } from "react-native";
import * as React from "react";
import Button from "../components/shared/Button";
import Tires from "../components/Statistics/Tires";

export function Statistics() {
  return (
    <View style={styles.container}>
      <View style={styles.topNavigation}>
        <Button text="Tires" />
        <Button text="Batteries" />
      </View>
      <Tires />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topNavigation: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#000",
  },
});
