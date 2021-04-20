import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './RegisterNavigator';

import { navigationRef } from './RootNavigation';
/// Main Navigator
const AppNavigator = () => {
    return (
        <NavigationContainer ref={navigationRef}>
            <DrawerNavigator />
        </NavigationContainer>
    );
};

export default AppNavigator; 
