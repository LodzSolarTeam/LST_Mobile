import React, { useState } from "react";
import { StyleSheet, Pressable, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface ButtonProps {
  iconName?: keyof typeof MaterialCommunityIcons.glyphMap;
  text?: String;
}

const Button = (props: ButtonProps) => {
  const [isPressed, setIsPressed] = useState<boolean>(false);

  return (
    <Pressable
      style={
        !isPressed
          ? buttonStyle.button
          : [buttonStyle.button, buttonStyle.buttonPressed]
      }
      onPress={() => setIsPressed(!isPressed)}
    >
      {props.iconName && (
        <MaterialCommunityIcons
          name={props.iconName}
          size={40}
          color={!isPressed ? "white" : "#00d41f"}
        />
      )}
      {props.text && <Text style={{ color: "white" }}>{props.text}</Text>}
    </Pressable>
  );
};

const buttonStyle = StyleSheet.create({
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3f3f3f",
    width: "46%",
    height: 65,
    borderRadius: 40,
    marginHorizontal: 8,
    marginVertical: 20,
  },
  buttonPressed: {
    borderWidth: 1,
    borderColor: "#a6a6a6",
    backgroundColor: "#4f4f4f",
  },
  text: {
    color: "#fff",
    fontSize: 25,
  },
});

export default Button;
