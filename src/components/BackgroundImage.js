import React, { Component } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

export default class BackgroundImage extends Component {
  render() {
    const { children, source, opacity } = this.props;
    const { imageStyle, backgroundImage } = styles;
    imageStyle.opacity = opacity ? opacity : imageStyle.opacity;
    return (
      <ImageBackground source={source} style={backgroundImage} imageStyle={imageStyle}>
        {children}
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    backgroundColor: '#ccc',
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  imageStyle: {
    opacity: 0.25,
  },
});
