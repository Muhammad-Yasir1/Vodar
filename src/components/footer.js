import React, { Component } from 'react'
import { Icon } from 'react-native-elements'
import { colors } from '../utils/constant'
import {
    View, TouchableOpacity
  } from 'react-native'
export default Footer = ( props ) =>
<View style={{ justifyContent: 'flex-end',borderTopColor : '#D8D8D8' ,
borderTopWidth : 0.5 ,  }}>
  <View
    style={{
      height: 30,
      flexDirection: 'row',
      alignItems : "center",
      justifyContent : 'center'
    }}
  >
    <TouchableOpacity style = {{flex : 1}} onPress = {()=> props.navigation.goBack()}>
    <Icon type = {'material'} name = {'keyboard-arrow-left'} size = {20}
    containerStyle = {{flex : 1}}  />
      </TouchableOpacity>
    <View style = {{flex : 1 , alignItems : 'center'}}>
    <View
      style={{
        height: 15,
        width: 25,
        borderRadius: 12,
        backgroundColor: colors.footer
      }}
    />
  </View>
  <View style = {{flex : 1}}>
    </View>
      </View>
</View>

