import React from 'react'; 
import { HeaderButton } from 'react-navigation-header-buttons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Colors from '../../assets/colors/Colors';

// Componente Reusável para o uso do react-navigation-header-buttons
const DefaultHeaderBtn = props => { 
    return ( 
    <HeaderButton 
      {...props} 
      IconComponent={Icon} 
      iconSize={25}
      color={Colors.accentColor}
    />
  );
};

export { DefaultHeaderBtn };
