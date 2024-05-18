import {Platform, StyleSheet} from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const boxShadow: any = Platform.select({
  ios: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  android: {elevation: 6},
});

export default StyleSheet.create({
  container: {
    height: responsiveHeight(35),
    marginBottom: responsiveHeight(2),
    backgroundColor: '#eee',
    borderRadius: 24,
    marginHorizontal: responsiveWidth(3),
    ...boxShadow,
  },
  imageContainer: {flex: 1},
  image: {
    flex: 1,
    borderRadius: 24,
    height: responsiveHeight(35),
  },
  titleContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    height: responsiveHeight(12),
    paddingHorizontal: responsiveWidth(3),
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  text: {
    fontSize: responsiveFontSize(2.3),
    fontWeight: '600',
    lineHeight: 24,
    color: '#fff',
    paddingBottom: responsiveHeight(1.5),
  },
  overview: {
    fontSize: responsiveFontSize(1.8),
    fontWeight: '400',
    // lineHeight: 24,
    color: '#fff',
    paddingBottom: responsiveHeight(4),
  },
  year: {
    position: 'absolute',
    color: '#eee',
    fontSize: responsiveFontSize(1.5),
    fontWeight: '300',
    right: responsiveWidth(3),
    bottom: responsiveHeight(1.5),
  },
});