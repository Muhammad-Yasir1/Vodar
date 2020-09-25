import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../../components/Header';
import {colors} from '../../utils/constant';

const Details = ({navigation}) => {
  const tags = [
    {
      img: require('../../../images/dic.png'),
      text: 'faucets definition',
    },
    {
      img: require('../../../images/Group4.png'),
      text: 'faucets',
    },
    {
      img: require('../../../images/videocam_24px_outlined.png'),
      text: 'faucets repair',
    },
    {
      img: require('../../../images/Vector.png'),
      text: 'faucets 3D',
    },
    {
      img: require('../../../images/paste_24px_outlined.png'),
      text: 'faucets guide',
    },
  ];

  return (
    <>
      <SafeAreaView style={{flex: 0, backgroundColor: colors.backgroundTop}} />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.mainView}>
          <LinearGradient
            // end={{x: 1, y: 1}}
            colors={['#05354A', '#0F1628']}
            style={styles.mainView}>
            <Header navigation={navigation} home={true} />

            <View style={styles.mainView}>
              <Text style={styles.heading}>faucet</Text>

              <View style={styles.imgview}>
                <Image
                  style={styles.img}
                  source={require('../../../images/image1.png')}
                />
              </View>

              <ScrollView
                style={styles.mainView}
                showsVerticalScrollIndicator={true}>
                <Text style={styles.detailtxt}>
                  Lorem ipsem sogi he kal dinasour khana Lorem ipsem sogi he kal
                  dinasour khana Lorem ipsem sogi he kal dinasour khana Lorem
                  ipsem sogi he kal dinasour khana Lorem ipsem sogi he kal Lorem
                  ipsem sogi he kal dinasour khana Lorem ipsem sogi he kal
                  dinasour khana Lorem ipsem sogi he kal dinasour khana Lorem
                  ipsem sogi he kal dinasour khana Lorem ipsem sogi he kal Lorem
                  ipsem sogi he kal dinasour khana Lorem ipsem sogi he kal
                  dinasour khana Lorem ipsem sogi he kal dinasour khana Lorem
                  ipsem sogi he kal dinasour khana Lorem ipsem sogi he kal{' '}
                </Text>
              </ScrollView>
              <View style={styles.tagview}>
                <Text style={styles.tagheading}>Resources</Text>
                <View style={styles.tagcontainer}>
                  {tags.map((val, ind) => {
                    return (
                      <TouchableOpacity key={ind} style={styles.tagtou}>
                        <Image style={styles.tagimg} source={val.img} />
                        <Text style={styles.tagtxt}>{val.text}</Text>
                      </TouchableOpacity>
                    );
                  })}

                  <TouchableOpacity style={styles.sugtou}>
                    <Image
                      style={styles.sugimg}
                      source={require('../../../images/add_24px.png')}
                    />
                    <Text style={styles.sugtxt}>suggest</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </LinearGradient>
        </View>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  mainView: {flex: 1},
  safeArea: {flex: 1, backgroundColor: colors.backgroundBottom},
  heading: {
    textAlign: 'center',
    paddingHorizontal: 50,
    fontSize: 30,
    color: 'rgba(255,255,255,0.7)',
    marginTop: 30,
  },
  imgview: {padding: 20, justifyContent: 'center', alignItems: 'center'},
  img: {width: '100%', resizeMode: 'contain'},
  detailtxt: {
    paddingHorizontal: 20,
    fontSize: 15,
    color: 'rgba(255,255,255,0.7)',
  },
  tagview: {flex: 2, marginTop: 20},
  tagheading: {
    paddingHorizontal: 20,
    fontSize: 25,
    color: 'rgba(255,255,255,0.7)',
  },
  tagcontainer: {flexDirection: 'row', padding: 20, flexWrap: 'wrap'},
  tagtou: {
    marginRight: 5,
    marginBottom: 7,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  tagimg: {width: 20, height: 20, resizeMode: 'contain'},
  tagtxt: {fontSize: 13, marginLeft: 5, color: 'rgba(0,0,0,0.5)'},
  sugtou: {
    marginRight: 5,
    marginBottom: 7,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    borderColor: '#176A9B',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  sugimg: {width: 13, height: 13, resizeMode: 'contain'},
  sugtxt: {fontSize: 13, marginLeft: 5, color: 'rgba(255,255,255,0.8)'},
});
export default Details;
