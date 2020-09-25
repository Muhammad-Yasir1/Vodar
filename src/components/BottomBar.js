import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

const BottomBar = ({takePicture, active, navigation}) => {
  return (
    <View style={styles.mainview}>
      {active === 0 ? (
        <TouchableOpacity>
          <Image
            style={styles.circle}
            source={require('../../images/Ellipse8.png')}
          />
          <Image
            style={styles.activemic}
            source={require('../../images/mic_24px.png')}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}
          style={styles.tou}>
          <Image
            style={styles.mic}
            source={require('../../images/mic_24px.png')}
          />
        </TouchableOpacity>
      )}

      {active === 1 ? (
        <TouchableOpacity
          onPress={() => {
            takePicture();
          }}>
          <Image
            style={styles.circle}
            source={require('../../images/Ellipse8.png')}
          />
          <Image
            style={styles.ticon}
            source={require('../../images/center_focus_weak_24px_outlined.png')}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Camera');
          }}
          style={styles.tou}>
          <Image
            style={styles.center}
            source={require('../../images/center_focus_weak_24px_outlined.png')}
          />
        </TouchableOpacity>
      )}
      {active === 2 ? (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Search');
          }}>
          <Image
            style={styles.circle}
            source={require('../../images/Ellipse8.png')}
          />
          <Image
            style={styles.ticon}
            source={require('../../images/title_24px.png')}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Search');
          }}
          style={styles.tou}>
          <Image
            style={styles.center}
            source={require('../../images/title_24px.png')}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  mainview: {
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tou: {width: 60, height: 60, alignItems: 'center', justifyContent: 'center'},
  mic: {width: 27, height: 27, resizeMode: 'contain'},
  center: {width: 35, height: 35, resizeMode: 'contain'},
  circle: {width: 60, height: 60, resizeMode: 'contain'},
  ticon: {
    position: 'absolute',
    left: 15,
    top: 15,
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  activemic: {
    position: 'absolute',
    left: 18,
    top: 18,
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
});
export default BottomBar;
