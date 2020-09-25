import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';

const Suggestion = ({ navigation }) => {

  return (
    <View style={styles.mainView}>
      <Text style={styles.emailtxt}>Suggestion</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  mainView: { flex: 1, backgroundColor:'#FFF' },
  emailtxt: { fontSize: 15, color: '#000', textAlign: 'center' },
});
export default Suggestion;
