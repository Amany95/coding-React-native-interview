import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
export default StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#FFA500',
    borderRadius: 15,
    height: responsiveHeight(3.5),
    paddingHorizontal: responsiveWidth(3),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: responsiveWidth(3),
    backgroundColor: '#FFA50066',
  },
  text: {
    fontSize: responsiveFontSize(1.8),
    fontWeight: '500',
    color: '#fff',
  },
  selected: {
    backgroundColor: '#FF8800',
    borderColor: '#FF6600',
  },
});
