import React, { useState, useEffect } from 'react'; 
import { ActivityIndicator, View, StyleSheet } from 'react-native'; 
import { FAB } from 'react-native-paper';
import { useQuery } from '@apollo/client';

import ComponentList from '../components/ComponentList';
import { FETCHING_USER } from '../graphql/requests';
import DrawerMenuBtn from '../components/DrawerMenuBtn';
import Colors from '../assets/colors/Colors';
import ModalComponent from '../components/ModalComponent';

// Tela 'Meus Registros'
// FlatList com lista de registros do usuário logado
// Floating button para renderizar o modal (ModalComponent.js) 
// Componentes criados para ele: ListItem (item para lista) e ModalComponent (criação de registro)
const RegisterScreen = () => { 
    const [modalVisible, setModalVisible] = useState(false); // State para abrir ou fechar o modal
    const [userId, setUserId] = useState();
    const { data, loading } = useQuery(FETCHING_USER);

    useEffect(() => {
        if (data) {
            const { me: { id } } = data;
            setUserId(id);
        }
    }, [data]);

    return ( 
        <View style={{ flex: 1 }}>
            {loading ? (
                <ActivityIndicator size='large' color='green' />
            ) : (
                <ComponentList userId={userId} />
            )
            }
            <FAB
                icon='plus'
                style={styles.fabStyle}
                onPress={() => setModalVisible(true)}
            />
            <ModalComponent 
                modalVisible={modalVisible} 
                onClose={() => setModalVisible(false)}
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
