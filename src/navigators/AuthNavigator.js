import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import Colors from '../../theme/Colors';
// Import screens
import Login from '../screens/Login/index';
import Information from '../screens/Information';
import Rules from '../screens/Rules';
import Transmission from '../screens/Transmission';
import Prevention from '../screens/Prevention';
import Treatment from '../screens/Treatment';
import Vih from '../screens/VIH';
import Maternidad from '../screens/Maternidad';
import Pregunton from '../screens/Pregunton';
import Sexualidad from '../screens/Sexualidad';
import General from '../screens/General';


const AuthNavigator = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        headerShown: false,
      },
    },
    Information: {
      screen: Information,
      navigationOptions: {
        headerShown: true,
        title: 'Información',
        headerStyle: {
          backgroundColor: Colors.background,
        },
        headerTintColor: Colors.title,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    },
    Rules: {
      screen: Rules,
      navigationOptions: {
        headerShown: true,
        title: 'Reglas',
        headerStyle: {
          backgroundColor: Colors.background,
        },
        headerTintColor: Colors.title,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    },
    Transmission: {
      screen: Transmission,
      navigationOptions: {
        headerShown: true,
        title: 'Vías de transmission',
        headerStyle: {
          backgroundColor: Colors.background,
        },
        headerTintColor: Colors.title,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    },
    Prevention: {
      screen: Prevention,
      navigationOptions: {
        headerShown: true,
        title: 'Modos de Prevención',
        headerStyle: {
          backgroundColor: Colors.background,
        },
        headerTintColor: Colors.title,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    },
    Treatment: {
      screen: Treatment,
      navigationOptions: {
        headerShown: true,
        title: 'Diagnóstico y tratamiento',
        headerStyle: {
          backgroundColor: Colors.background,
        },
        headerTintColor: Colors.title,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    },
    Vih: {
      screen: Vih,
      navigationOptions: {
        headerShown: true,
        title: 'Vivir con el VIH',
        headerStyle: {
          backgroundColor: Colors.background,
        },
        headerTintColor: Colors.title,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    },
    Maternidad: {
      screen: Maternidad,
      navigationOptions: {
        headerShown: true,
        title: 'Maternidad y VIH',
        headerStyle: {
          backgroundColor: Colors.background,
        },
        headerTintColor: Colors.title,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    },
    Pregunton: {
      screen: Pregunton,
      navigationOptions: {
        headerShown: true,
        title: 'Preguntón',
        headerStyle: {
          backgroundColor: Colors.background,
        },
        headerTintColor: Colors.title,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    },
    Sexualidad: {
      screen: Sexualidad,
      navigationOptions: {
        headerShown: true,
        title: 'Sexualidad y VIH',
        headerStyle: {
          backgroundColor: Colors.background,
        },
        headerTintColor: Colors.title,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    },
    General: {
      screen: General,
      navigationOptions: {
        headerShown: true,
        title: 'General',
        headerStyle: {
          backgroundColor: Colors.background,
        },
        headerTintColor: Colors.title,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    },
  },
  {
    initialRouteName: 'Login',
  }
);

export default AuthNavigator;
