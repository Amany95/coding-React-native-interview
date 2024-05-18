import React from 'react';
import {Platform, StatusBar, StyleSheet} from 'react-native';
import {Colors} from '../../../../styles/Colors';
import {responsiveWidth} from 'react-native-responsive-dimensions';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PrimaryColor,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  rowContainer: {
    marginHorizontal: responsiveWidth(3),
  },
  text: {
    width: responsiveWidth(55),
  },
  year: {
    width: responsiveWidth(25),
  },
});
