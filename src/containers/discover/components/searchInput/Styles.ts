import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

export default StyleSheet.create({
  container: {
    height: responsiveHeight(5),
    // marginHorizontal: responsiveWidth(2),
    marginBottom: responsiveHeight(2),
    borderRadius: 20,
    paddingHorizontal: responsiveWidth(4),
    fontWeight: '400',
    marginTop: responsiveHeight(1.5),
    backgroundColor: '#333',
    color: '#eee',
  },
});
