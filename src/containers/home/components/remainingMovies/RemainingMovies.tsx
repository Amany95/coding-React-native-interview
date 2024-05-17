import React, {useMemo, useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import {Icon} from '@rneui/themed';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import {FlashList} from '@shopify/flash-list';
import {ITopMovie} from '../../../../interfaces/TopRatedList';
import {topRatedListMock} from '../../../../constants/MockData';
import {ImgUrl} from '../../../../constants/Urls';
import Styles from './Styles';

export const RemainingMovies: React.FC<{}> = () => {
  const onClick = useNavigation();
  const [list, setList] = useState<ITopMovie[]>(
    topRatedListMock.results?.slice(1),
  );
  const estimatedListSize = useMemo(
    () => ({
      height: responsiveHeight(24),
      width: Dimensions.get('screen').width,
    }),
    [],
  );
  const onPress = () => {
    onClick.navigate('MovieDetails');
  };
  // *************************** render **********************************
  const renderItem = ({item, index}: {item: any; index: number}) => {
    return (
      <TouchableOpacity
        style={Styles.cardContainer as ViewStyle}
        onPress={onPress}>
        <FastImage
          style={Styles.imgStyle}
          source={{uri: `${ImgUrl}${item.poster_path}`}}
          resizeMode={FastImage.resizeMode.stretch}
        />
      </TouchableOpacity>
    );
  };
  return (
    <View style={Styles.container}>
      <Text style={Styles.titleTextStyle}>Top Rated</Text>

      {list?.length > 0 && (
        <FlashList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={list}
          renderItem={renderItem}
          estimatedItemSize={responsiveHeight(24)}
          estimatedListSize={estimatedListSize}
          keyExtractor={(item: any) => item.id.toString()}
        />
      )}
    </View>
  );
};
