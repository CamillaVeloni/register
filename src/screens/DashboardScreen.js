import React from 'react'; 
import { Text, View } from 'react-native'; 

import DrawerMenuBtn from '../components/DrawerMenuBtn';
/* import ListItem from '../components/ListItem';
import { REGISTEREDTIME } from '../data/dummy-data'; */

const DashboardScreen = () => {
    return ( 
        <View style={{ justifyContent: 'center', alignContent: 'center', flex: 1 }}>
            <Text>Dashboard</Text>
        </View>
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

//const styles = StyleSheet.create({});

export default DashboardScreen;
