import React, { useState } from 'react'; 
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'; 
import { useMutation } from '@apollo/client';

import { LOGIN_MUTATION } from '../graphql/requests';
import { Input } from '../components/commons';
import SvgComponent from '../components/LogoComponent';
import Colors from '../assets/colors/Colors';

// Tela login
// Componentes para ele: LogoComponent 
const LoginScreen = ({ navigation }) => { 
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState(false);

    const [LoginUserMutation] = useMutation(LOGIN_MUTATION, {
        onError: err => {
            console.log(err.graphQLErrors[0].message);
            setErr(true);
        },
        onCompleted: (data) => {
            setLogin('');
            setPassword('');
            setErr(false);
            console.log(data);
        }
    });

    const onLoginPress = async (ev) => {
        ev.preventDefault();
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
    function renderErrorMsg() {
        return <Text style={styles.errorStyle}>Algo deu errado, tente outra vez mais tarde.</Text>;
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
            {
                err ? renderErrorMsg() : null
            }
            <TouchableOpacity
                style={styles.formBtn}
                onPress={onLoginPress}
            >
                <Text style={styles.formTextBtn}>login</Text>
            </TouchableOpacity>
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
