import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Image, View, ImageBackground} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
const SplashScreen = ({navigation}) => {
  const logged_in = useSelector((state) => state.login.logged_in);
  const dispatch = useDispatch();
  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;
      if (!logged_in) {
        console.log('logged_in', logged_in);
        try {
          userToken = await AsyncStorage.getItem('userToken');
          console.log('userToken', userToken);
        } catch (e) {}
        if (userToken) {
          navigation.navigate('Home');
        } else {
          console.log('you should move on');
          navigation.navigate('Login');
        }
      } else {
        navigation.navigate('Home');
      }
    };

    bootstrapAsync();
  }, []);

  return (
    <ImageBackground
      source={require('../../../images/bgsplash.png')}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        resizeMode: 'stretch',
      }}>
      <Image
        source={require('../../../images/youlls_new_logo_only.png')}
        style={{
          height: 140,
          width: 196.6,
          resizeMode: 'contain',
          marginBottom: 20,
        }}
      />
    </ImageBackground>
  );
};

export default SplashScreen;
