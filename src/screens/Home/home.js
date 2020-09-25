import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  Button,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../../components/Header.js';
import BottomBar from '../../components/BottomBar';
import {colors} from '../../utils/constant';
import AsyncStorage from '@react-native-community/async-storage';
import {searchWord} from '../../utils/api';

//source_language
const _onPressSearchWord = async (word) => {
  const userDetails = JSON.parse(await AsyncStorage.getItem('userDetails'));
  const lang = userDetails.source_language;
  const wordToSearch = 'ball';
  //console.log('lang', lang);
  searchWord(lang, wordToSearch)
    .then(async (response) => {
      //console.log('response', response);
      if (response.success) {
        const result = response.data.words;

        console.log('result', result);
      }
      console.log('logged in successfully');
    })
    .catch((error) => {
      // setErrors('You have entered an invalid username or password.');

      console.log('logged error', error);
      // setLoader(false);
    })
    .finally(() => {
      // this.setState({
      //   error_message: 'kllj.',
      //   loader: false,
      // });
    });
};
const Home = ({navigation}) => {
  return (
    <>
      <SafeAreaView style={{flex: 0, backgroundColor: colors.backgroundTop}} />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.mainView}>
          <LinearGradient
            // end={{x: 1, y: 1}}
            colors={[colors.backgroundTop, colors.backgroundBottom]}
            style={styles.mainView}>
            <Header navigation={navigation} home={false} />
            <View style={styles.mainView}>
              <View style={styles.main}>
                <Image
                  style={styles.wave}
                  source={require('../../../images/EQ.png')}
                />
              </View>

              <Text style={styles.text1}>What would you like to search ?</Text>

              <Text style={styles.text2}>Go ahead, {'\n'} I'm listening.</Text>
              <View style={{marginVertical: 40, fontSize: 30}}>
                <Button
                  onPress={_onPressSearchWord}
                  title="<< Search Word 'gate' >> "
                  color={colors.orange}
                  accessibilityLabel="Learn more about this purple button"
                />
              </View>
            </View>

            <BottomBar active={0} navigation={navigation} />
          </LinearGradient>
        </View>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  mainView: {flex: 1},
  safeArea: {flex: 1, backgroundColor: colors.backgroundBottom},
  wave: {width: '100%', resizeMode: 'contain'},
  main: {padding: 20, justifyContent: 'center', alignItems: 'center'},
  text1: {
    textAlign: 'center',
    paddingHorizontal: 50,
    lineHeight: 40,
    fontSize: 30,
    color: '#CCC',
    marginTop: 30,
  },
  text2: {
    textAlign: 'center',
    paddingHorizontal: 30,
    lineHeight: 40,
    fontSize: 30,
    color: '#CCC',
    marginTop: 30,
  },
});
export default Home;
