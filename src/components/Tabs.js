import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../pages/HomeScreen'
import {Statistics} from '../pages/Statistics'
import {Map} from '../pages/Map'
import {Image, View, Text} from "react-native";

const Tab = createBottomTabNavigator();

function Tabs() {
    return (
        <Tab.Navigator tabBarOptions={{ showLabel: false }}   {...{ screenOptions }}>
            <Tab.Screen name="Home" component={HomeScreen} options={{
                tabBarIcon: ({ color, size }) => (
                     <Image   style={screenOptions.icons}    source={require('../assets/icons/home.png')} />
                ),
            }} />


            <Tab.Screen name="Map" component={Map} options={{
                tabBarIcon: ({ color, size }) => (
                    <Image   style={screenOptions.mapIcon}    source={require('../assets/icons/map.png')} />
                ),
            }} />

            <Tab.Screen name="Statistics" component={Statistics}options={{
                tabBarIcon: ({ color, size }) => (
                    <Image   style={screenOptions.icons}    source={require('../assets/icons/stat.png')} />
                ),
            }} />


        </Tab.Navigator>
    );
}
const screenOptions = {
    tabBarStyle:{
        backgroundColor:'#060606',
        height:70,
    },
    tabBarItemStyle:{
        color:'#FFFFFF',
        margin:5,
        borderRadius:10,
    },
    icons: {
        height : 20,
        width : 20
    },
    mapIcon: {
        height : 25,
        width : 20
    },
};


export default Tabs