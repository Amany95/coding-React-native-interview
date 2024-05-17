import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from '@rneui/themed';
import {Colors} from '../styles/Colors';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import {Home} from '../containers/home/screens/home/Home';
import {Discover} from '../containers/discover/screens/discover/Discover';
import {Favourite} from '../containers/favourite/screens/favourite/Favourite';

// ************ screens *********************

// ************ style *********************
const Tab = createBottomTabNavigator();

const navigationOptions = (
  label: string,
  iconName: string,
  iconType: string,
) => {
  return {
    tabBarIcon: ({focused}: {focused: boolean}) => {
      return (
        <View style={styles.tabIconContainer}>
          <Icon
            name={iconName}
            type={iconType}
            color={focused ? Colors.SecondaryColor : Colors.InactiveColor}
          />
          <Text style={[styles.tabLabel, focused && styles.tabLabelActive]}>
            {label}
          </Text>
        </View>
      );
    },
  };
};

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={navigationOptions('HOME', 'dots-three-horizontal', 'entypo')}
      />
      <Tab.Screen
        name="Discover"
        component={Discover}
        options={navigationOptions('DISCOVER', 'playcircleo', 'antdesign')}
      />
      <Tab.Screen
        name="Favourite"
        component={Favourite}
        options={navigationOptions('FAVOURITE', 'favorite-border', 'material')}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: Colors.PrimaryColor,
    height: '8%',
    borderWidth: 1,
    borderColor: Colors.PrimaryColor,
    paddingVertical: responsiveHeight(0.5),
  },

  tabIconContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabLabel: {
    color: 'gray',
    fontSize: responsiveFontSize(1.3),
    marginTop: responsiveHeight(0.5),
    letterSpacing: 1.5,
  },
  tabLabelActive: {
    color: Colors.SecondaryColor,
  },
});
export default BottomTabs;
