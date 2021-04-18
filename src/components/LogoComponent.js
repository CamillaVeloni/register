import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Ellipse } from 'react-native-svg';

import Colors from '../assets/colors/Colors';

// Elemento SVG ~~ ellipse
// Colocado tanto na tela login e na tela splash 
const SvgComponent = ({ 
    height, 
    width, 
    coordX, 
    coordY, 
    radiusX, 
    radiusY,
    strokeWidth,
    ownTitleStyle,
    ownSubtitleStyle
}) => {
    const fixedCoordX = Number(coordX) - 5;
    const fixedCoordY = Number(coordY) - 3;
    const fixedRadiusX = Number(radiusX) - 5;

    return (
        <View style={{ alignItems: 'center' }}>
            <Svg height={height} width={width}>
                <Ellipse
                    cx={coordX}
                    cy={coordY}
                    rx={radiusX}
                    ry={radiusY}
                    stroke={Colors.primaryColor}
                    strokeWidth={strokeWidth}
                />
                <Ellipse
                    cx={fixedCoordX}
                    cy={fixedCoordY}
                    rx={fixedRadiusX}
                    ry={radiusY}
                    stroke={Colors.primaryColor}
                    strokeWidth='1'
                />
            </Svg>
            <Text style={[styles.title, ownTitleStyle]}>Register</Text>
            <Text style={[styles.subtitle, ownSubtitleStyle]}>Acess Control</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        color: 'white',
        fontSize: 23,
        fontWeight: 'bold'
    },
    subtitle: {
        color: Colors.primaryColor,
        fontSize: 16
    },
});

export default SvgComponent;
