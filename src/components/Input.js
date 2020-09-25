import React, {Component} from 'react';
import {Input} from 'react-native-elements';
import {colors} from '../utils/constant';

export default CustomInput = React.forwardRef((props, ref) => (
  <Input
    ref={ref}
    containerStyle={[{width: '95%', marginTop: 12}, props.containerStyle]}
    inputContainerStyle={[{height: 40}, props.inputContainerStyle]}
    inputStyle={[
      {fontSize: 14, color: colors.lightFontColor},
      props.inputStyle,
    ]}
    labelStyle={{
      fontSize: 16,
      color: colors.lightFontColor,
      fontFamily: 'Avenir',
    }}
    secureTextEntry={props.secureTextEntry}
    label={props.label}
    placeholder={props.placeholder}
    value={props.value}
    onSubmitEditing={() => props.onSubmitEditing()}
    onChangeText={(text) => props.textChange(text)}
    errorStyle={{color: 'red'}}
    autoCapitalize="none"
  />
));
