import React from 'react'; 
import { FlatList, View, StyleSheet } from 'react-native'; 
import { FAB } from 'react-native-paper';

import DrawerMenuBtn from '../components/DrawerMenuBtn';
import ListItem from '../components/ListItem';
import Colors from '../assets/colors/Colors';
import { USUARIOS, REGISTEREDTIME } from '../data/dummy-data';

// Tela 'Meus Registros'
const RegisterScreen = () => { 
    // Renderizando os registros do usuário ou admin
    const renderItem = ({ item }) => {
        return (
            <ListItem 
                name={loggedUser.name}
                role={loggedUser.role}
                timeRegistered={item.timeRegistered}
                dayRegistered={item.dayRegistered}
            />
        );
    };
    
    const loggedUser = USUARIOS.find(({ id }) => id === 'a1');
    const selectedRegistry = REGISTEREDTIME.filter(({ userId }) => userId === loggedUser.id);
    return ( 
        <View style={{ flex: 1 }}>
            <FlatList
                data={selectedRegistry}
                showsHorizontalScrollIndicator={false}
                renderItem={renderItem}
            />
            <FAB
                icon='plus'
                style={styles.fabStyle}
                onPress={() => console.log('Lógica para modal')}
            />
        </View>
    );
};

// Adicionando botão de menu do drawer ~~ as opções são colocadas no StackNavigator Stack.Screen 'Home'
// A lógica do Drawer Menu Button foi colocada no componente DrawerMenuBtn.js
export const screenOptions = ({ navigation }) => {
    return {
        headerTitle: 'Meus Registros',
        headerLeft: () => <DrawerMenuBtn onPress={() => navigation.toggleDrawer()} />
    };
}; 

const styles = StyleSheet.create({
    fabStyle: {
        position: 'absolute',
        backgroundColor: Colors.accentColor,
        right: 0,
        bottom: 0,
        margin: 16
    }
}); 

export default RegisterScreen;
