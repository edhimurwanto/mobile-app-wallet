import React from 'react';
import { SafeAreaView, View, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { DrawerItems, createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import { colors } from '../styles/colors';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ProfileScreen from '../screens/ProfileScreen';

const CustomDrawerComponent = (props) => {
    return (
        <SafeAreaView>
            <View style={{ justifyContent: 'center', height: 180, backgroundColor: colors.backgroundDark}}>
                <Image source={require('../../assets/react-icon.svg.png')} style={{ height: 120, width: 120, borderRadius: 60 }} />
            </View>
            <ScrollView>
                <DrawerItems {...props} />
            </ScrollView>
        </SafeAreaView>
    )
}

const AppDrawerNavigator = createDrawerNavigator({
    Home: HomeScreen,
    Settings: SettingsScreen,
    Profile: ProfileScreen
}, {
    drawerPosition: 'left',
    drawerType: 'slide',
    contentComponent: CustomDrawerComponent
});

export default createAppContainer(AppDrawerNavigator);