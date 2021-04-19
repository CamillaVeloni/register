import React, { useState } from 'react'; 
import { FlatList, View, StyleSheet, Button } from 'react-native'; 
import { FAB } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DrawerMenuBtn from '../components/DrawerMenuBtn';
import ListItem from '../components/ListItem';
import Colors from '../assets/colors/Colors';
import { USUARIOS, REGISTEREDTIME } from '../data/dummy-data';
import ModalComponent from '../components/ModalComponent';

// Tela 'Meus Registros'
// FlatList com lista de registros do usuário logado
// Floating button para renderizar o modal (ModalComponent.js) 
// Componentes criados para ele: ListItem (item para lista) e ModalComponent (criação de registro)
const RegisterScreen = ({ navigation }) => { 
    const [modalVisible, setModalVisible] = useState(false); // State para abrir ou fechar o modal

    const onLogOut = async () => {
        try {
          await AsyncStorage.removeItem('@acessToken');
          navigation.replace('Login');
        } catch (err) {
          throw new Error(err);
        }
    };

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
            <Button
                title='Sair'
                onPress={onLogOut}
            />
            <FlatList
                data={selectedRegistry}
                showsHorizontalScrollIndicator={false}
                renderItem={renderItem}
            />
            <FAB
                icon='plus'
                style={styles.fabStyle}
                onPress={() => setModalVisible(true)}
            />
            <ModalComponent modalVisible={modalVisible} onClose={() => setModalVisible(false)} />
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
