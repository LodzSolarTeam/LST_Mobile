import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../pages/HomeScreen";
import { Telemetry } from "../pages/Telemetry";
import { Map } from "../pages/Map";
import { Image } from "react-native";

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator {...{ screenOptions, tabBarOptions }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <Image
              style={screenOptions.icons}
              source={require("../assets/icons/home.png")}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Map"
        component={Map}
        options={{
          tabBarIcon: () => (
            <Image
              style={screenOptions.mapIcon}
              source={require("../assets/icons/map.png")}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Telemetry"
        component={Telemetry}
        options={{
          tabBarIcon: () => (
            <Image
              style={screenOptions.icons}
              source={require("../assets/icons/stat.png")}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const tabBarOptions = {
  showLabel: false,
};
const screenOptions = {
  headerShown: false,
  labelStyle: {
    showLabel: false,
  },
  tabBarStyle: {
    backgroundColor: "#060606",
    height: 70,
  },
  tabBarItemStyle: {
    color: "#FFFFFF",
    margin: 5,
    borderRadius: 10,
  },
  icons: {
    height: 20,
    width: 20,
  },
  mapIcon: {
    height: 25,
    width: 20,
  },
};

export default Tabs;
