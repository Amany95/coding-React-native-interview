import React from 'react';
import {Dimensions, Platform, StatusBar, StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: width * 0.9,
    // height: height * 0.6,
    backgroundColor: '#000',
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
  noTrailerText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    marginTop: height * 0.25,
  },
});
