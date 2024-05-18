import React from 'react';
import ContentLoader, {Rect} from 'react-content-loader/native';
import {FlatList, StyleSheet, View} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {Colors} from '../../styles/Colors';

const Loader = () => {
  return (
    <View style={styles.cardContainer}>
      <ContentLoader backgroundColor="#363f4d" foregroundColor="#ecebeb">
        <Rect
          x={responsiveWidth(0)}
          y={responsiveHeight(0)}
          rx={20}
          ry={10}
          width={responsiveWidth(90)}
          height={responsiveHeight(30)}
        />
      </ContentLoader>
    </View>
  );
};

export const VerticalListLoader: React.FC = () => {
  const renderItem = () => <Loader />;

  const data = Array.from({length: 10});

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: responsiveWidth(4),
    backgroundColor: Colors.PrimaryColor,
    paddingTop: responsiveHeight(5),
  },
  cardContainer: {
    width: responsiveWidth(90),
    borderRadius: 10,
    height: responsiveHeight(30),
    marginBottom: responsiveHeight(2),
  },
});

