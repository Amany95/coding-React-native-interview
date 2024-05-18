import React from 'react';
import {FlatList} from 'react-native';
import {genresListMock} from '../../../../constants/MockData';
import {Tag} from '../tag/Tag';

import Styles from './Styles';
import {IGenre} from '../../../../interfaces/GenresList';

export const GenresTags: React.FC<{
  selectedGenre: IGenre;
  setSelectedGenre: Function;
}> = ({selectedGenre, setSelectedGenre}) => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={genresListMock.genres}
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
