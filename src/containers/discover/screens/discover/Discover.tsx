import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
import {GenresTags} from '../../components/genresTags/GenresTags';
import {genresListMock} from '../../../../constants/MockData';
import {VerticalList} from '../../components/verticalList/VerticalList';

import Styles from './Styles';
import {SearchInput} from '../../components/searchInput/SearchInput';
import {Row} from '../../../../components/row/Row';
import {IconTab} from '../../../../components/iconTab/IconTab';
import {
  useGetDiscoverMoviesQuery,
  useGetGenreMoviesQuery,
  useGetSearchMoviesQuery,
} from '../../../../services/apis/MoviesApi';
import {IDiscoverList, IMovie} from '../../../../interfaces/DiscoverList';
import {MovieItem} from '../../components/movieItem/MovieItem';
import {useIsFocused} from '@react-navigation/native';
import {pageNumber} from '../../../../constants/RequestParams';
import {ActivityIndicator} from 'react-native';
import {Colors} from '../../../../styles/Colors';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import {VerticalListLoader} from '../../../../components/shimmers/VerticalListLoader';
import {Text} from 'react-native';

function Discover(): JSX.Element {
  const isFocused = useIsFocused();

  const [pageValue, setPageValue] = useState<number>(pageNumber);
  const [list, setList] = useState<IDiscoverList>({
    page: pageNumber,
    results: [],
    total_pages: 0,
    total_results: 0,
  });
  const [searchList, setSearchList] = useState<IDiscoverList>({
    page: pageNumber,
    results: [],
    total_pages: 0,
    total_results: 0,
  });
  const [selectedGenre, setSelectedGenre] = useState<IMovie>(null);
  const [searchText, setSearchText] = useState('');
  const [searchYear, setSearchYear] = useState(1994);
  const [sortBy, setSortBy] = useState(false);
  const [sortByValue, setSortByValue] = useState('popularity.asc');
  const [isLoadingDiscoverList, setIsLoadingDiscoverList] = useState(true);
  const [isLoadingSearchedList, setIsLoadingSearchedList] = useState(true);

  const {data: genres, isLoading: isGenresLoading} = useGetGenreMoviesQuery();
  const {
    data: listData,
    isLoading: isListLoading,
    isFetching,
    refetch: refetchDiscover,
  } = useGetDiscoverMoviesQuery({
    page: pageValue,
    year: searchYear,
    sortBy: sortBy ? 'popularity.desc' : 'popularity.asc',
    genreId: selectedGenre?.id,
  });
  const {
    data: searchedDataList,
    isLoading: isSearchedListLoading,
    isFetching: isSearchedFetchingList,
  } = useGetSearchMoviesQuery({
    page: pageValue,
    year: searchYear,
    searchedText: searchText,
  });
  // ************************* use effect *******************************************
  useEffect(() => {
    if (isFocused) {
      resetFilters();
      refetchDiscover();
    }
  }, [isFocused]);
  useEffect(() => {
    if (listData && searchText.length == 0) {
      setList(prevList => ({
        ...listData,
        results:
          pageNumber === pageValue
            ? listData.results
            : [...prevList.results, ...listData.results],
      }));
      setIsLoadingDiscoverList(false);
      setIsLoadingSearchedList(false);
    }
  }, [listData]);
  useEffect(() => {
    if (searchedDataList && searchText.length > 0) {
      setSearchList(prevList => ({
        ...searchedDataList,
        results:
          pageNumber === pageValue
            ? searchedDataList.results
            : [...prevList.results, ...searchedDataList.results],
      }));
      setIsLoadingSearchedList(false);
      setIsLoadingDiscoverList(false);
    }
  }, [searchedDataList]);



  // ************************* handle filter *******************************************
  const resetFilters = () => {
    setPageValue(pageNumber);
    setSearchText('');
    setSearchYear(null);
    setSelectedGenre(null);
    setSortBy(false);
    setSortByValue('popularity.asc');
  };
  const changeSortBy = useCallback(() => {
    setSortByValue(sortBy ? 'popularity.desc' : 'popularity.asc');
    setSortBy(!sortBy);
    setPageValue(pageNumber);
    setIsLoadingDiscoverList(true);
    setSearchText('');
  }, [sortBy]);
  const changeSearchText = useCallback(
    (val: string) => {
      setPageValue(pageNumber);
      setIsLoadingDiscoverList(true);
      setSelectedGenre(null);
      setSearchText(val);
      setIsLoadingSearchedList(true);
    },
    [searchText],
  );
  const changeSearchYear = useCallback(
    (val: string) => {
      const year = parseInt(val, 10);
      if (!isNaN(year)) {
        setSearchYear(year);
        setPageValue(pageNumber);
        setIsLoadingDiscoverList(true);
        // setSearchText('');
        setIsLoadingSearchedList(true);
      }
    },
    [searchYear],
  );
  const changeGenre = useCallback(
    (val: IMovie) => {
      setSelectedGenre(val);
      setPageValue(pageNumber);
      setIsLoadingDiscoverList(true);
      setSearchText('');
    },
    [selectedGenre],
  );
  // ************************* handle scroll down *******************************************

  const handleLoadMore = () => {
    if (
      !isFetching &&
      (pageValue < listData?.total_pages || pageValue < searchList?.total_pages)
    ) {
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
    <SafeAreaView style={Styles.container}>
      <Row style={Styles.rowContainer}>
        <SearchInput
          searchText={searchText}
          setSearchText={changeSearchText}
          placeHolder="Search"
          containerStyle={Styles.text}
        />
        <SearchInput
          searchText={searchYear}
          setSearchText={changeSearchYear}
          placeHolder="Year"
          containerStyle={Styles.year}
          keyboardType="numeric"
        />
        <IconTab
          iconName={sortBy ? 'sort-desc' : 'sort-asc'}
          iconType="octicon"
          onPress={changeSortBy}
        />
      </Row>
      <GenresTags
        selectedGenre={selectedGenre}
        setSelectedGenre={changeGenre}
        genresList={genres}
      />
      {isLoadingDiscoverList || isLoadingSearchedList ? (
        <VerticalListLoader />
      ) : (
        <View style={Styles.containerList}>
          <FlatList
            keyExtractor={(item: IMovie) => item.id?.toString()}
            showsVerticalScrollIndicator={false}
            data={searchText.length > 0 ? searchList?.results : list?.results}
            renderItem={({item}: any) => <MovieItem movie={item} />}
            style={Styles.list}
            onEndReached={() => handleLoadMore()}
            onEndReachedThreshold={0.5}
            ListFooterComponent={renderFooter}
            getItemLayout={(data, index) => ({
              length: responsiveHeight(35),
              offset: responsiveHeight(35) * index,
              index,
            })}
          />
        </View>
      )}
    </SafeAreaView>
  );
}

export {Discover};
