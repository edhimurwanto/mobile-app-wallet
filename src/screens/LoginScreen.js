import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, AsyncStorage } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { colors } from '../styles/colors';
import { loginService } from '../services/AuthService';
import { getCookies } from '../services/CookieService';

export default class LoginScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    componentDidUpdate(){
        this.render();
    }
    onSubmit = async (form) => {
        const response = await loginService(form);
        
        if(!response.ok) alert('Invalid login credentials.');
        else {
            const value = await getCookies(response);
            console.log(value.foo);
            
            await AsyncStorage.setItem('USER', value.foo);
            this.props.navigation.navigate('HomeContainer');
        }
    }

    render() {

        return (
            <View style={styles.container}>
                <View style={styles.card}>
                    <Image style={styles.image} source={require('../../assets/react-icon.svg.png')} />
                    <TextInput style={styles.input} placeholder="Email" textContentType='emailAddress' onChangeText={(text) => this.setState({ email: text })} />
                    <TextInput style={styles.input} placeholder="Password" secureTextEntry={true}  onChangeText={(text)=> this.setState({password: text})}/>
                    <TouchableHighlight style={styles.button} onPress={() => this.onSubmit(this.state)} >
                        <Text style={styles.font}>
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
        backgroundColor: colors.backgroundDark,
    },
    card: {
        flexDirection: 'column',
        justifyContent: 'center',
        height: 460,
        backgroundColor: colors.backgroundDark,
        borderRadius: 6,
        margin: 20,
        borderColor: colors.buttonPadding,
        borderWidth: 1.5
    },
    input: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        borderColor: colors.buttonPadding,
        color: '#ffffff',
        borderWidth: 1,
        borderRadius: 6,
        height: 40,
        paddingLeft: 15

    },
    button: {
        flexDirection: 'column',
        borderRadius: 6,
        backgroundColor: colors.buttonPadding,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
        color: colors.fontDark
    },
    image: {
        width: 200,
        height: 200,
        alignSelf: 'center'
    },
    font: {
        color: colors.fontDark,
        fontSize: 18,
    }
});
