import {View} from "react-native";
import StatusChargingTile from "./charge-managment-tiles/StatusChargingTile";
import BatterySOCLimitTile, {IBatterySOCLimitProps} from "./charge-managment-tiles/BatterySOCLimitTile";

const ChargeManagementWrapper = (props: IBatterySOCLimitProps) => {
    return (
        <View style={style.statusContainer}>
            <StatusChargingTile/>
            <BatterySOCLimitTile batterySOC={props.batterySOC}/>
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
