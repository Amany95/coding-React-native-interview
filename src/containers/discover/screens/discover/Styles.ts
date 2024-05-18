import React from 'react';
import {Platform, StatusBar, StyleSheet} from 'react-native';
import {Colors} from '../../../../styles/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PrimaryColor,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
