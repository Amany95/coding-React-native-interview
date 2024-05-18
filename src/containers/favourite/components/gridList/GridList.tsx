import React, {useCallback, useEffect, useReducer, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  ViewStyle,
  TouchableOpacity,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {
  IFavouriteMovie,
  IFavouriteMovieList,
} from '../../../../interfaces/FavouriteList';
import {genresListMock} from '../../../../constants/MockData';
import {ImgUrl} from '../../../../constants/Urls';
import Styles from './Styles';
import {pageNumber} from '../../../../constants/RequestParams';
import {useGetFavouriteMoviesQuery} from '../../../../services/apis/MoviesApi';
import {Colors} from '../../../../styles/Colors';

export const GridList: React.FC<{}> = () => {
  const onClick = useNavigation();
  const isFocused = useIsFocused();

  const [pageValue, setPageValue] = useState<number>(pageNumber);
  const [list, setList] = useState<IFavouriteMovieList>({
    page: pageNumber,
    results: [],
    total_pages: 0,
    total_results: 0,
  });

  const {data, isLoading, isFetching, refetch} = useGetFavouriteMoviesQuery(
    {page: pageValue},
    {
      refetchOnMountOrArgChange: true,
    },
  );

  useEffect(() => {
    if (isFocused) {
      setPageValue(pageNumber);
      refetch();
    }
  }, [isFocused]);

  useEffect(() => {
    if (data) {
      setList(prevList => ({
        ...data,
        results:
          pageNumber == pageValue
            ? data.results
            : [...prevList.results, ...data.results],
      }));
    }
  }, [data]);

  const handleNavigate = useCallback(
    (item: IFavouriteMovie, index: number) => {
      onClick.navigate('MovieDetails', {
        movie: {
          popularity: item.popularity,
          title: item.title,
          urlToImage: item.poster_path,
          release_date: item.release_date,
          overview: item.overview,
          id:item.id
        },
        index: index,
      });
    },
    [onClick],
  );

  const renderItem = ({
    item,
    index,
  }: {
    item: IFavouriteMovie;
    index: number;
  }) => {
    const genres = item?.genre_ids
      .map((genreId: number) => {
        const genre = genresListMock?.genres.find(
          genreItem => genreItem.id === genreId,
        );
        return genre ? genre.name : '';
      })
      .join(', ');

    return (
      <TouchableOpacity onPress={() => handleNavigate(item, index)}>
        <View style={Styles.cardContainer as ViewStyle}>
          <FastImage
            style={Styles.imgStyle}
            source={{uri: `${ImgUrl}${item.poster_path}`}}
            resizeMode={FastImage.resizeMode.stretch}
          />
          <LinearGradient
            colors={[
              'rgba(17, 23, 32, 0)',
              'rgba(17, 23, 32, .6)',
              'rgba(17, 23, 32, .8)',
              'rgba(17, 23, 32,1)',
            ]}
            style={Styles.titleContainer}>
            <Text style={Styles.text} numberOfLines={1}>
              {item?.title}
            </Text>
            <Text style={Styles.typeText} numberOfLines={1}>
              {genres}
            </Text>
          </LinearGradient>
        </View>
      </TouchableOpacity>
    );
  };

  const handleLoadMore = () => {
    if (!isFetching &&pageValue < data?.total_pages) {
      setPageValue(prevPage => prevPage + 1);
    }
  };
  const renderFooter = () => {
    if (!isFetching) {
      return null;
    }
    return <ActivityIndicator size="small" color={Colors.InactiveColor} />;
  };

  return (
    <View style={Styles.container}>
      {isLoading && pageValue === pageNumber ? (
        <ActivityIndicator size="large" color={Colors.InactiveColor} />
      ) : (
        <FlatList
          numColumns={2}
          data={list.results}
          renderItem={renderItem}
          keyExtractor={(item: IFavouriteMovie) => item.id.toString()}
          onEndReached={() => handleLoadMore()}
          onEndReachedThreshold={0.5}
          ListFooterComponent={renderFooter}
        />
      )}
    </View>
  );
};
