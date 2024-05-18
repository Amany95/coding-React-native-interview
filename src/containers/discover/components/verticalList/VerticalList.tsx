import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, RefreshControl, View} from 'react-native';
import Styles from './Styles';
import {discoverListMock} from '../../../../constants/MockData';
import {IMovie} from '../../../../interfaces/DiscoverList';
import {MovieItem} from '../movieItem/MovieItem';

export const VerticalList: React.FC = () => {

  const [list, setList] = useState(discoverListMock);

  return (
    <View style={Styles.container}>
      <FlatList
        keyExtractor={(item: IMovie) => item.id?.toString()}
        showsVerticalScrollIndicator={false}
        data={list.results}
        renderItem={({item}: any) => <MovieItem movie={item} />}
        // refreshControl={
        //   <RefreshControl refreshing={isLoading} onRefresh={handleRefresh} />
        // }
        style={Styles.list}
      />
    </View>
  );
};
