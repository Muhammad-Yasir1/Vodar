import React, {Component} from 'react';
import Slideshow from 'react-native-image-slider-show';

const ChunkMediaImageSlide = ({media}) => {
  const state = {
    position: 1,
    dataSource: media,
  };
  return (
    <Slideshow
      height={200}
      dataSource={state.dataSource}
      position={state.position}
    />
  );
};

export default ChunkMediaImageSlide;
