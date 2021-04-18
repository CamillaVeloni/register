import React from 'react'; 
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'; 

import SvgComponent from '../components/LogoComponent';
import Colors from '../assets/colors/Colors';

// Tela Login
// Componentes para ele: SvgComponent para criar os ellipses
const LoginScreen = ({ navigation }) => { 
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
            <TextInput
                placeholder='Login' 
                style={styles.formInput}
                placeholderTextColor='black'
            />
            <TextInput
                style={styles.formInput}
                placeholder='Senha'
                placeholderTextColor='black'
            />
            <TouchableOpacity
                style={styles.formBtn}
                onPress={() => navigation.replace('Home')}
            >
                <Text style={styles.formTextBtn}>Login</Text>
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
    title: {
        color: 'white',
        fontSize: 23,
        fontWeight: 'bold'
    },
    subtitle: {
        color: Colors.primaryColor,
        fontSize: 16
    },
    formContainer: {
        width: '80%',
        maxWidth: 400,
        maxHeight: 400,
        padding: 20,            
        borderRadius: 40,
        backgroundColor: 'white',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 20
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
    formInput: {
        marginHorizontal: 2,
        marginVertical: 5,
    }
});

export default LoginScreen;
