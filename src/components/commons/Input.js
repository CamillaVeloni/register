import React from 'react'; 
import { View, Text, TextInput, StyleSheet } from 'react-native'; 

// Componente reusável para o input
const Input = props => { 
    return ( 
     <View style={props.ownContainerStyle}> 
        {props.requiresLabel && (
            <Text style={[styles.label, props.ownLabelStyle]}>{props.label}</Text>
        )}
        <TextInput 
            {...props}
            style={[styles.input, props.ownInputStyle]}
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
