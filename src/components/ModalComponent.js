import React, { useState } from 'react'; 
import { Modal, StyleSheet, Text, View, TouchableOpacity } from 'react-native'; 

import { Input } from '../components/commons';
import Colors from '../assets/colors/Colors';

// Componente Modal para criação de registros 
/// Aparece quando o floating button da Tela de 'Meus Registros' for clicado
const ModalComponent = ({ modalVisible, onClose }) => { 
    // Formulário para criar registro
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    
    return ( 
        <Modal 
            visible={modalVisible}
            onRequestClose={onClose}
            animationType='slide'
            transparent
        >
            <View
                style={styles.modalView}
            >
                <Text style={styles.textFormat}>Novo Registro</Text>
                <Input
                    placeholder='Digite seu nome aqui'
                    placeholderTextColor='black'
                    keyboardType='default'
                    value={name}
                    onChangeText={setName}
                    ownContainerStyle={styles.containerNameInput}
                />
                    <View style={{ flexDirection: 'row' }}>
                        <Input
                            placeholder='03/03/2021' 
                            requiresLabel
                            label='Data:'
                            placeholderTextColor='black'
                            keyboardType='default'
                            value={date}
                            ownContainerStyle={styles.containerInput}
                            ownInputStyle={styles.borderInput}
                            onChangeText={setDate}
                        />
                        <Input
                            placeholder='10:00' 
                            placeholderTextColor='black'
                            requiresLabel
                            label='Horário'
                            keyboardType='default'
                            ownContainerStyle={styles.containerInput}
                            ownInputStyle={styles.borderInput}
                            value={time}
                            onChangeText={setTime}
                        />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity
                            style={[styles.formBtn, { backgroundColor: Colors.accentColor }]}
                        >
                            <Text style={[styles.formTextBtn, { color: 'white' }]}>Salvar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.formBtn, { backgroundColor: 'white' }]}
                            onPress={onClose}
                        >
                            <Text style={[styles.formTextBtn, { color: Colors.accentColor }]}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalView: {
        backgroundColor: 'white',
        marginTop: 'auto',
        borderRadius: 20, 
        padding: 20, 
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 15
    },
    textFormat: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 10
    },
    containerNameInput: {
        margin: 5,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 20,
        width: '100%'
    },
    containerInput: {
        width: '50%',
        margin: 5,
    },
    borderInput: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 20,
    },
    formBtn: {
        padding: 10,
        marginHorizontal: 10,
        alignContent: 'center',
        borderWidth: 1,
        borderColor: Colors.accentColor,
        width: '40%',
        borderRadius: 20
    },
    formTextBtn: {
        alignSelf: 'center',
        fontSize: 16,
    },
});

export default ModalComponent;
