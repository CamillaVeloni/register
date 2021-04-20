import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import CustomDrawerContent from './CustomDrawerContent';
import { MainNavigator, DashboardNavigator } from './StackNavigator';

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
    return (
        <Drawer.Navigator 
            drawerContent={CustomDrawerContent}
            initialRouteName='Main'
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
