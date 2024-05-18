import React from 'react';
import {FlatList} from 'react-native';
import {genresListMock} from '../../../../constants/MockData';
import {Tag} from '../tag/Tag';

import Styles from './Styles';
import {IGenre, IGenresList} from '../../../../interfaces/GenresList';

export const GenresTags: React.FC<{
  selectedGenre: IGenre;
  setSelectedGenre: Function;
  genresList: IGenresList;
}> = ({selectedGenre, setSelectedGenre, genresList}) => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={genresList.genres}
      keyExtractor={(item: IGenre) => item.id.toString()}
      renderItem={({item}: any) => (
        <Tag
          genre={item}
          selectedGenre={selectedGenre}
          setSelectedGenre={setSelectedGenre}
        />
      )}
      style={Styles.list}
      contentContainerStyle={Styles.contentContainer}
    />
  );
};
