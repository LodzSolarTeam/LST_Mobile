import {View} from "react-native";
import StatusChargingTile from "./charge-managment-tiles/StatusChargingTile";
import BatterySOCLimitTile from "./charge-managment-tiles/BatterySOCLimitTile";

const ChargeManagementWrapper = () => {
    return (
        <View style={style.statusContainer}>
            <StatusChargingTile/>
            <BatterySOCLimitTile/>
        </View>
    )
}

const style = {
    statusContainer: {
        marginTop: 40,
        width: "100%"
    }
}

export default ChargeManagementWrapper;
