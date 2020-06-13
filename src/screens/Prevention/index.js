import React, {Component} from 'react';
import {SafeAreaView, View, TouchableOpacity, Linking, Text, ScrollView} from 'react-native';
import {compose} from 'redux'
import {connect} from 'react-redux'
import styles from './styles';

// Import components

class Prevention extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <SafeAreaView style={styles.safeAreaView}>
                <ScrollView style={styles.scrollContainer}>
                    <TouchableOpacity style={styles.buttonQuestion}
                                      onPress={() => Linking.openURL('http://gtt-vih.org/files/active/0/InfoV_esp_14.pdf') }
                    >
                        <Text style={styles.tagText}
                              ellipsizeMode={'tail'}
                              numberOfLines={1}
                        >Sexo sin protección</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonQuestion}
                                      onPress={() => Linking.openURL('http://gtt-vih.org/files/active/0/InfoV_esp_19.pdf') }
                    >
                        <Text style={styles.tagText}
                              ellipsizeMode={'tail'}
                              numberOfLines={1}
                        >Condones</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonQuestion}
                                      onPress={() => Linking.openURL('http://gtt-vih.org/files/active/0/InfoV_esp_64.pdf') }
                    >
                        <Text style={styles.tagText}
                              ellipsizeMode={'tail'}
                              numberOfLines={1}
                        >Transmisión del VIH</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonQuestion}
                                      onPress={() => Linking.openURL('http://gtt-vih.org/files/active/1/infovihtal_148_esp.pdf') }
                    >
                        <Text style={styles.tagText}
                              ellipsizeMode={'tail'}
                              numberOfLines={1}
                        >Prevención Combinada de las ITS</Text>
                    </TouchableOpacity>
                </ScrollView>
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
)(Prevention);
