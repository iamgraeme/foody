/*
 * app/navigators/MainStack/config.js
 * Config file for MainStack.
 */

import { createStackNavigator, createAppContainer } from 'react-navigation';

import MainTabs from 'app/navigators/MainTabs';

// configure the screens that will be accessible in this router
const routeConfiguration = {
  MainTabs: {
    screen: MainTabs
  }
};

// navigator config (docs on react-navigation website.)
const navigatorConfiguration = {
  headerMode: 'none'
};

// set title of initial screen
export const InitialScreen = 'MainTabs';

// export the StackNavigator object
export const MainStack = createAppContainer(createStackNavigator(routeConfiguration, navigatorConfiguration));
