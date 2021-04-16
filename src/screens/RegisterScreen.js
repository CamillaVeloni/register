import React from 'react'; 
import { FlatList } from 'react-native'; 

import DrawerMenuBtn from '../components/DrawerMenuBtn';
import ListItem from '../components/ListItem';
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
        <FlatList
            data={selectedRegistry}
            showsHorizontalScrollIndicator={false}
            renderItem={renderItem}
        />
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

/* const styles = StyleSheet.create({

}); */

export default RegisterScreen;
