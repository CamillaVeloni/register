import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { DefaultHeaderBtn } from './commons';

/// Lógica do botão menu do drawer
/// Colocada tanto na tela Register como na tela Dashboard
/// HeaderButtonComponent é um componente reusável
const DrawerMenuBtn = ({ onPress }) => {
    return (
        <HeaderButtons HeaderButtonComponent={DefaultHeaderBtn}>  
                <Item
                    title='Menu'
                    iconName='menu'
                    onPress={onPress}
                />
        </HeaderButtons>
    );
};

export default DrawerMenuBtn;
