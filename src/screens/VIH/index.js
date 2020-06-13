import React, {Component} from 'react';
import {SafeAreaView, View, TouchableOpacity, Text, Linking, ScrollView} from 'react-native';
import {compose} from 'redux'
import {connect} from 'react-redux'
import styles from './styles';

// Import components

class Vih extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <SafeAreaView style={styles.safeAreaView}>
                <ScrollView style={styles.scrollContainer}>
                    <TouchableOpacity style={styles.buttonQuestion}
                                      onPress={() => Linking.openURL('http://gtt-vih.org/files/active/0/InfoV_esp_59.pdf') }
                    >
                        <Text style={styles.tagText}
                              ellipsizeMode={'tail'}
                              numberOfLines={1}
                        >Básicos: siete maneras de velar por tu salud</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonQuestion}
                                      onPress={() => Linking.openURL('http://gtt-vih.org/files/active/1/InfoV_133_esp.pdf') }
                    >
                        <Text style={styles.tagText}
                              ellipsizeMode={'tail'}
                              numberOfLines={1}
                        >Ocho maneras de velar por tu salud</Text>
                    </TouchableOpacity>

                </ScrollView>
            </SafeAreaView>
        );
    }
};

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
)(Vih);
