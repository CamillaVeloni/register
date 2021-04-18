import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { MainNavigator, DashboardNavigator } from './StackNavigator';
import Colors from '../assets/colors/Colors';

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
    return (
        <Drawer.Navigator 
            initialRouteName='Main'
            drawerStyle={{
                backgroundColor: Colors.primaryColor
            }}
            drawerContentOptions={{
                activeBackgroundColor: 'transparent',
                activeTintColor: Colors.drawerActiveColor,
                inactiveTintColor: Colors.drawerInactiveColor
            }}    
        >
            <Drawer.Screen 
                name='Main' 
                component={MainNavigator}
                options={{
                    drawerIcon: props => (
                        <Icon
                            name='content-paste'
                            size={23}
                            color={props.color}
                        />
                    )
                }} 
            />
            <Drawer.Screen 
                name='Dashboard' 
                component={DashboardNavigator}
                options={{
                    drawerIcon: props => (
                        <Icon
                            name='view-dashboard-outline'
                            size={23}
                            color={props.color}
                        />
                    )
                }} 
            />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
