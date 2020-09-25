import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  Button,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../../components/Header.js';
import BottomBar from '../../components/BottomBar';
import { colors } from '../../utils/constant';
import AsyncStorage from '@react-native-community/async-storage';
import { searchWord } from '../../utils/api';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import History from "./History";
import Profile from "./Profile";
import Suggestion from "./Suggestion";
const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
);

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);
const initialLayout = { width: Dimensions.get('window').width };

const ProfileScreen = ({ navigation }) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'profile', title: 'Profile' },
    { key: 'history', title: 'History' },
    { key: 'suggestion', title: 'Suggestion' },
  ]);

  const renderScene = SceneMap({
    profile: Profile,
    history: History,
    suggestion: Suggestion,
  });
  return (
    <>
      <SafeAreaView style={{ flex: 0, backgroundColor: colors.backgroundTop }} />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.mainView}>
          <LinearGradient
            // end={{x: 1, y: 1}}
            colors={[colors.backgroundTop, colors.backgroundBottom]}
            style={styles.mainView}>

            <View style={styles.mainview}>
              <View style={styles.iconview}>
                <TouchableOpacity style={styles.icontou}>
                  <Image style={styles.icon} source={require('../../../images/power.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.icontou}>
                  <Image style={styles.icon} source={require('../../../images/cross.png')} />
                </TouchableOpacity>
              </View>
              <Image style={styles.profileimg} source={require('../../../images/accountimage.png')} />
              <Text style={styles.emailtxt}>dummy@domain.com</Text>


            </View>

            <TabView style={{ backgroundColor: 'red' }}
              renderTabBar={props => (
                <TabBar
                  {...props}
                  inactiveColor={'#FFF'}
                  indicatorStyle={{ backgroundColor: '#333' }}
                  activeColor={'#FFF'}
                  
                  style={{ backgroundColor: '#37A4C3', elevation: 0, }}
                />
              )}
              navigationState={{ index, routes }}
              renderScene={renderScene}
              onIndexChange={setIndex}
              initialLayout={initialLayout}
            />




          </LinearGradient>
        </View>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  mainView: { flex: 1 },
  safeArea: { flex: 1, backgroundColor: colors.backgroundBottom },
  scene: { flex: 1 },
  mainview: { height: 170, paddingHorizontal: 20, paddingBottom: 20, paddingTop: 10 },
  iconview: { flexDirection: 'row', justifyContent: 'space-between', },
  icon: { width: 20, height: 20, resizeMode: 'contain' },
  icontou: { padding: 10, },
  profileimg: { width: 60, height: 60, resizeMode: 'contain', alignSelf: 'center', marginBottom: 15, },
  emailtxt: { fontSize: 15, color: '#FFF', textAlign: 'center' },
});
export default ProfileScreen;
