import React from 'react'; 
import { View, StyleSheet } from 'react-native'; 
import { ActivityIndicator } from 'react-native-paper';

import Colors from '../../assets/colors/Colors';

const Spinner = () => { 
    return ( 
     <View style={styles.loading}> 
         <ActivityIndicator color={Colors.primaryColor} size={50} />
     </View>
    );
};

const styles = StyleSheet.create({
    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ddd'
      }
});

export { Spinner };
