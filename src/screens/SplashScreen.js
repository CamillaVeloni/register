import React from 'react'; 
import { View, StyleSheet } from 'react-native'; 
import Colors from '../assets/colors/Colors';
import SvgComponent from '../components/LogoComponent';

// Componentes: LogoComponent
const SplashScreen = () => { 
    return ( 
    <View style={styles.container}> 
        <SvgComponent
            height='150'
            width='300'
            coordX='150'
            coordY='75'
            radiusX='70'
            radiusY='70'
            strokeWidth='4'
            ownTitleStyle={{ fontSize: 50 }}
            ownSubtitleStyle={{ fontSize: 20 }}
        />
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', 
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
