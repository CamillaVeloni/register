import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import DashboardScreen, { screenOptions as DashboardScreenOptions } from '../screens/DashboardScreen';
import RegisterScreen, { screenOptions as RegisterScreenOptions } from '../screens/RegisterScreen';

///  Auth Flow e Main Flow
/// Contém: Tela Login e Tela Registros 
const Stack = createStackNavigator();

const MainNavigator = () => {
    // Checando por token dentro da asyncStorage 
    const [isLogged, setIsLogged] = useState(false); // State para mudar de tela
    const [loading, setLoading] = useState(true); // State para mostrar SplashScreen
    useEffect(() => {
        const tryLocalSignin = async () => {
            const token = await AsyncStorage.getItem('@acessToken');
            if (token) {
                setIsLogged(true);
            } else {
                setIsLogged(false);
            }
            setLoading(false);
        };
        tryLocalSignin();
    }, []);

    if (loading) {
       return <SplashScreen />;
    } 

    return (
        <Stack.Navigator 
            screenOptions={{
                headerStyle: {
                    backgroundColor: 'transparent',
                },

            }}
        >   
            {!isLogged ? (
                <>
                <Stack.Screen name='Login' component={LoginScreen} />
                <Stack.Screen name='Home' component={RegisterScreen} options={RegisterScreenOptions} />
                </>
            ) : (
                <>
                <Stack.Screen name='Home' component={RegisterScreen} options={RegisterScreenOptions} />
                <Stack.Screen name='Login' component={LoginScreen} />
                </>
            )
            }
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
