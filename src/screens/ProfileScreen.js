import React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import HeaderStack from '../components/HeaderStack';
import { colors } from '../styles/colors';

export default class ProfileScreen extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        const data = this.props.navigation.getParam('data');

        return (
            <View style={styles.container}>
                <HeaderStack navigation={this.props.navigation} title={'Profile'}/>
                <View style={styles.card}>
                    <Text style={{alignItems: 'center'}}>
                        {data.fullname}
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundDark
    },
    card: {
        flexDirection: 'column',
        justifyContent: 'center',
        height: 460,
        backgroundColor: colors.backgroundDark,
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
