import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from '../screens/LoginScreen';
import HomeContainer from '../screens/HomeContainer';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';

const AppStackNavigator = createStackNavigator({
    Login: LoginScreen,
    HomeContainer: HomeContainer,

},
    {
        initialRouteName: 'Login',
        headerMode: 'none'
    });

const AppSwitchNavigator = createSwitchNavigator({
    Login: LoginScreen,
    HomeContainer: HomeContainer,
    Register: RegisterScreen,
    Home: HomeScreen

}, {
    initialRouteName: 'Login'
});

export default createAppContainer(AppStackNavigator);