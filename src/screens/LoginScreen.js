import React, { useCallback, useEffect, useReducer } from 'react'; 
import { View, StyleSheet, TouchableOpacity, Alert, Text, ActivityIndicator } from 'react-native'; 
import { useMutation } from '@apollo/client';

import { fetchToken } from '../actions/auth';
import { LOGIN_MUTATION } from '../graphql/requests';
import { Input } from '../components/commons';
import SvgComponent from '../components/LogoComponent';
import Colors from '../assets/colors/Colors';

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

// Reducer para formulário de login
const formReducer = (state, action) => { 
    if (action.type === FORM_INPUT_UPDATE) {
      const updatedValues = {
        ...state.inputValues,
        [action.input]: action.value
      };
      const updatedValidities = {
        ...state.inputValidities,
        [action.input]: action.isValid
      };
      let updatedFormIsValid = true;
      for (const key in updatedValidities) {
        updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
      }
      return {
        formIsValid: updatedFormIsValid,
        inputValidities: updatedValidities,
        inputValues: updatedValues
      };
    }
    return state;
};

// Tela login
// Componentes para ele: LogoComponent 
const LoginScreen = ({ navigation }) => { 
    // States para o formulário de login
    const [formState, dispatchFormState] = useReducer(formReducer, { // States para o formulário
        inputValues: {
          email: '',
          password: '',
        },
        inputValidities: {
          email: false,
          password: false
        },
        formIsValid: false
    });

    const inputChangeHandler = useCallback( // Input change para os states do formulário ~~ passando do input!!
        (inputIdentifier, inputValue, inputValidity) => {
          dispatchFormState({
            type: FORM_INPUT_UPDATE,
            value: inputValue,
            isValid: inputValidity,
            input: inputIdentifier
          });
        },
        [dispatchFormState]
      );

    // Usando hook para request ao api
    // onError: quando ocorre algum erro no request, volta o erro (err.graphQLErrors[0].message)
    // onCompleted: volta a data de quando estiver sucedido. 
    // No onCompleted a gente limpa todos os states, seta o token no asyncStorage e navega para tela 'Meus Registros'
    const [login, { loading, error }] = useMutation(LOGIN_MUTATION, {
        variables: {
            input:
            {
            identifier: formState.inputValues.email,
            password: formState.inputValues.password,
            }
        },
        onCompleted: ({ login: { jwt } }) => {
            fetchToken(jwt);
            navigation.navigate('Main');
        }
    });
    
    useEffect(() => {
      if (error) {
            Alert.alert('Algo deu errado, tente outra vez mais tarde.');
        }
    }, [error]);

    // Renderizando botão de login ou spinner enquanto espera resposta da api
    function renderBtnLogin() {
        if (loading) return <ActivityIndicator size="large" color={Colors.primaryColor} />;
        return (
            <TouchableOpacity
                    style={styles.formBtn}
                    onPress={login}
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
                id='email'
                email
                placeholder='Login' 
                placeholderTextColor='black'
                errorText='Digite um e-mail válido'
                autoCapitalize='none'
                returnKeyType='next'
                keyboardType='default'
                required
                onInputChange={inputChangeHandler}
            />
            <Input
                id='password'
                placeholder='Senha' 
                placeholderTextColor='black'
                secureTextEntry
                errorText='Digite uma senha válida'
                autoCapitalize='none'
                keyboardType='default'
                required
                onInputChange={inputChangeHandler}
            />
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
