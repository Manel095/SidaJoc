import React, {Component} from 'react';
import {SafeAreaView, View, TouchableOpacity} from 'react-native';
import {compose} from 'redux';
import {connect} from 'react-redux';
import styles from './styles';

// Import components

class Splashscreen extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <SafeAreaView style={styles.safeAreaView}>

            </SafeAreaView>
        );
    }
}

const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default compose(
    connect( mapStateToProps, mapDispatchToProps )
)(Splashscreen);
