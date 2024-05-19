import React, {useCallback, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Linking,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import FastImage from 'react-native-fast-image';
import {Card, Icon, Text as RNEText} from '@rneui/themed';
import {IVideo} from '../../../../interfaces/VideoList';
import {Colors} from '../../../../styles/Colors';
import {ImgUrl} from '../../../../constants/Urls';
import {VideoModal} from '../../components/videoModal/VideoModal';
import {
  useGetMovieDetailsQuery,
  useGetVideoMovieQuery,
} from '../../../../services/apis/MoviesApi';
import {Row} from '../../../../components/row/Row';
import {IMovieDetails} from '../../../../interfaces/MovieDetails';
import {initialMovieDetails} from '../../../../constants/IntialData';
import {useGetWeatherMovieQuery} from '../../../../services/apis/WeatherApi';
import Styles from './Styles';

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
  const [movieLocation, setMovieLocation] = useState('');

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
  const {data: weatherData, isLoading: isWeatherLoading} =
    useGetWeatherMovieQuery({
      location: movieLocation,
    });
  const {data, isLoading, isFetching} = useGetVideoMovieQuery({
    movieId: id,
  });

  useEffect(() => {
    if (movieData) {
      setMovieDetails(movieData);
      setMovieLocation(movieData?.production_countries[0]?.name)
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
    // navigation.goBack();
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      navigation.navigate('BottomTabs', { screen: 'Home' }); 
    }
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

          {weatherData && (
            <Card containerStyle={Styles.card}>
              <Card.Title style={Styles.titleCard}>
                {weatherData?.name}
              </Card.Title>
              <Card.Divider />
              <View style={Styles.weatherInfo}>
                <Icon name="sunny" type="ionicon" size={24} color="#FFA726" />
                <RNEText style={Styles.temp}>
                  {weatherData?.main.temp} °C
                </RNEText>
              </View>
              <Text style={Styles.description}>
                {weatherData?.weather[0]?.description}
              </Text>
            </Card>
          )}
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
