import React from 'react';
import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {Colors} from '../../../../styles/Colors';

export default StyleSheet.create({
  container: {
    flex: 0.32,
    paddingLeft: responsiveWidth(4),
    backgroundColor: Colors.PrimaryColor,
    paddingTop:responsiveHeight(2)
  },
  cardContainer: {
    width: responsiveWidth(35),
    borderRadius: 10,
    height: responsiveHeight(24),
    marginRight: responsiveWidth(3),
  },
  imgContainer: {
    flex: 1,
  },
  imgStyle: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
  },

  titleTextStyle: {
    color: Colors.SecondaryColor,
    fontSize: responsiveFontSize(2.3),
    fontWeight: 'bold',
    letterSpacing: 1.5,
    marginBottom: responsiveHeight(1.5),
  },
});
