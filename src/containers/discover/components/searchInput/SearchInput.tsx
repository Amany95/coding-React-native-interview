import React, {useCallback} from 'react';
import {TextInput, TextStyle} from 'react-native';
import Styles from './Styles';

export const SearchInput: React.FC<{
  searchText: string | number;
  setSearchText: Function;
  containerStyle?: TextStyle;
  placeHolder: string;
  keyboardType?: string;
}> = ({
  searchText,
  setSearchText,
  containerStyle,
  placeHolder,
  keyboardType = 'search',
}) => {
  return (
    <TextInput
      placeholder={placeHolder}
      placeholderTextColor="#eee"
      style={[Styles.container, containerStyle]}
      value={searchText}
      keyboardType={keyboardType}
      onChangeText={(text: string) => {
        setSearchText(text);
        // searchForText(text);
      }}
      maxLength={40}
    />
  );
};
