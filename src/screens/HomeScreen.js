import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';

export default class HomeScreen extends Component {
    constructor(props){
        super(props)
    }

    goBack = () => {
        
        this.props.navigation.goBack(null);
        return true;
    }

    render(){
        
        return (
            <View style={styles.container}>
                <TouchableHighlight style={styles.button} onPress={this.goBack }>
                        <Text style={{ color: '#fff' }}>
                            Back
                    </Text>
                    </TouchableHighlight>
            </View>
        )
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