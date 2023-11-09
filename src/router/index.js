import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Home, Login, Register } from "../pages";

const Stack = createNativeStackNavigator();

const Router = () => {
    return(
        <Stack.Navigator
            screenOptions={Platform.OS === 'android' ? {
                headerShown: false, 
                animation: 'slide_from_right',
            }:{
                headerShown: false,
                animation: 'slide_from_right',
                gestureEnabled: false
            }}
            initialRouteName='Login'
        >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
    )
}

export default Router