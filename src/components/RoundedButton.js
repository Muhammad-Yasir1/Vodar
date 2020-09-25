import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

export default class RoundedButton extends Component {
  render() {
    const { children, click } = this.props;
    return <TouchableOpacity onPress={click} style={styles.rounded}>{children}</TouchableOpacity>;
  }
}

const styles = StyleSheet.create({
  rounded: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 50,
  },
});
