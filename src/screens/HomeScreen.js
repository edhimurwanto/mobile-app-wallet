import React, { Component } from 'react';
import { View, StyleSheet, Text, AsyncStorage, Button } from 'react-native';
import MyHeader from '../components/Header';
import { colors } from '../styles/colors';
import { connect } from 'react-redux';
import { findAllCustomers } from '../actions/customer';
import { ListItem } from 'react-native-elements';

class HomeScreen extends Component {

    componentDidMount() {
        this.reload();
    }

    reload = async () => {
        const value = await AsyncStorage.getItem('USER');
        console.log("COOKIE", value);
        return await this.props.findAllCustomers();
    }

    onSelect = async (data) => {
        
        this.props.navigation.navigate('Profile', {data});
    }

    onLogOut = async () => {
        console.log("LOGOUT CLICKED", this.props);
        
        await AsyncStorage.removeItem('USER');
        this.props.navigation.navigate('Login');
    }

    render() {
        
        return (
            <View style={styles.container}>
                <MyHeader navigation={this.props.navigation} title={'Home'} />
                {
                    this.props.customers.map((item, i) => {
                        return (
                            <ListItem
                                key={i}
                                title={item.fullname}
                                bottomDivider
                                chevron
                                onPress={()=> this.onSelect(item)}
                            />
                        )
                    })
                }
                <Button title="Log out" onPress={this.onLogOut}/>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.findAllCustomers.loading,
        customers: state.findAllCustomers.data,
        error: state.findAllCustomers.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        findAllCustomers: () => dispatch(findAllCustomers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
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