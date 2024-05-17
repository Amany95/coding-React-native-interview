import React from 'react';
import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

export default StyleSheet.create({
  containerStyle: {
    backgroundColor: 'rgba(17, 23, 32, .5)',
    height: responsiveHeight(5),
    width: responsiveWidth(10),
    justifyContent: 'center',
    borderRadius: 10,
    // alignItems:'center'
  },
});
