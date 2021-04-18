import React from 'react'; 
import { View, StyleSheet } from 'react-native'; 
import ItemText from './ItemText';

// Componente Item das listas do 'Dashboard' e do 'Meus Registros'
const ListItem = ({ name, dayRegistered, timeRegistered, role }) => { 
    const TEXT_DAY = 'Data';
    const TEXT_TIME = 'Horário';

    return ( 
        <View style={styles.itemContainer}>
            <ItemText
                infoText={role}
                dinamicText={name}
            />
            <ItemText
                infoText={TEXT_DAY}
                dinamicText={dayRegistered}
            />
            <ItemText
                infoText={TEXT_TIME}
                dinamicText={timeRegistered}
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
