import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabs from './BottomTabs';
import {NavigationContainer} from '@react-navigation/native';
import {MovieDetails} from '../containers/movies/screens/movieDetails/MovieDetails';

const Stack = createStackNavigator();
const linking = {
  prefixes: ['mytask://'],
  config: {
    screens: {
      BottomTabs: {
        screens: {
          Home: 'home',
          Discover: 'discover',
          Favourite: 'favourite',
        },
      },
    },
  },
};
function StackNavigator(): JSX.Element {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator initialRouteName="BottomTabs">
        <Stack.Screen
          name="BottomTabs"
          component={BottomTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MovieDetails"
          component={MovieDetails}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export {StackNavigator};
