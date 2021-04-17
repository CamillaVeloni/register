import React from 'react'; 
import { View, Text, StyleSheet } from 'react-native'; 
import Svg, { Ellipse } from 'react-native-svg';
import Colors from '../assets/colors/Colors';

const SplashScreen = () => { 
    return ( 
    <View style={[StyleSheet.absoluteFill, styles.container]}> 
        <Svg height='150' width='300'>
            <Ellipse
                cx='150'
                cy='75'
                rx='70'
                ry='70'
                stroke={Colors.primaryColor}
                strokeWidth='4'
            />
            <Ellipse
                cx='145'
                cy='70'
                rx='70'
                ry='70'
                stroke={Colors.primaryColor}
                strokeWidth='1'
            />
        </Svg>
        <Text style={styles.title}>Register</Text>
        <Text style={styles.subtitle}>Acess Control</Text>
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
        fontSize: 50,
        fontWeight: 'bold'
    },
    subtitle: {
        color: Colors.primaryColor,
        fontSize: 20
    }
});

export default SplashScreen;
