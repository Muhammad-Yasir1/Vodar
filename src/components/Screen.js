import React from 'react';
import {StyleSheet} from 'react-native';
import {
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native-safe-area-context';

function Screen({children}) {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
}
const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
export default Screen;
