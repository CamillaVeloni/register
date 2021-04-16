import React from 'react'; 
import { HeaderButton } from 'react-navigation-header-buttons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../assets/colors/Colors';

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

export default DefaultHeaderBtn;
