import React from 'react';
import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {Colors} from '../../styles/Colors';

export default StyleSheet.create({
  textStyle: {
    fontSize: responsiveFontSize(1.8),
    color: Colors.SecondaryColor,
    fontWeight: '700',
    letterSpacing: 1.5,
    marginHorizontal: responsiveWidth(1.5),
  },
});
