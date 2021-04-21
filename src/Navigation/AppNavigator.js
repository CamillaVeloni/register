import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { isSignedIn } from '../actions/auth';
import SplashScreen from '../screens/SplashScreen';
import DrawerNavigator from './RegisterNavigator';
import LoginScreen from '../screens/LoginScreen';
import { navigationRef } from './RootNavigation';

/// Main Navigator
const AppNavigator = () => {
    // Checando por token dentro da asyncStorage 
    const [isLogged, setIsLogged] = useState(false); // State para mudar de tela
    const [loading, setLoading] = useState(true); // State para mostrar SplashScreen

    useEffect(() => {
        const tryLocalSignin = async () => {
            const token = isSignedIn();
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

    const Stack = createStackNavigator();

    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator initialRouteName={isLogged ? 'Main' : 'Login'} headerMode='none'>
                <Stack.Screen 
                    name='Login' 
                    component={LoginScreen}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name='Main' 
                    component={DrawerNavigator}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator; 
