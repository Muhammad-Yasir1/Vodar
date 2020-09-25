import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import BottomBar from '../../components/BottomBar';
import Header from '../../components/Header.js';
import {colors} from '../../utils/constant';
import AsyncStorage from '@react-native-community/async-storage';
import {searchWord} from '../../utils/api';

const _onPressSearchWord = async (word) => {
  const userDetails = JSON.parse(await AsyncStorage.getItem('userDetails'));
  const lang = userDetails.source_language;
  const wordToSearch = "gate" ;
  console.log('lang', lang);
  //const { navigate } = this.props.navigation;
  searchWord(lang, wordToSearch)
    .then(async (response) => {
      //console.log('response', response);
      if (response.success) {
        const result = response.data.words.data[0].name.en;
        console.log('result', result);
        
        this.props.navigation.navigate('Details');
        // if (response.data.words.data.length == 0) {
        //   navigate('Details')
        // }
        // else{
        //   navigate('SpeechRecognition')
        // }
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

const Search = ({navigation}) => {
  return (
    <>
      <SafeAreaView style={{flex: 0, backgroundColor: colors.backgroundTop}} />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.mainView}>
          <LinearGradient
            // end={{x: 1, y: 1}}
            colors={['#05354A', '#0F1628']}
            style={styles.mainView}>
            <Header navigation={navigation} home={false} />

            <View style={styles.mainView}>
              <View style={styles.main}>
                <Text style={styles.searchlabel}>search</Text>
                <View style={styles.inputview}>
                  <TextInput
                    style={styles.input}
                    placeholder="What do you want to search?"
                    placeholderTextColor="rgba(255,255,255,0.6)"
                  />
                  <TouchableOpacity style={styles.cross}>
                    <Text style={styles.crosstxt}>x</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  // onPress={() => {
                  //   navigation.navigate('Details');
                  // }}
                  onPress={_onPressSearchWord}
                  style={styles.btntou}>
                  <Image
                    style={styles.btn}
                    source={require('../../../images/Rectangle9.png')}
                  />
                  <Image
                    style={styles.btntxt}
                    source={require('../../../images/Search.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <BottomBar active={2} navigation={navigation} />
          </LinearGradient>
        </View>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  mainView: {flex: 1},
  safeArea: {flex: 1, backgroundColor: colors.backgroundBottom},
  main: {padding: 30},
  searchlabel: {color: 'rgba(255,255,255,0.3)', textAlign: 'left'},
  inputview: {
    borderBottomColor: 'rgba(255,255,255,0.3)',
    borderBottomWidth: 2,
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {flex: 1, fontSize: 25, padding: 0, color: 'rgba(255,255,255,0.6)'},
  cross: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.3)',
    width: 20,
    height: 20,
  },
  crosstxt: {
    fontSize: 15,
    marginBottom: 3,
    textAlign: 'center',
    color: 'rgba(255,255,255,0.3)',
  },
  btntou: {alignSelf: 'center', marginTop: 10},
  btn: {width: 100, height: 60, resizeMode: 'contain'},
  btntxt: {
    position: 'absolute',
    left: 25,
    top: 15,
    width: 50,
    height: 30,
    resizeMode: 'contain',
  },
});
export default Search;
