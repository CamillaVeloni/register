import React, { useState, useEffect } from 'react'; 
import { Modal, StyleSheet, Text, View, TouchableOpacity, Alert, ActivityIndicator } from 'react-native'; 
import { useMutation } from '@apollo/client';
import moment from 'moment';

import { CREATE_REGISTERED_TIME } from '../graphql/requests';
import Colors from '../assets/colors/Colors';

// Componente Modal para criação de registros 
/// Aparece quando o floating button da Tela de 'Meus Registros' for clicado
const ModalComponent = ({ modalVisible, onClose, userId, userName }) => { 
    const [values, setValues] = useState({
        time: moment().format('HH:MM'),
        date: moment().format('L')
    });

    const [savingRegister, { loading, error }] = useMutation(CREATE_REGISTERED_TIME, {
        variables: {
            input: {
                data: {
                    timeRegistered: new Date().toJSON(),
                    user: userId,
                    published_at: new Date().toJSON(),
                    created_by: userId,
                    updated_by: userId
                }
            }
        },
        onError: (e) => {
            console.log(e);
        },
        onCompleted: () => {
            Alert.alert('Registro salvo com sucesso.', [{ text: 'Okay' }]);
        }
    });

    useEffect(() => {
        if (error) {
            Alert.alert('Algo deu errado, tente outra vez mais tarde.');
        }
    }, [error]);

    if (loading) return <ActivityIndicator size="large" color={Colors.primaryColor} />;

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
                <Text style={[styles.titleFormat, styles.textFormat]}>Novo Registro</Text>
                <View style={styles.containerName}>
                    <Text style={styles.textFormat}>{userName ? userName.toUpperCase() : ''}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={[styles.textFormat, styles.containerInfoTitle]}>Data:</Text>
                    <Text style={[styles.textFormat, styles.containerInfoTitle]}>Horário:</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={[styles.textFormat, styles.containerInfo]}>{values.date}</Text>
                    <Text style={[styles.textFormat, styles.containerInfo]}>{values.time}</Text>
                </View>
                <View style={{ flexDirection: 'row', margin: 5 }}>
                    <TouchableOpacity
                        style={[styles.formBtn, { backgroundColor: Colors.accentColor }]}
                        onPress={e => {
                            e.preventDefault();
                        }}
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
    titleFormat: {
        fontWeight: 'bold',
    },
    textFormat: {
        fontSize: 16,
        marginVertical: 5
    },
    containerInfoTitle: {
        padding: 10,
        marginHorizontal: 10,
        alignContent: 'center',
        width: '40%',
    },
    containerInfo: {
        padding: 15,
        paddingHorizontal: 40,
        margin: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 20,
    },
    containerName: {
        margin: 10,
        padding: 15,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 20,
        width: '100%'
    },
    containerRow: {
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
