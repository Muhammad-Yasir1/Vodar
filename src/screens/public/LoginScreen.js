import React, {useState, useEffect} from 'react';
// import {connect} from 'react-redux';
import {useDispatch, useSelector} from 'react-redux';

import {
  Image,
  SafeAreaView,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-community/async-storage';
import CustomInput from '../../components/Input';
import CustomButton from '../../components/Button';
import {colors} from '../../utils/constant';
// import {setLoginSuccess} from '../../actions/login';
// import Authentication from '../../modules/authentication';
import {login} from '../../utils/api';
import I18n from '../../locales/';

const LoginScreen = ({navigation}) => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [loader, setLoader] = useState(false);
  const [errors, setErrors] = useState(false);
  const logged_in = useSelector((state) => state.login.logged_in);
  const dispatch = useDispatch();

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      setLoader(true);
      setErrors(false);
      setPassword('');
      let userToken;
      console.log('logged_in', logged_in);
      if (!logged_in) {
        // return;
        try {
          userToken = await AsyncStorage.getItem('userToken');
          console.log('userToken', userToken);
          navigation.navigate('Home');
          // this.
        } catch (e) {
          // Restoring token failed
        }
        // userToken && navigation.navigate('Home');
      } else {
         navigation.navigate('Home');
      }
      setLoader(false);
      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      // dispatch({type: 'RESTORE_TOKEN', token: userToken});
    };

    bootstrapAsync();
  }, [logged_in]);

  const _onPressSignUp = () => {
    console.log('navigating to Sign Up');
    navigation.navigate('SignUp');
  };
  const _onPressLogin = () => {
    console.log('email', email);

    // return;
    if (!email || !password) {
      setErrors(I18n.t('Please enter a valid email and password'));
      // <Text>{I18n.t('my_favorites')}</Text>
      return;
    }
    setLoader(true);
    login(email, password) //tester1@test.com test2020
      .then(async (response) => {
        console.log('response', response);
        if (response.success.token) {
          await AsyncStorage.setItem('userToken', response.success.token);
          //  AsyncStorage.setItem('@User:Profile', JSON.stringify(user.toJS()));
          await AsyncStorage.setItem(
            'userDetails',
            JSON.stringify(response.success.details),
          );
          await dispatch({
            type: 'SET_LOGIN_SUCCESS',
            payload: response.success,
          });
          setLoader(false);
          navigation.navigate('Home');
          // this.props.setLoginSuccess(response.success);
          // this.setState(
          //   {
          //     error_message: 'Something went wrong please try again later',
          //     loader: false,
          //   },
          //   navigation.navigate('Home'),
          // );
        }
        console.log('logged in successfully');
      })
      .catch((error) => {
        // this.setState({
        //   error_message: 'E-posta/şifre kombinasyonu hatalıdır.',
        //   loader: false,
        // });
        setErrors('You have entered an invalid username or password.');
        console.log('logged error', error);
        setLoader(false);
      })
      .finally(() => {
        // this.setState({
        //   error_message: 'kllj.',
        //   loader: false,
        // });
      });
  };

  const _onTextChange = (value, key) => {
    key === 'email' ? setEmail(value) : setPassword(value);
  };

  return (
    <>
      <SafeAreaView style={{flex: 0, backgroundColor: colors.backgroundTop}} />
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          style={{backgroundColor: colors.background}}
          keyboardShouldPersistTaps="always">
          <LinearGradient
            colors={[colors.backgroundTop, colors.backgroundBottom]}>
            {loader ? (
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginVertical: '50%',
                  marginHorizontal: 20,
                }}>
                <Image
                  source={require('../../../images/youlls_new_logo_only.png')}
                  style={styles.logo}
                />
                <ActivityIndicator color={'gray'} size={'large'} />
              </View>
            ) : (
              <React.Fragment>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginVertical: '10%',
                    marginHorizontal: 20,
                  }}>
                  <Image
                    source={require('../../../images/youlls_new_logo_only.png')}
                    style={styles.logo}
                  />
                </View>

                <View style={styles.welcomeView}>
                  <Text style={styles.welcomeText}> Welcome </Text>
                </View>

                <View style={{flex: 2, marginHorizontal: 20}}>
                  <View style={{alignItems: 'center'}}>
                    <CustomInput
                      value={email}
                      textChange={(text) => _onTextChange(text, 'email')}
                      label={'email'}
                      placeholder={'email'}
                      onSubmitEditing={() => {}}
                    />
                    <CustomInput
                      value={password}
                      secureTextEntry={true}
                      textChange={(text) => _onTextChange(text, 'password')}
                      label={'password'}
                      placeholder={'password'}
                      onSubmitEditing={() => _onPressLogin()}
                    />
                  </View>
                  {errors && (
                    <View style={styles.lineView}>
                      <Text style={styles.error}>{errors}</Text>
                    </View>
                  )}
                  {loader ? (
                    <ActivityIndicator
                      color={colors.lightFontColor}
                      size={'large'}
                    />
                  ) : (
                    <CustomButton
                      title={'Sign in ➔'}
                      onPress={_onPressLogin}
                      backgroundColor="#38A4C6"
                      alignSelf="flex-end"
                    />
                  )}
                </View>

                {!loader && (
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginHorizontal: 30,
                      marginTop: 30,
                    }}>
                    <TouchableOpacity
                      onPress={_onPressSignUp}
                      style={{
                        margin: 6,
                        height: 35,
                      }}>
                      <Text style={styles.lightColor}> Sign up </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        margin: 6,
                        height: 35,
                      }}>
                      <Text style={styles.lightColor}> Forgot Password </Text>
                    </TouchableOpacity>
                  </View>
                )}
                <Text
                  style={{
                    fontSize: 12,
                    paddingHorizontal: 20,
                    marginTop: 25,
                    color: colors.lightFontColor,
                  }}>
                  {' '}
                  This project has been funded with support from the European
                  Commission (Project number: 2017-1-UK01-KA201-036783 ). The
                  information on this application reflects the views only of the
                  authors, and the Commission cannot be held responsible for any
                  use which may be made of.
                </Text>
              </React.Fragment>
            )}
          </LinearGradient>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     logged_in: state.logged_in,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     // spinner: (show) => dispatch(spinner(show)),
//     setLoginSuccess: (email, password) =>
//       dispatch(setLoginSuccess(email, password)),
//   };
// };

const styles = StyleSheet.create({
  line: {borderWidth: 1, borderColor: '#D8D8D8', width: 70, height: 0},
  logo: {height: 140, width: 196.6, resizeMode: 'contain', marginBottom: 20},
  lineView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 40,
  },
  welcomeText: {
    color: colors.lightFontColor,
    fontSize: 36,
    fontFamily: 'Avenir-Heavy',
    marginBottom: 30,
  },
  welcomeView: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginHorizontal: 20,
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: 200,
    width: 350,
  },
  lightColor: {
    color: colors.lightFontColor,
    fontSize: 17,
    fontFamily: 'Avenir-Heavy',
  },
  error: {
    color: colors.error,
    fontSize: 14,
    fontFamily: 'Avenir-Heavy',
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  safeArea: {flex: 1, backgroundColor: colors.backgroundBottom},
});
// export default connect(mapStateToProps, {loginAction})(LoginScreen);
// export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

export default LoginScreen;
