import React from 'react'; 
import { View, TextInput, StyleSheet } from 'react-native'; 

// Componente reusável para o input
const Input = props => { 
    return ( 
     <View> 
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
    }
});

export { Input };
