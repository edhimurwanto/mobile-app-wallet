import React from 'react';
import { SafeAreaView, View, Image, Text, StyleSheet, AsyncStorage } from 'react-native';
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
import { DrawerItems, createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { colors } from '../styles/colors';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { Icon } from 'react-native-elements';
import LoginScreen from '../screens/LoginScreen';


const CustomDrawerComponent = (props) => {
    
    return (
        <SafeAreaView>
            <View style={{ justifyContent: 'center', height: 180, backgroundColor: colors.backgroundDark }}>
                <Image source={require('../../assets/react-icon.svg.png')} style={{ height: 120, width: 120, borderRadius: 60 }} />
            </View>
            <ScrollView>
                <DrawerItems {...props} />
            </ScrollView>
        </SafeAreaView>
    )
}

const LoginSwitch = createSwitchNavigator({
    Login: LoginScreen,
})

const AppDrawerNavigator = createDrawerNavigator({
    Home: HomeScreen,
    Settings: SettingsScreen,
    Profile: ProfileScreen,
    LoginSwitch,
}, {
    drawerPosition: 'left',
    drawerType: 'slide',
    contentComponent: CustomDrawerComponent
});

export default createAppContainer(AppDrawerNavigator);

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