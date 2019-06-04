/*
 * app/navigators/MainTabs/config.js
 * Config file for MainTabs.
 */

import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { colors } from 'app/config/styles';

import Home from 'app/screens/Home';
import Discover from 'app/screens/Discover';
import Favorites from 'app/screens/Favorites';
import Profile from 'app/screens/Profile';

// configure the screens that will be accessible in this router
const routeConfiguration = {
  Home,
  Discover,
  Favorites,
  Profile
};

// navigator config (docs on react-navigation website.)
const navigatorConfiguration = {
  lazy: true,
  backBehavior: 'none',
  swipeEnabled: false,
  animationEnabled: false,
  tabBarPosition: 'bottom',
  borderTopColor: 'transparent',
  tabBarOptions: {
    activeTintColor: colors.primary,
    style: {
      height: 75,
      paddingVertical: 10
    }
  }
};

// set the initial screen
export const InitialScreen = 'Home';

// export the TabNavigator object
export const MainTabs = createAppContainer(createBottomTabNavigator(routeConfiguration, navigatorConfiguration));
