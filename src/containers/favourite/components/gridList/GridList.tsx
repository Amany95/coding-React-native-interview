import React, {useCallback, useEffect, useRef, useState} from 'react';
import {View, Text, FlatList, ViewStyle, TouchableOpacity} from 'react-native';

import Styles from './Styles';
import FastImage from 'react-native-fast-image';
import {useDispatch, useSelector} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

import {useIsFocused, useNavigation} from '@react-navigation/native';
import {
  IFavouriteMovie,
  IFavouriteMovieList,
} from '../../../../interfaces/FavouriteList';
import {
  favouriteListMock,
  genresListMock,
} from '../../../../constants/MockData';
import {ImgUrl} from '../../../../constants/Urls';
export const GridList: React.FC<{}> = () => {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  const onClick = useNavigation();

  const [loading, setLoading] = useState(true);
  // const [page, setPage] = useState(PageNumber);
  const [scrollFlag, setScrollFlag] = useState(false);

  const [list, setList] = useState<IFavouriteMovieList>(favouriteListMock);

  // *************************** useEffect **************************

  // useEffect(() => {
  //   getAllMoviessList();
  // }, [page,isFocused]);

  // const getAllMoviessList = () => {
  //   dispatch(
  //     getAllMoviesListRequest({
  //       data: {page: page},
  //       onSuccess: val => {
  //         if (scrollFlag) {
  //           setList(prevListData => ({
  //             ...prevListData,
  //             page: val.page,
  //             total_pages: val.total_pages,
  //             total_results: val.total_results,
  //             results: [...prevListData.results, ...val.results],
  //           }));
  //         } else {
  //           setList(val);
  //         }
  //         setScrollFlag(false);
  //         setLoading(false);
  //       },
  //       onError: val => {
  //         setLoading(false);
  //         setList([]);
  //       },
  //     }),
  //   );
  // };
  // const ListFooterComponent = () => {
  //   return scrollFlag ? <LoadingIndicator /> : null;
  // };
  // const onEndReached = () => {
  //   if (page < list.total_pages && !scrollFlag) {
  //     let p = page + 1;
  //     setPage(p);
  //     setScrollFlag(true);
  //   }
  // };
  const handleNavigate = useCallback(
    (item: IFavouriteMovie, index: number) => {
      onClick.navigate('MovieDetails', {
        movie: {
          popularity: item.popularity,
          title: item.title,
          urlToImage: item.poster_path,
          release_date: item.release_date,
          overview: item.overview,
        },
        index: index,
      });
    },
    [onClick],
  );
  // *************************** render **********************************
  const renderItem = ({item, index}: {item: any; index: number}) => {
    let arr;
    if (genresListMock?.genres?.length > 0) {
      arr = item?.genre_ids.map((genreId: number) => {
        const genre = genresListMock?.genres.find(
          genreItem => genreItem.id === genreId,
        );
        return genre ? genre.name : '';
      });
    }
    return (
      <TouchableOpacity
        onPress={() => {
          handleNavigate(item, index);
        }}>
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
              {arr?.join(', ')}
              {/* {moment(item?.release_date).format('HH:MM DD, MMMM')} */}
            </Text>
          </LinearGradient>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={Styles.container}>
      {/* {loading ? (
        <LoadingIndicator />
      ) : ( */}
      <FlatList
        numColumns={2}
        data={list?.results}
        renderItem={renderItem}
        keyExtractor={(item: any) => item.id.toString()}
        // onEndReached={onEndReached}
        // ListFooterComponent={ListFooterComponent()}
      />
      {/* )} */}
    </View>
  );
};
