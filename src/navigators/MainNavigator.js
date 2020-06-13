import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import Colors from '../../theme/Colors';
// Import screens

import Home from '../screens/Home';
import Options from '../screens/Options';
import Question from '../screens/Questions';
import Finalizar from '../screens/Finalizar';


const MainNavigator = createStackNavigator(
  {
      Home: {
          screen: Home,
          navigationOptions: {
              headerShown: false,
          },
      },
    Options: {
        screen: Options,
        navigationOptions: {
            headerShown: true,
          title: 'Opciones',
          headerStyle: {
            backgroundColor: Colors.background,
          },
          headerTintColor: Colors.title,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        },
    },
    Question: {
      screen: Question,
      navigationOptions: {
        headerShown: true,
        title: 'Pregunta',
        headerStyle: {
          backgroundColor: Colors.background,
        },
        headerTintColor: Colors.title,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    },
    Finalizar: {
      screen: Finalizar,
      navigationOptions: {
        headerShown: false,
        title: 'Finalizar',
        headerStyle: {
          backgroundColor: Colors.background,
        },
        headerTintColor: Colors.title,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    }
},
  {
      initialRouteName: 'Home',
  }
);

export default MainNavigator;
