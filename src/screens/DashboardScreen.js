import React from 'react'; 
import { StyleSheet, FlatList, Text, View } from 'react-native'; 
import { REGISTEREDTIME } from '../data/dummy-data';
import ListItem from '../components/ListItem';

const DashboardScreen = () => {
    return ( 
        <View style={{ justifyContent: 'center', alignContent: 'center', flex: 1}}>
            <Text>Dashboard</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default DashboardScreen;
