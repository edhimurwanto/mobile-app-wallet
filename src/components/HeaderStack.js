import React from 'react';
import { Header } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import { colors } from '../styles/colors';

const HeaderStack = props => {
    return (
        <Header
            // backgroundImage={require('../../assets/react-icon.svg.png')}
            leftComponent={<Icon
                color='#fff'
                name='chevron-left'
                onPress={() => props.navigation.goBack()}
            />}
            centerComponent={{
                text: props.title,
                style: { color: '#fff', fontWeight: 'bold', alignSelf: 'flex-start' }
            }}
            containerStyle={{ backgroundColor: colors.backgroundDark }}
            statusBarProps={{ barStyle: 'light-content' }}
        />
    );
};

export default HeaderStack;