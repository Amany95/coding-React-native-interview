import React, {useCallback} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {IGenre} from '../../../../interfaces/GenresList';
import Styles from './Styles';

export const Tag: React.FC<{
  genre: IGenre;
  selectedGenre: IGenre;
  setSelectedGenre: Function;
}> = ({genre, selectedGenre, setSelectedGenre}) => {
  const handlePress = useCallback(() => {
    setSelectedGenre(genre);
  }, [genre, setSelectedGenre]);
  return (
    <TouchableOpacity
      style={[
        Styles.container,
        selectedGenre?.id === genre?.id && Styles.selected,
      ]}
      onPress={handlePress}>
      <Text style={Styles.text}>{`${genre.name}`}</Text>
    </TouchableOpacity>
  );
};
