import React, {Component} from 'react';
// import { Button } from 'react-native-elements'
import {TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from '../utils/constant';
export default CustomButton = (props) => (
  <TouchableOpacity
    rejectResponderTermination={true}
    style={{
      height: 45,
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      // alignSelf: 'flex-end',
      borderRadius: 22,
      backgroundColor: props.backgroundColor
        ? props.backgroundColor
        : colors.submit,
      alignSelf: props.alignSelf ? props.alignSelf : 'center',
      width: props.width ? props.width : 140,
    }}
    {...props}>
    {props.icon ? (
      <Icon style={{padding: 6}} name={props.icon} color="white" size={15} />
    ) : null}
    <Text
      style={{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
        fontFamily: 'Avenir-Heavy',
      }}>
      {props.title}
    </Text>
  </TouchableOpacity>
);
