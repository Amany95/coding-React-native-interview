import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 120,
  },
  image: {
    height: responsiveHeight(60),
    width: '100%',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  headerContainer: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '20%',

    paddingTop: responsiveHeight(5),
    paddingHorizontal: responsiveWidth(4),
  },
  crossContainer: {
    position: 'absolute',
    top: responsiveHeight(5),
    left: responsiveWidth(2),
    zIndex: 9,
    width: responsiveWidth(85),
  },
  cross: {
    height: 34,
    width: 34,
  },
  rowStyle: {
    marginHorizontal: responsiveWidth(4.5),
    marginVertical: responsiveHeight(1),
    flex: 1,
  },
  title: {
    fontSize: responsiveFontSize(2.5),
    fontWeight: '600',
    lineHeight: 30,
    flex: 0.9,
  },
  content: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 22,
    paddingHorizontal: 24,
  },
  readMoreContainer: {
    position: 'absolute',
    paddingTop: 14,
    paddingBottom: 28,
    paddingHorizontal: 24,
    bottom: 0,
    width: '100%',
  },
  readMoreText: {
    fontSize: 13,
    fontWeight: '300',
    lineHeight: 22,
  },
  link: {
    color: '#00beff',
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: '#00beff',
  },
});
