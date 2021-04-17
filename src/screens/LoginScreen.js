import React from 'react'; 
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'; 
import Svg, { Ellipse } from 'react-native-svg';
import Colors from '../assets/colors/Colors';

const LoginScreen = ({ navigation }) => { 
    return ( 
    <View style={[StyleSheet.absoluteFill, styles.container]}> 
        <Svg height='100' width='100'>
            <Ellipse
                cx='55'
                cy='55'
                rx='40'
                ry='40'
                stroke={Colors.primaryColor}
                strokeWidth='4'
            />
            <Ellipse
                cx='50'
                cy='50'
                rx='40'
                ry='40'
                stroke={Colors.primaryColor}
                strokeWidth='1'
            />
        </Svg>
        <Text style={styles.title}>Register</Text>
        <Text style={styles.subtitle}>Acess Control</Text>
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
    ellipseImage: {
        position: 'absolute',
        width: 100,
        height: 100,
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
