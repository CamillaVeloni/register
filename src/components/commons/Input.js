import React from 'react'; 
import { View, Text, TextInput, StyleSheet } from 'react-native'; 

// Componente reusável para o input
const Input = props => { 
    return ( 
     <View> 
        {props.requiresLabel && (
            <Text style={styles.label}>{props.label}</Text>
        )}
        <TextInput 
            {...props}
            style={styles.input}
        />
     </View>
    );
};

const styles = StyleSheet.create({
    input: {
        marginHorizontal: 2,
        marginVertical: 5,
    },
    label: {
        marginVertical: 5
    }
});

export { Input };
