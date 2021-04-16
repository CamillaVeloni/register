import React from 'react'; 
import { View, Text, StyleSheet } from 'react-native'; 
import ItemText from './ItemText';

const ListItem = ({ name, dayRegistered, timeRegistered, role }) => { 
    return ( 
        <View style={styles.itemContainer}>
            <ItemText
                firstText={role}
                segText={name}
            />
            <ItemText
                firstText={'Data'}
                segText={dayRegistered}
            />
            <ItemText
                firstText={'Horário'}
                segText={timeRegistered}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        height: 125,
        marginHorizontal: 15,
        marginVertical: 10,
        borderRadius: 15,
        elevation: 2,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        justifyContent: 'space-around',
    }
});

export default ListItem;
