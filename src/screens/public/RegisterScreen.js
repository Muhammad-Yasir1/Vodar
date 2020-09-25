import React, {useState, useEffect} from 'react';
// import {connect} from 'react-redux';
import {useDispatch, useSelector} from 'react-redux';
import {Input} from 'react-native-elements';

import {
  Image,
  SafeAreaView,
  View,
  TextInput,
  Platform,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  KeyboardAvoidingView,

} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-community/async-storage';
import CustomInput from '../../components/Input';
import CustomButton from '../../components/Button';
import {colors} from '../../utils/constant';

import {register} from '../../utils/api';
import I18n from '../../locales/';

const RegisterScreen = ({navigation}) => {
  // const [password, setPassword] = useState('');
  // const [email, setEmail] = useState('');
  const [loader, setLoader] = useState(false);
  // const [lang, setLang] = useState('en');
  // const [errors, setErrors] = useState(false);
  // const logged_in = useSelector((state) => state.login.logged_in);
  const dispatch = useDispatch();

  const _onTextChange = (value, key) => {
    // key === 'email' ? setEmail(value) : setPassword(value);
  };

  const onSubmit = () => {
    console.log('data');
    console.log('data');
    register('tester', 'tester1@test.com', 'uk', 'en', 'de', 'test2020')
      .then(async (response) => {
        console.log('response', response);
        console.log('userToken', response.success.token);
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
        }
        console.log('logged in successfully');
      })
      .catch((error) => {
        if (error.response.data['Validation Error.']) {
          console.log(error.response.data['Validation Error.']);
          //Gets errors from the server api.
        } else {
          console.log('error.response.data', error.response.data);
        }
      })
      .finally(() => {});
  };

  return (
    <>
      <SafeAreaView style={{flex: 0, backgroundColor: colors.backgroundTop}} />
      <SafeAreaView style={styles.safeArea}>
        <KeyboardAvoidingView
          behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
          style={styles.container}>
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
                      marginVertical: '2%',
                      marginHorizontal: 20,
                    }}>
                    <Image
                      source={require('../../../images/youlls_new_logo_only.png')}
                      style={styles.logo}
                    />
                  </View>

                  <View style={styles.welcomeView}>
                    <Text style={styles.welcomeText}>
                      {' '}
                      {I18n.t('Sign Up')}{' '}
                    </Text>
                  </View>

                  <View style={{flex: 2, marginHorizontal: 20}}>
                    <View style={{alignItems: 'center'}}>
                      <Input
                        containerStyle={styles.inputFormContainer}
                        style={styles.input}
                        // onChangeText={(value) => onChange(value)}
                        // value={value}
                        label="Name"
                        placeholder="Enter your name"
                        inputContainerStyle={styles.inputContainer}
                        inputStyle={styles.input}
                        labelStyle={styles.label}
                        name="name"
                        rules={{required: true}}
                        defaultValue=""
                      />
                      {/* <Text> {errors.name?.message}</Text> */}

                      <Input
                        containerStyle={styles.inputFormContainer}
                        style={styles.input}
                        // onChangeText={(value) => onChange(value)}
                        // value={value}
                        label="Email"
                        placeholder="Enter your email"
                        inputContainerStyle={styles.inputContainer}
                        inputStyle={styles.input}
                        labelStyle={styles.label}
                        name="email"
                        defaultValue=""
                      />
                      {/* <Text> {errors.email?.message}</Text> */}

                      <Input
                        containerStyle={styles.inputFormContainer}
                        style={styles.input}
                        // onChangeText={(value) => onChange(value)}
                        // value={value}
                        label="Country"
                        placeholder="Select your country"
                        inputContainerStyle={styles.inputContainer}
                        inputStyle={styles.input}
                        labelStyle={styles.label}
                        autoCapitalize="none"
                        name="country"
                        defaultValue=""
                      />
                      {/* <Text> {errors.country?.message}</Text> */}

                      <Input
                        containerStyle={styles.inputFormContainer}
                        style={styles.input}
                        // onChangeText={(value) => onChange(value)}
                        // value={value}
                        label="Source Language"
                        placeholder="Select your source language"
                        inputContainerStyle={styles.inputContainer}
                        inputStyle={styles.input}
                        labelStyle={styles.label}
                        autoCapitalize="none"
                        name="source_language"
                        defaultValue=""
                      />
                      {/* <Text> {errors.source_language?.message}</Text> */}

                      <Input
                        containerStyle={styles.inputFormContainer}
                        style={styles.input}
                        // onChangeText={(value) => onChange(value)}
                        // value={value}
                        label="Destination Language"
                        placeholder="Select your destination language"
                        inputContainerStyle={styles.inputContainer}
                        inputStyle={styles.input}
                        labelStyle={styles.label}
                        autoCapitalize="none"
                        name="destination_language"
                        defaultValue=""
                      />
                      {/* <Text> {errors.destination_language?.message}</Text> */}

                      <Input
                        containerStyle={styles.inputFormContainer}
                        style={styles.input}
                        // onChangeText={(value) => onChange(value)}
                        // value={value}
                        label="Password"
                        placeholder="password"
                        inputContainerStyle={styles.inputContainer}
                        inputStyle={styles.input}
                        labelStyle={styles.label}
                        secureTextEntry={true}
                        name="password"
                        defaultValue=""
                      />
                      {/* <Text> {errors.password?.message}</Text> */}

                      {/* <Button title="Submit" onPress={handleSubmit(onSubmit)} /> */}
                    </View>
                    {/* {errors && (
                    <View style={styles.lineView}>
                      <Text style={styles.error}>{errors}</Text>
                    </View>
                  )} */}
                    <Text
                      style={{
                        fontSize: 12,
                        paddingHorizontal: 5,
                        marginTop: 5,
                        marginBottom: 15,
                        color: colors.lightFontColor,
                      }}>
                      {' '}
                      CHECKBOX !! This project has been funded with support from
                      the European Commission (Project number:
                      2017-1-UK01-KA201-036783 ). The information on this
                      application reflects the views only of the authors, and
                      the Commission cannot be held responsible for any use
                      which may be made of. I agree with the terms....
                    </Text>
                    {loader ? (
                      <ActivityIndicator
                        color={colors.lightFontColor}
                        size={'large'}
                      />
                    ) : (
                      <CustomButton
                        title={'Submit ➔'}
                        onPress={() => onSubmit()}
                        backgroundColor="#38A4C6"
                        alignSelf="flex-end"
                      />
                    )}
                  </View>

                  {/* {!loader && (
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginHorizontal: 30,
                      marginTop: 30,
                    }}>
                    <TouchableOpacity
                      // onPress={_onPressSignUp}
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
                )} */}
                </React.Fragment>
              )}
            </LinearGradient>
          </ScrollView>
        </KeyboardAvoidingView>
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
  logo: {height: 105, width: 147.45, resizeMode: 'contain', marginBottom: 0},
  lineView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 40,
  },
  welcomeText: {
    color: colors.lightFontColor,
    fontSize: 28,
    fontFamily: 'Avenir-Heavy',
    marginBottom: 10,
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
  label: {
    fontSize: 10,
    color: colors.lightFontColor,
    fontFamily: 'Avenir',
  },
  input: {
    fontSize: 12,
    color: colors.lightFontColor,
  },
  inputFormContainer: {
    width: '95%',
    marginTop: 3,
  },
  inputContainer: {
    height: 30,
  },
  safeArea: {flex: 1, backgroundColor: colors.backgroundBottom},
  container: {
    flex: 1,
  },
});
// export default connect(mapStateToProps, {loginAction})(LoginScreen);
// export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

export default RegisterScreen;
