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
  card: {
    width: responsiveWidth(80),
    marginHorizontal: responsiveWidth(10),
    padding: 16,
    borderRadius: 8,
  },
  titleCard: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  weatherInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  temp: {
    fontSize: 24,
    marginLeft: 8,
  },
  description: {
    fontSize: 16,
    color: '#757575',
  },
});
