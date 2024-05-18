import moment from 'moment';
import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {IMovie} from '../../../../interfaces/DiscoverList';
import Styles from './Styles';
import { ImgUrl } from '../../../../constants/Urls';

export const MovieItem: React.FC<{
  movie: IMovie;
}> = ({movie}) => {
  return (
    <TouchableOpacity activeOpacity={1} style={Styles.container}>
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
        <Text style={Styles.overview} numberOfLines={1}>{movie?.overview}</Text>
        <Text style={Styles.year}>
          {moment(movie?.release_date).format('DD, MMMM ,YYYY')}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};
