import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from '../screens/LoginScreen';
import HomeContainer from '../screens/HomeContainer';

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
}, {
    initialRouteName: 'Login'
});



const AppNavigator  = createAppContainer(AppStackNavigator);

export default AppNavigator;