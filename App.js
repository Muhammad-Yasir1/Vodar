import {Provider} from 'react-redux';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import configureStore from './src/reducers/configureStore';
import {StatusBar} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Details from './src/screens/Details/details.js';
import Home from './src/screens/Home/home.js';
import Search from './src/screens/Search/search.js';
import Camera from './src/screens/Camera/camera';
import Splash from './src/screens/public/SplashScreen';
import Login from './src/screens/public/LoginScreen';
import Register from './src/screens/public/RegisterScreen';
import SpeechRecognition from './src/screens/Search/speechrecognition';
import ProfileScreen from './src/screens/ProfileScreen/ProfileScreen';
import {useReduxDevToolsExtension} from '@react-navigation/devtools';

const store = configureStore();

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  const navigationRef = React.useRef();
  useReduxDevToolsExtension(navigationRef);

  return (
    <Provider store={store}>
      <StatusBar backgroundColor="#05354A" />
      <NavigationContainer ref={navigationRef}>
        <Drawer.Navigator
          drawerPosition={'right'}
          drawerStyle={{
            backgroundColor: '#05354A',
            width: 240,
            color: '#FFF',
          }}
          drawerContentOptions={{
            activeTintColor: '#FFF',
            inactiveTintColor: '#999',
          }}
          initialRouteName="Login" //Login
          screenOptions={{
            headerShown: false,
          }}>
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Search" component={Search} />
          <Drawer.Screen name="Details" component={Details} />
          <Drawer.Screen name="Camera" component={Camera} />
          <Drawer.Screen name="Login" component={Login} />
          <Drawer.Screen name="Register" component={Register} />
          <Drawer.Screen name="Splash" component={Splash} />
          <Drawer.Screen name="SpeechRecognition" component={SpeechRecognition} />
          <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
