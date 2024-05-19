import React, {useCallback, useEffect, useState} from 'react';
import {ActivityIndicator, Linking, ScrollView, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import FastImage from 'react-native-fast-image';
import {Icon} from '@rneui/themed';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {IVideo} from '../../../../interfaces/VideoList';
import {Colors} from '../../../../styles/Colors';
import {ImgUrl} from '../../../../constants/Urls';
import {VideoModal} from '../../components/videoModal/VideoModal';
import {
  useGetMovieDetailsQuery,
  useGetVideoMovieQuery,
} from '../../../../services/apis/MoviesApi';
import {Row} from '../../../../components/row/Row';
import LinearGradient from 'react-native-linear-gradient';
import {Button} from '../../../../components/button/Button';
import Styles from './Styles';
import {IMovieDetails} from '../../../../interfaces/MovieDetails';
import {initialMovieDetails} from '../../../../constants/IntialData';
import {TouchableOpacity} from 'react-native';

interface Route {
  params: {
    id: number;
  };
}
export const MovieDetails: React.FC<{route: Route}> = ({route}) => {
  const {id} = route?.params;
  const navigation = useNavigation();

  const [isModalVisible, setModalVisible] = useState(false);
  const [videoId, setVideoId] = useState('');
  const [movieDetails, setMovieDetails] =
    useState<IMovieDetails>(initialMovieDetails);

  const {
    data: movieData,
    isLoading: isDetailsLoading,
    isFetching: isDetailsFetching,
    refetch,
  } = useGetMovieDetailsQuery({
    movieId: id,
  });
  const {data, isLoading, isFetching} = useGetVideoMovieQuery({
    movieId: id,
  });

  useEffect(() => {
    if (movieData) {
      setMovieDetails(movieData);
    }
  }, [movieData]);
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
  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const renderMovieDetails = () => {
    return (
      <>
        <TouchableOpacity style={Styles.crossContainer} onPress={goBack}>
          <Icon
            reverse
            name="arrow-back"
            type="ionicon"
            color={Colors.PrimaryColor}
          />
        </TouchableOpacity>
        <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
          style={[Styles.container]}
          contentContainerStyle={Styles.contentContainer}>
          <FastImage
            style={Styles.image}
            source={{uri: `${ImgUrl}${movieDetails?.poster_path}`}}
            resizeMode={'stretch'}
          />
          <Row style={Styles.rowStyle}>
            <Text style={[Styles.title]}>
              {movieDetails?.title} {movieDetails?.title}
            </Text>
            <Icon
              reverse
              name="controller-play"
              type="entypo"
              color={Colors.PrimaryColor}
              onPress={showTrailer}
            />
          </Row>

          <Text style={[Styles.content]}>{movieDetails?.overview}</Text>

          <VideoModal
            isVisible={isModalVisible}
            onClose={() => setModalVisible(false)}
            videoId={videoId}
          />

        </ScrollView>
      </>
    );
  };
  return (
    <>
      {isDetailsLoading ? (
        <ActivityIndicator size="large" color={Colors.InactiveColor} />
      ) : (
        renderMovieDetails()
      )}
    </>
  );
};
