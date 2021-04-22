import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import DashboardScreen, { screenOptions as DashboardScreenOptions } from '../screens/DashboardScreen';
import RegisterScreen, { screenOptions as RegisterScreenOptions } from '../screens/RegisterScreen';

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
            <Stack.Screen 
                name='Home' 
                component={RegisterScreen} 
                options={RegisterScreenOptions} 
            />
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
