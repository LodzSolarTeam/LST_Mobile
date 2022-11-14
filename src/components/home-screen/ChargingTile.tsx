import {View} from "react-native";
import StatusCharging from "./charge-widget/StatusCharging";
import BarCharging from "./charge-widget/BarCharging";

const ChargingTile = () => {
    return(
        <View style={style.statusContainer}>
            <StatusCharging/>
            <BarCharging/>
        </View>
    )
}

const style = {
    statusContainer: {
        marginTop: 40,
        width: "100%"
    }
}

export default ChargingTile;