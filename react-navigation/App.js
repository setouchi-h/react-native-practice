import { Text, View, Button } from "react-native"
import * as React from "react"
import "react-native-gesture-handler"
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

function HomeScreen() {
    const navigation = useNavigation()

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Home Screen</Text>
            {/* <Button title="詳細へ" onPress={() => navigation.navigate("Detail")}></Button> */}
        </View>
    )
}

function DetailScreen() {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Detail Screen</Text>
        </View>
    )
}

function SettingsScreen() {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Detail Screen</Text>
        </View>
    )
}

// const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

export default function App() {
    return (
        <NavigationContainer>
            {/* <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: "ホーム" }} />
                <Stack.Screen name="Detail" component={DetailScreen} />
            </Stack.Navigator> */}
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
