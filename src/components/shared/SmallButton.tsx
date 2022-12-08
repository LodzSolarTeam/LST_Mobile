import {Pressable, StyleProp, StyleSheet} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";

interface ISmallButtonProps {
    iconName: keyof typeof MaterialCommunityIcons.glyphMap;
    onClickAction: () => void;
    style?: StyleProp<any>;
}

const SmallButton = (props: ISmallButtonProps) => {
    return(
        <Pressable style={[style.button, props.style]} onPress={props.onClickAction}>
            <MaterialCommunityIcons name={props.iconName} size={25} color={"white"}/>
        </Pressable>
    )
}

const style = StyleSheet.create({
    button: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#3f3f3f",
        width: 50,
        height: 50,
        borderRadius: 40,
        margin: 8
    }
})

export default SmallButton;