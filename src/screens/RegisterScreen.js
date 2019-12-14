import React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

export default class RegisterScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <View style={styles.container}>
                <View style={styles.card}>
                    <TouchableHighlight style={styles.button} onPress={() => { this.props.navigation.navigate('Login') }}>
                        <Text style={{ color: '#fff' }}>
                            Sign in
                    </Text>
                    </TouchableHighlight>
                </View>
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
    card: {
        flexDirection: 'column',
        justifyContent: 'center',
        height: 460,
        backgroundColor: '#f3f3f3',
        borderRadius: 6,
        margin: 20
    },
    input: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        borderColor: '#69c1cc',
        color: 'black',
        borderWidth: 1,
        borderRadius: 6,
        height: 40,
        paddingLeft: 15

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
