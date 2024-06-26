import moment from 'moment';
import React,{useCallback} from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {IMovie} from '../../../../interfaces/DiscoverList';
import Styles from './Styles';
import {ImgUrl} from '../../../../constants/Urls';
import {useNavigation} from '@react-navigation/native';

export const MovieItem: React.FC<{
  movie: IMovie;
}> = ({movie}) => {
  const onClick = useNavigation();

  const handleNavigate = useCallback(() => {
    onClick.navigate('MovieDetails', {

      id:movie.id
    });
  }, [onClick, movie]);
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={Styles.container}
      onPress={handleNavigate}>
      <Image
        source={{
          uri: `${ImgUrl}${movie?.poster_path}` ?? 'https://picsum.photos/800',
          cache: 'force-cache',
        }}
        resizeMode={'stretch'}
        style={Styles.image}
      />
      <LinearGradient
        colors={['#0000', '#000A', '#000']}
        style={Styles.titleContainer}>
        <Text style={Styles.text}>{movie?.title}</Text>
        <Text style={Styles.overview} numberOfLines={1}>
          {movie?.overview}
        </Text>
        <Text style={Styles.year}>
          {moment(movie?.release_date).format('DD, MMMM ,YYYY')}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};
