import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { 
    createDrawerNavigator, 
    DrawerContentScrollView, 
    DrawerItemList, 
    DrawerItem 
} from '@react-navigation/drawer';

//import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen'; 
import RegisterScreen from '../screens/RegisterScreen';
import DashboardScreen from '../screens/DashboardScreen';

/* const defaultNavigationOptions = {

}; */

/// Main Flow
const Drawer = createDrawerNavigator();
const MainNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name='Home' component={RegisterScreen} />
            <Drawer.Screen name='Dashboard' component={DashboardScreen} />
        </Drawer.Navigator>
    );
};

// Login Flow e Main Flow
/// Login Flow constitui apenas da tela login 
/// Main Flow constitui do Drawer Navigator criado acima
const Stack = createStackNavigator();
export const RegisterNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='Main'>
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='Main' component={MainNavigator} />
        </Stack.Navigator>
    );
};
