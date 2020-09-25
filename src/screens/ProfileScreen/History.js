import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const History = ({ navigation }) => {

  return (
    <View style={styles.mainView}>


      <FlatList showsVerticalScrollIndicator={false} data={[1,2,3,4,5,6,7,8,9,10,11,12,13,14]}  renderItem={({item, index}) => {
        return (
          <View style={styles.itemview}>
            <Text style={styles.itemtxt}>faucet</Text>
            <TouchableOpacity style={styles.crossview}>
              <Image style={styles.cross} source={require('../../../images/crossicon.png')} />
            </TouchableOpacity>
          </View>
        )
      }} />
    </View>
  );
};
const styles = StyleSheet.create({
  mainView: { flex: 1, backgroundColor: '#FFF', padding: 20, },
  itemview: {marginVertical:10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#CCC' },
  itemtxt: { fontSize: 15, color: '#000', textAlign: 'center', },
  crossview: { padding: 5, },
  cross: { width: 20, height: 20, resizeMode: 'contain' },
});
export default History;
