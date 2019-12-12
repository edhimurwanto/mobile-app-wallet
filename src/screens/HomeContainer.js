import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import HomeScreen from './HomeScreen';

const AppDrawerNavigator = createDrawerNavigator({
    Home: HomeScreen
});

const AppDrawer = createAppContainer(AppDrawerNavigator);

export default class HomeContainer extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <AppDrawer/>
            </View>
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