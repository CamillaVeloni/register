import React, { useState, useEffect } from 'react'; 
import { View, StyleSheet } from 'react-native'; 
import { FAB } from 'react-native-paper';
import { useQuery } from '@apollo/client';

import { Spinner } from '../components/commons';
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
    const [userName, setUsername] = useState();
    const { data, loading } = useQuery(FETCHING_USER, {
        fetchPolicy: 'network-only'
    });

    useEffect(() => {
        if (data) {
            const { me: { id, username } } = data;
            setUserId(id);
            setUsername(username);
        }
    }, [data]);

    return ( 
        <View style={{ flex: 1 }}>
            {loading ? (
                <Spinner />
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
                userId={userId}
                userName={userName}
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
