import React, {
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Icon} from '@rneui/themed';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

import Styles from './Styles';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import {Row} from '../../../../components/row/Row';
import {Colors} from '../../../../styles/Colors';
import {Button} from '../../../../components/button/Button';
import moment from 'moment';
import {ITopMovie, ITopMovieList} from '../../../../interfaces/TopRatedList';
import {IGenresList} from '../../../../interfaces/GenresList';
import {genresListMock, topRatedListMock} from '../../../../constants/MockData';
import {ImgUrl} from '../../../../constants/Urls';
import {useGetVideoMovieQuery} from '../../../../services/apis/MoviesApi';
import {VideoModal} from '../../../movies/components/videoModal/VideoModal';

type MainMovieProps = PropsWithChildren<{
  moviesList: ITopMovieList;
  genresList: IGenresList;
}>;
export const MainMovie: React.FC<MainMovieProps> = ({
  moviesList,
  genresList,
}) => {
  const onClick = useNavigation();
  const [movie, setMovie] = useState<ITopMovie>(moviesList?.results[0]);
  const [moviesTypesList, setMoviesTypesList] =
    useState<IGenresList>(genresList);
  const [types, setTypes] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [videoId, setVideoId] = useState('');
  const {data, isLoading, isFetching, refetch} = useGetVideoMovieQuery({
    movieId: movie.id,
  });
  // *************************** useEffect **************************

  useEffect(() => {
    if (moviesTypesList?.genres?.length > 0) {
      let arr = movie?.genre_ids.map(genreId => {
        const genre = moviesTypesList.genres.find(
          genreItem => genreItem.id === genreId,
        );
        return genre ? genre.name : '';
      });

      const arrWithCommas = arr.join(', ');
      setTypes(arrWithCommas);
    }
  }, [movie, moviesTypesList]);

  const handleNavigate = useCallback(() => {
    onClick.navigate('MovieDetails', {
   
      id:movie.id
    });
  }, [onClick]);

  const showTrailer = async () => {
    const trailer = data?.results.find(
      (video: IVideo) => video.type === 'Trailer' && video.site === 'YouTube',
    );
    if (trailer) {
      setVideoId(trailer.key);
    } else {
      setVideoId('');
    }
    setModalVisible(true);
  };
  // *************************** render **********************************

  return (
    <View style={Styles.container}>
      <FastImage
        style={Styles.imgStyle}
        source={{uri: `${ImgUrl}${movie?.poster_path}`}}
        resizeMode={FastImage.resizeMode.stretch}
      />
      <LinearGradient
        colors={[
          'rgba(17, 23, 32, .8)',
          'rgba(17, 23, 32, .4)',
          'rgba(17, 23, 32, .1)',
        ]}
        style={Styles.headerContainer}>

      </LinearGradient>
      <LinearGradient
        colors={[
          'rgba(17, 23, 32, 0.1)',
          'rgba(17, 23, 32, .4)',
          'rgba(17, 23, 32, .6)',
          'rgba(17, 23, 32, .8)',
          'rgba(17, 23, 32,1)',
        ]}
        style={Styles.titleContainer}>
        <Text
          // numberOfLines={2}
          style={Styles.titleMovie}>
          {movie?.title}
        </Text>

        <View style={Styles.infoMovieContainer}>
          <Text style={Styles.infoMovieText}>
            {moment(movie?.release_date).format('YYYY')}
          </Text>
          <Icon
            name="dot-single"
            type="entypo"
            color={Colors.InfoColor}
            size={responsiveFontSize(2)}
          />
          <Text style={Styles.infoMovieText}>{types}</Text>
          <Icon
            name="dot-single"
            type="entypo"
            color={Colors.InfoColor}
            size={responsiveFontSize(2)}
          />
          <Text style={Styles.infoMovieText}>2h 22m</Text>
        </View>

        <Row>
          <Button
            text="DETAILS"
            iconProps={
              <Icon
                name="info"
                type="feather"
                color={Colors.SecondaryColor}
                size={responsiveFontSize(2)}
              />
            }
            onPress={() => handleNavigate()}
          />
          <Button
            text="Trailier"
            iconProps={
              <Icon
                name="controller-play"
                type="entypo"
                color={Colors.SecondaryColor}
                size={responsiveFontSize(2)}
              />
            }
            onPress={showTrailer}
          />
          <Button
            text="Favourite"
            iconProps={
              <Icon
                name="favorite-border" //favorite
                type="material"
                color={Colors.SecondaryColor}
                size={responsiveFontSize(2)}
              />
            }
            colors={['#ed5755', '#e44745', '#d2363b']}
          />
        </Row>
      </LinearGradient>
      <VideoModal
        isVisible={isModalVisible}
        onClose={() => setModalVisible(false)}
        videoId={videoId}
      />
    </View>
  );
};
