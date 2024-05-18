import {StyleSheet} from 'react-native';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import {Colors} from '../../../../styles/Colors';

export default StyleSheet.create({
  container: {
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
