import React from 'react';
import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {Colors} from '../../../../styles/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: responsiveWidth(4),
    backgroundColor: Colors.PrimaryColor,
    paddingTop: responsiveHeight(5),
    // paddingBottom:responsiveHeight(3)
  },
  cardContainer: {
    width: responsiveWidth(45),
    borderRadius: 10,
    height: responsiveHeight(20),
    marginVertical: responsiveHeight(1),
    marginHorizontal: responsiveWidth(1),

    // marginRight: responsiveWidth(3),
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
  titleContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: responsiveHeight(8),

    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    // height: 160,
    paddingHorizontal: responsiveWidth(2),
    // paddingRight: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  text: {
    fontSize: responsiveFontSize(2),
    fontWeight: '600',
    lineHeight: 24,
    color: Colors.SecondaryColor,
  },
  typeText: {
    height: responsiveHeight(3),
    color: Colors.InfoColor,
    fontSize: responsiveFontSize(1.8),
    marginVertical: responsiveHeight(0.5),
    width: responsiveWidth(40),
    textAlign: 'center',

  },
});
