import React from 'react'; 
import { Text, StyleSheet } from 'react-native'; 

const ItemText = ({ firstText, segText }) => { 
    return ( 
    <Text style={styles.itemText}>
        <Text style={{ fontWeight: 'bold' }}>{firstText}: </Text>
        <Text>{segText}</Text>
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
