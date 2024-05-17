import React, {useCallback, useEffect, useRef, useState} from 'react';
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
import {ITopMovie} from '../../../../interfaces/TopRatedList';
import {IGenresList} from '../../../../interfaces/GenresList';
import {genresListMock, topRatedListMock} from '../../../../constants/MockData';
import {ImgUrl} from '../../../../constants/Urls';

export const MainMovie: React.FC<{}> = () => {
  const onClick = useNavigation();
  const [movie, setMovie] = useState<ITopMovie>(topRatedListMock.results[0]);
  const [moviesTypesList, setMoviesTypesList] =
    useState<IGenresList>(genresListMock);
  const [types, setTypes] = useState('');

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
      movie: {
        popularity: movie.popularity,
        title: movie.title,
        urlToImage: movie.poster_path,
        release_date: movie.release_date,
        overview: movie.overview,
      },
      index: 0,
    });
  }, [onClick]);
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
        {/* <Row>
          <IconTab iconName="align-right" iconType="feather" />
          <TextIcon
            text="Diamond Mall"
            rightIcon={true}
            iconProps={
              <Icon
                name="angle-down"
                type="font-awesome"
                color={Colors.SecondaryColor}
                size={responsiveFontSize(2)}
              />
            }
          />
          <IconTab iconName="search" iconType="feather" />
        </Row> */}
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
            {/* {movie?.release_date?.split('-')[0]} */}
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
          />
          <Button text="ENTRADS" colors={['#ed5755', '#e44745', '#d2363b']} />
        </Row>
      </LinearGradient>
    </View>
  );
};
