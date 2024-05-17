import React, {useEffect} from 'react';
import {StatusBar, View, Text} from 'react-native';
import {MainMovie} from '../../components/mainMovie/MainMovie';
import {RemainingMovies} from '../../components/remainingMovies/RemainingMovies';

import Styles from './Styles';
import {
  useGetGenreMoviesQuery,
  useGetTopRatedMoviesQuery,
} from '../../../../services/apis/MoviesApi';

function Home(): JSX.Element {
  const {data, isLoading} = useGetTopRatedMoviesQuery();
  const {data: genres, isLoading: isGenresLoading} = useGetGenreMoviesQuery();
  return (
    <View style={Styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      {isLoading && isGenresLoading ? (
        <Text>loading</Text>
      ) : (
        <>
          <MainMovie moviesList={data} genresList={genres} />
          <RemainingMovies moviesList={data} />
        </>
      )}
    </View>
  );
}

export {Home};
