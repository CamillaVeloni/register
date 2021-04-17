import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import DashboardScreen, { screenOptions as DashboardScreenOptions } from '../screens/DashboardScreen';
import RegisterScreen, { screenOptions as RegisterScreenOptions } from '../screens/RegisterScreen';
//import Colors from '../assets/colors/Colors';

///  Auth Flow e Main Flow
/// Contém: Tela Login e Tela Registros 
const Stack = createStackNavigator();

const MainNavigator = () => {
    return (
        <Stack.Navigator 
            screenOptions={{
                headerStyle: {
                    backgroundColor: 'transparent',
                },

            }}
        >
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='Home' component={RegisterScreen} options={RegisterScreenOptions} />
        </Stack.Navigator>
    );
};

const DashboardNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Dashboard' component={DashboardScreen} options={DashboardScreenOptions} />
        </Stack.Navigator>
    );
};

export { MainNavigator, DashboardNavigator };
