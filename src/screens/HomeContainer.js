import React from 'react';
import { StyleSheet } from 'react-native';
import AppDrawer from '../navigations/DrawerNavigation';

export default class HomeContainer extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <AppDrawer />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },

    input: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        color: '#69c1cc',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 6,
        height: 40,

    },
    button: {
        flexDirection: 'column',
        borderRadius: 6,
        backgroundColor: '#69c1cc',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20
    }
});