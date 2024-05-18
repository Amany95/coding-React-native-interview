import React, {useCallback, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {GenresTags} from '../../components/genresTags/GenresTags';
import {genresListMock} from '../../../../constants/MockData';
import {VerticalList} from '../../components/verticalList/VerticalList';

import Styles from './Styles';
import {SearchInput} from '../../components/searchInput/SearchInput';
import {Row} from '../../../../components/row/Row';
import {IconTab} from '../../../../components/iconTab/IconTab';

function Discover(): JSX.Element {
  const [selectedGenre, setSelectedGenre] = useState(genresListMock.genres[0]);
  const [searchText, setSearchText] = useState('');
  const [searchYear, setSearchYear] = useState('');
  const [sortBy, setSortBy] = useState(false);

  const changeSortBy = useCallback(() => {
    setSortBy(!sortBy);
  }, [sortBy]);
  return (
    <SafeAreaView style={Styles.container}>
      <Row style={Styles.rowContainer}>
        <SearchInput
          searchText={searchText}
          setSearchText={setSearchText}
          placeHolder="Search"
          containerStyle={Styles.text}
        />
        <SearchInput
          searchText={searchYear}
          setSearchText={setSearchYear}
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
        setSelectedGenre={setSelectedGenre}
      />
      <VerticalList />
    </SafeAreaView>
  );
}

export {Discover};
