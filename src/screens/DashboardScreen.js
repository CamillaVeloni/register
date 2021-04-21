import React from 'react'; 

import ComponentList from '../components/ComponentList';
import DrawerMenuBtn from '../components/DrawerMenuBtn';

// Componentes para ele: ListItem
const DashboardScreen = () => {
    return ( 
        <ComponentList
            admin
        />
    );
};

// Adicionando botão de menu do drawer ~~ as opções são colocadas no StackNavigator Stack.Screen 'Dashboard'
// A lógica do Drawer Menu Button foi colocada no componente DrawerMenuBtn.js
export const screenOptions = ({ navigation }) => {
    return {
        headerTitle: 'Dashboard',
        headerLeft: () => <DrawerMenuBtn onPress={() => navigation.toggleDrawer()} />
    };
}; 

export default DashboardScreen;
