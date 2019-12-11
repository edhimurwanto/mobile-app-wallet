import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';

const AppStackNavigator = createStackNavigator({
    Login: LoginScreen,
    Profile: ProfileScreen,
    },
    {
        initialRouteName: 'Login',
    });

export default createAppContainer(AppStackNavigator);