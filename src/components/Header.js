import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
const Header = ({navigation, home}) => {
  console.log(useRoute().name);

  return (
    <View style={styles.main}>
      <View style={styles.mainView}>
        <TouchableOpacity
          onPress={
            useRoute().name !== 'Home'
              ? () => {
                  navigation.goBack();
                }
              : () => {}
          }
          style={styles.tou}>
          <Image
            style={styles.leftarrow}
            source={require('../../images/arrowleftwhite.png')}
          />
        </TouchableOpacity>
        {home ? (
          <TouchableOpacity
            style={styles.tou}
            onPress={() => navigation.goBack()}>
            <Image
              style={styles.home}
              source={require('../../images/home_24px.png')}
            />
          </TouchableOpacity>
        ) : null}
        <TouchableOpacity
          onPress={() => {
            navigation.toggleDrawer();
          }}
          style={styles.tou}>
          <Image
            style={styles.menu}
            source={require('../../images/menu-icon.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {fontSize: 16, justifyContent: 'center'},
  mainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tou: {padding: 20},
  leftarrow: {width: 20, height: 15, resizeMode: 'contain'},
  home: {width: 20, height: 20, resizeMode: 'contain'},
  menu: {width: 30, height: 15, resizeMode: 'contain'},
});
export default Header;
