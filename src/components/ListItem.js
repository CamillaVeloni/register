import React from 'react'; 
import { View, StyleSheet } from 'react-native'; 
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
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 2,
        justifyContent: 'space-around',
    }
});

export default ListItem;
