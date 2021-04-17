import React from 'react'; 
import { Modal, StyleSheet, Text, View } from 'react-native'; 

// Componente Modal para criação de registros 
/// Aparece quando o floating button da Tela de 'Meus Registros' for clicado
const ModalComponent = ({ modalVisible, onClose }) => { 
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
                <Text style={{ ...styles.textFormat, fontWeight: 'bold' }}>Novo Registro</Text>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalView: {
        height: '40%',
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
        fontSize: 16
    }
});

export default ModalComponent;
