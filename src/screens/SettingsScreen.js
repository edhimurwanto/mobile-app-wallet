import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';
import MyHeader from '../components/Header';

export default class SettingsScreen extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <View style={styles.container}>
                <MyHeader navigation={this.props.navigation} title={'Settings'} />
                <Text>SETTINGS</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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