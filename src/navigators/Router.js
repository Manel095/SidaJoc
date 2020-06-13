import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

// Import navigators
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';

export const RouterNavigation = createSwitchNavigator(
  {
    AuthStack: AuthNavigator,
    MainStack: MainNavigator,
  },
  {
    initialRouteName: 'AuthStack',
  },
);

export const RouterContainer = createAppContainer(RouterNavigation);
