import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './RegisterNavigator';

/// Main Navigator
const AppNavigator = () => {
    return (
        <NavigationContainer>
            <DrawerNavigator />
        </NavigationContainer>
    );
};

export default AppNavigator; 
