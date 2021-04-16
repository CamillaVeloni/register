import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

//import SplashScreen from '../screens/SplashScreen';
//import LoginScreen from '../screens/LoginScreen';
import { RegisterNavigator } from './RegisterNavigator';

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <RegisterNavigator />
        </NavigationContainer>
    );
};

export default AppNavigator; 
