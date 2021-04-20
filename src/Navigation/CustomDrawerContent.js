import React from 'react'; 
import { Text, View, StyleSheet } from 'react-native';
import { Drawer } from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
} from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Colors from '../assets/colors/Colors';
  
const CustomDrawerContent = props => { 
    const onLogOut = async () => {
        try {
          await AsyncStorage.removeItem('@acessToken');
          props.navigation.navigate('Login');
        } catch (err) {
          throw new Error(err);
        }
    }; 
    return ( 
    <View style={styles.drawerContainer}>
        <Drawer.Section style={styles.infoSection}>
            <View style={{ padding: 20 }}>
                <Text style={[styles.titleStyle, { fontSize: 20 }]}>Olá,</Text>
                <Text style={[styles.titleStyle, { fontSize: 16 }]}>Nome</Text>
                <Text style={styles.titleStyle}>Role</Text>
            </View>
        </Drawer.Section> 
        <DrawerContentScrollView {...props}>
            <DrawerItemList 
                {...props}
                activeBackgroundColor='transparent'
                activeTintColor={Colors.drawerActiveColor}
                inactiveTintColor={Colors.drawerInactiveColor}
            />
        </DrawerContentScrollView>
            <DrawerItem
                label=''
                icon={() => <Icon name='logout' size={30} color={props.color} />}
                onPress={onLogOut}
                activeBackgroundColor='transparent'
                activeTintColor={Colors.drawerActiveColor}
                inactiveTintColor={Colors.drawerInactiveColor}
            />
     </View>
    );
};

const styles = StyleSheet.create({
    drawerContainer: {
        flex: 1,
        backgroundColor: Colors.primaryColor
    },
    infoSection: {
        backgroundColor: Colors.backgroundColor,
        justifyContent: 'space-evenly'
    },
    titleStyle: {
        fontWeight: 'bold',
        marginLeft: 10,
        color: Colors.primaryColor
    },
});

export default CustomDrawerContent;
