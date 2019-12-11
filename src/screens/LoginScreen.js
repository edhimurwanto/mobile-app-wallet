import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class LoginScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Login Screen!</Text>

                <Button title="Go to Profile" onPress={() => this.props.navigation.navigate('Profile')}>Button</Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
