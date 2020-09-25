import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  Picker,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import CountryPickerCustom from "./CountryModalPicker";

const Profile = ({ navigation }) => {
  const [selectedValue, setSelectedValue] = useState("English");
  return (
    <ScrollView style={styles.mainView}>

      <Text style={styles.txt}>Name</Text>
      <TextInput placeholder='Name Surname' placeholderTextColor={'#333'} style={styles.input} />
      <Text style={styles.txt}>Email</Text>
      <TextInput placeholder='username@domain.com' placeholderTextColor={'#333'} style={styles.input} />
      <Text style={styles.txt}>Password</Text>
      <TextInput secureTextEntry={true} placeholder='***********' placeholderTextColor={'#333'} style={styles.input} />
      <Text style={styles.txt}>Change Language</Text>

      <CountryPickerCustom />

      {/* <TouchableOpacity style={styles.dopview}>
        <View style={styles.flagtxtvieew}>
          <Image style={styles.cross} source={require('../../../images/flag.png')} />
          <Text style={styles.countxt}>English</Text>
        </View>
        <Image style={styles.dropimg} source={require('../../../images/arrow_down.png')} />
      </TouchableOpacity> */}
      {/* <View
        style={{ paddingHorizontal: 10, paddingRight: 20, borderWidth: 1, borderColor: '#DDD', flexDirection: 'row', alignItems: 'center', marginBottom: 10, }}
      >

        <Image style={styles.cross} source={require('../../../images/flag.png')} />

        <Picker
          selectedValue={selectedValue}
          style={{ height: 50, width: '100%', borderWidth: 1, borderColor: '#DDD', }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="English" value="English" >
          </Picker.Item>
          <Picker.Item label="French" value="French" />
        </Picker>
      </View> */}

      <TouchableOpacity style={styles.save}>
        <Text style={styles.btntxt}>Save</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.del}>
        <Text style={styles.deltxt}>Delete Account</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  mainView: { flex: 1, backgroundColor: '#FFF', padding: 20, },
  txt: { fontSize: 15, color: '#AAA', marginVertical: 10, },
  input: { padding: 0, fontSize: 17, color: '#333', borderBottomColor: '#AAA', borderBottomWidth: 1, },
  save: { color: '#FFF', paddingVertical: 7, backgroundColor: '#DDD', width: 100, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', borderRadius: 20, },
  btntxt: { color: '#FFF', fontSize: 15 },
  del: { color: '#FFF', paddingVertical: 7, marginTop: 10, width: 200, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', },
  deltxt: { color: 'red', fontSize: 15 },
  cross: { width: 25, height: 25, resizeMode: 'contain' },
  dropimg: { width: 15, height: 15, resizeMode: 'contain' },
  dopview: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderWidth: 1, borderColor: '#DDD', padding: 10, marginBottom: 10, },
  flagtxtvieew: { flexDirection: 'row' },
  countxt: { color: '#777', fontSize: 15, marginHorizontal: 10 },
});
export default Profile;
