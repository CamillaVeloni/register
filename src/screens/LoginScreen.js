import React, { useState } from 'react'; 
import { View, StyleSheet, TouchableOpacity, Text, ActivityIndicator } from 'react-native'; 
import { useMutation } from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { LOGIN_MUTATION } from '../graphql/requests';
import { Input } from '../components/commons';
import SvgComponent from '../components/LogoComponent';
import Colors from '../assets/colors/Colors';

// Tela login
// Componentes para ele: LogoComponent 
const LoginScreen = ({ navigation }) => { 
    // States para o formulário de login
    const [login, setLogin] = useState(''); // email
    const [password, setPassword] = useState(''); // senha
    const [loading, setLoading] = useState(''); // spinner para espera resposta
    const [err, setErr] = useState(false); // mensagem de erro

    function clearStates() {
        setLogin('');
        setPassword('');
        setErr('');
        setLoading(false);
    }

    // Usando hook para request ao api
    // onError: quando ocorre algum erro no request, volta o erro (err.graphQLErrors[0].message)
    // onCompleted: volta a data de quando estiver sucedido. 
    // No onCompleted a gente limpa todos os states, seta o token no asyncStorage e navega para tela 'Meus Registros'
    const [LoginUserMutation] = useMutation(LOGIN_MUTATION, {
        onError: (e) => {
            console.log(e.graphQLErrors[0].message);
            setErr('Algo deu errado tente novamente mais tarde.');
            setLoading(false);
        },
        onCompleted: ({ login: { jwt, user } }) => {
            clearStates();
            AsyncStorage.setItem('@acessToken', jwt);
            const { id, username } = user;
            console.log(id);
            console.log(username);
            navigation.replace('Home');
        }
    });
    // Função para botão de login
    const onLoginPress = async (ev) => {
        ev.preventDefault();

        setLoading(true);
        LoginUserMutation({
            variables: {
                input:
                {
                identifier: login,
                password,
                }
            },
        });
    };

    // Renderizando uma mensagem de erro
    function renderErrorMsg() {
        if (err) return <Text style={styles.errorStyle}>{err}</Text>;
    }
    // Renderizando botão de login ou spinner enquanto espera resposta da api
    function renderBtnLogin() {
        if (loading) return <ActivityIndicator size="large" color={Colors.primaryColor} />;
        return (
            <TouchableOpacity
                    style={styles.formBtn}
                    onPress={onLoginPress}
            >
                    <Text style={styles.formTextBtn}>login</Text>
            </TouchableOpacity>
        );
    }

    return ( 
    <View style={[StyleSheet.absoluteFill, styles.container]}> 
        <SvgComponent
            height='100'
            width='100'
            coordX='55'
            coordY='55'
            radiusX='40'
            radiusY='40'
            strokeWidth='5'
        />
        <View style={styles.formContainer}>
            <Input
                placeholder='Login' 
                placeholderTextColor='black'
                keyboardType='default'
                autoCapitalize='none'
                value={login}
                onChangeText={setLogin}
            />
            <Input
                placeholder='Senha' 
                placeholderTextColor='black'
                secureTextEntry
                keyboardType='default'
                autoCapitalize='none'
                value={password}
                onChangeText={setPassword}
            />
            {renderErrorMsg()}
            {renderBtnLogin()}
        </View>
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: Colors.backgroundColor
    },
    formContainer: {
        width: '80%',
        maxWidth: 400,
        maxHeight: 400,
        padding: 20,            
        borderRadius: 40,
        backgroundColor: 'white',
        marginTop: 10
    },
    formBtn: {
        paddingVertical: 10,
        marginTop: 5,
        alignContent: 'center',
        backgroundColor: Colors.accentColor,
        width: '30%',
        borderRadius: 20
    },
    formTextBtn: {
        alignSelf: 'center',
        fontSize: 16,
        color: 'white'
    },
    errorStyle: {
        color: 'red'
    }
});

export default LoginScreen;
