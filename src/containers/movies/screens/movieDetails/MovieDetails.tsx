import {useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import Styles from './Styles';
import FastImage from 'react-native-fast-image';
import {Icon} from '@rneui/themed';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {Colors} from '../../../../styles/Colors';
import {ImgUrl} from '../../../../constants/Urls';

interface Route {
  params: {
    movie: {
      popularity: number;
      title: string;
      urlToImage: string;
      release_date: string;
      overview: string;
    };
    index: number;
  };
}
export const MovieDetails: React.FC<{route: Route}> = ({route}) => {
  const {movie, index} = route?.params;
  const navigation = useNavigation();
  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <>
      <TouchableOpacity style={Styles.crossContainer} onPress={goBack}>
        <Icon
          type="ionicon"
          name="arrow-back-circle-outline"
          size={responsiveFontSize(5)}
          color={Colors.InfoColor}
        />
      </TouchableOpacity>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        style={[Styles.container]}
        contentContainerStyle={Styles.contentContainer}>
        <FastImage
          style={Styles.image}
          source={{uri: `${ImgUrl}${movie.urlToImage}`}}
          resizeMode={'stretch'}
        />
        <Text style={[Styles.title]}>{movie?.title}</Text>
        <Text style={[Styles.content]}>{movie?.overview}</Text>
      </ScrollView>
    </>
  );
};
