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
    flex: 0.68,
  },
  imgStyle: {
    flex: 1,
  },
  headerContainer: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '50%',

    paddingTop: responsiveHeight(5),
    paddingHorizontal: responsiveWidth(4),

    // justifyContent: 'flex-end',
    // alignItems: 'flex-start',
    // borderWidth: 1,
    // borderColor: 'red',
  },
  titleContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '50%',
    paddingBottom: responsiveHeight(2),
    paddingHorizontal: responsiveWidth(4),
    justifyContent: 'flex-end',
  },
  titleMovie: {
    textAlign: 'center',
    fontSize: responsiveFontSize(3),
    color: Colors.SecondaryColor,
    fontWeight: '700',
    letterSpacing: 1.5,
    marginHorizontal: responsiveWidth(10),
  },
  infoMovieContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: responsiveHeight(1.5),
  },
  infoMovieText:{
    textAlign: 'center',
    color: Colors.InfoColor,
    fontWeight: 'bold',
    fontSize: responsiveFontSize(1.5),
    letterSpacing: 1,
  }
});
