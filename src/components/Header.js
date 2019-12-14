import React from 'react';
import { Header } from 'react-native-elements';

import HamburgerMenu from './HamburgerMenu';
import { ImageBackground } from 'react-native';
import { colors }from '../styles/colors';

const MyHeader = props => {
    
    return (
        <Header
            // backgroundImage={require('../../assets/react-icon.svg.png')}
            leftComponent={<HamburgerMenu navigation={props.navigation} />}
            centerComponent={{
                text: props.title,
                style: { color: '#fff', fontWeight: 'bold', alignSelf: 'flex-start' }
            }}
            containerStyle={{ backgroundColor: colors.backgroundDark }}
            statusBarProps={{ barStyle: 'light-content' }}
        />
    );
};

export default MyHeader;