import React from 'react';
import {StatusBar, View} from 'react-native';
import {MainMovie} from '../../components/mainMovie/MainMovie';
import {RemainingMovies} from '../../components/remainingMovies/RemainingMovies';

import Styles from './Styles';

function Home(): JSX.Element {
  return (
    <View style={Styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <MainMovie />
      <RemainingMovies />
    </View>
  );
}

export {Home};
