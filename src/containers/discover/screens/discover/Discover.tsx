import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {GenresTags} from '../../components/genresTags/GenresTags';
import {genresListMock} from '../../../../constants/MockData';
import {VerticalList} from '../../components/verticalList/VerticalList';

import Styles from './Styles';

function Discover(): JSX.Element {
  const [selectedGenre, setSelectedGenre] = useState(genresListMock.genres[0]);
  return (
    <SafeAreaView style={Styles.container}>
      <GenresTags
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
      />
      <VerticalList />
    </SafeAreaView>
  );
}

export {Discover};
