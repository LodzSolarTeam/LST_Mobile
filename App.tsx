import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';

import Tabs from "./src/components/Tabs";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import {GRAPHQL_URL} from "./const";

const Tab = createBottomTabNavigator();
const client = new ApolloClient({
    uri: `${GRAPHQL_URL}`, cache: new InMemoryCache(),
});

export default function App() {
    return (
        <ApolloProvider client={client}>
            <NavigationContainer>
                <Tabs/>
            </NavigationContainer>
        </ApolloProvider>
    );
}