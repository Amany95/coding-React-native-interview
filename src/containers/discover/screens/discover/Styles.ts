import React from 'react';
import {Platform, StatusBar, StyleSheet} from 'react-native';
import {Colors} from '../../../../styles/Colors';
import {responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';

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
  containerList: {
    flex: 1,
    flexGrow: 1,
    paddingTop: responsiveHeight(2),
    backgroundColor: Colors.PrimaryColor,
  },
  list: {
    flex: 1,
    flexGrow: 1,
    paddingVertical: 8,
  },
});
