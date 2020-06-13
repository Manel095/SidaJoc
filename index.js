import {name as appName} from './app.json';
import Colors from 'theme/Colors';
import {AppRegistry, StatusBar} from 'react-native';
import React, {Component} from 'react';

//Import App
import App from './src/App';

// Redux
import {Provider} from 'react-redux';
import configureStore from './src/store/configureStore';
const store = configureStore();

// Disable yellow box
console.disableYellowBox = true;

class AppWrapper extends Component {
    render() {
        return (
            <Provider store={configureStore()}>
                <StatusBar backgroundColor={Colors.statusBar} barStyle="light-content" />
                <App/>
            </Provider>
        );
    }
}

AppRegistry.registerComponent(appName, () => AppWrapper);
