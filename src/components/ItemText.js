import React from 'react'; 
import { Text, StyleSheet } from 'react-native'; 

// Componente usado no ListItem para agrupar as informações
const ItemText = ({ infoText, dinamicText }) => { 
    return ( 
    <Text style={styles.itemText}>
        <Text style={{ fontWeight: 'bold' }}>{infoText}: </Text>
        <Text>{dinamicText}</Text>
    </Text>
    );
};

const styles = StyleSheet.create({
    itemText: {
        marginLeft: 10,
        fontSize: 16
    }
});

export default ItemText;
