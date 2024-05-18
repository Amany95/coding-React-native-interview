import React, {useCallback, useState} from 'react';
import {ScrollView, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import FastImage from 'react-native-fast-image';
import {Icon} from '@rneui/themed';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {IVideo} from '../../../../interfaces/VideoList';
import {Colors} from '../../../../styles/Colors';
import {ImgUrl} from '../../../../constants/Urls';
import {VideoModal} from '../../components/videoModal/VideoModal';
import {useGetVideoMovieQuery} from '../../../../services/apis/MoviesApi';
import {Row} from '../../../../components/row/Row';
import LinearGradient from 'react-native-linear-gradient';
import {Button} from '../../../../components/button/Button';
import Styles from './Styles';

interface Route {
  params: {
    movie: {
      popularity: number;
      title: string;
      urlToImage: string;
      release_date: string;
      overview: string;
      id: number;
    };
    index: number;
  };
}
export const MovieDetails: React.FC<{route: Route}> = ({route}) => {
  const {movie, index} = route?.params;
  const navigation = useNavigation();

  const [isModalVisible, setModalVisible] = useState(false);
  const [videoId, setVideoId] = useState(null);

  const {data, isLoading, isFetching, refetch} = useGetVideoMovieQuery({
    movieId: movie.id,
  });

  const showTrailer = async () => {
    const trailer = data?.results.find(
      (video: IVideo) => video.type === 'Trailer' && video.site === 'YouTube',
    );
    if (trailer) {
      setVideoId(trailer.key);
    } else {
      setVideoId(null);
    }
    setModalVisible(true);
  };
  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);
  return (
    <>
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
        <LinearGradient
          colors={[
            'rgba(17, 23, 32, .8)',
            'rgba(17, 23, 32, .4)',
            'rgba(17, 23, 32, .1)',
          ]}
          style={Styles.headerContainer}>
          <Row>
            <Icon
              type="ionicon"
              name="arrow-back-circle-outline"
              size={responsiveFontSize(5)}
              color={Colors.InfoColor}
              onPress={goBack}
            />

            <Button
              text="Play Trailer"
              onPress={() => {
                showTrailer();
              }}
              iconProps={
                <Icon
                  name="controller-play" //
                  type="entypo"
                  color={Colors.SecondaryColor}
                  size={responsiveFontSize(2)}
                />
              }
              colors={['#ed5755', '#e44745', '#d2363b']}
            />
          </Row>
        </LinearGradient>
        <Text style={[Styles.title]}>{movie?.title}</Text>
        <Text style={[Styles.content]}>{movie?.overview}</Text>

        <VideoModal
          isVisible={isModalVisible}
          onClose={() => setModalVisible(false)}
          videoId={videoId}
        />
      </ScrollView>
    </>
  );
};
