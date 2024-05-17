import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {Colors} from '../../styles/Colors';

export default StyleSheet.create({
  btnStyle: {
    width: responsiveWidth(27),
    height: responsiveHeight(4),
    borderRadius: 8,
  },
  linearContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  textStyle: {
    fontSize: responsiveFontSize(1.5),
    color: Colors.SecondaryColor,
    fontWeight: '700',
    letterSpacing: 1,
  },
});
