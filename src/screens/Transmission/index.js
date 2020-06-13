import React, {Component} from 'react';
import {SafeAreaView, TouchableOpacity, Linking, Text, ScrollView} from 'react-native';
import {compose} from 'redux'
import {connect} from 'react-redux'
import styles from './styles';

// Import components

class Transmission extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <SafeAreaView style={styles.safeAreaView}>
                <ScrollView style={styles.scrollContainer}>
                    <TouchableOpacity style={styles.buttonQuestion}
                                      onPress={() => Linking.openURL('http://gtt-vih.org/files/active/0/InfoV_esp_64.pdf') }
                    >
                        <Text style={styles.tagText}
                              ellipsizeMode={'tail'}
                              numberOfLines={1}
                        >Transmisión del VIH</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonQuestion}
                                      onPress={() => Linking.openURL('http://gtt-vih.org/files/active/0/InfoV_esp_76.pdf') }
                    >
                        <Text style={styles.tagText}
                              ellipsizeMode={'tail'}
                              numberOfLines={1}
                        >Datos sobre la transmisión del VIH</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonQuestion}
                                      onPress={() => Linking.openURL('http://gtt-vih.org/files/active/0/InfoV_esp_77.pdf') }
                    >
                        <Text style={styles.tagText}
                              ellipsizeMode={'tail'}
                              numberOfLines={1}
                        >Transmisión del VIH y carga viral</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonQuestion}
                                      onPress={() => Linking.openURL('http://gtt-vih.org/files/active/0/InfoV_103_esp.pdf') }
                    >
                        <Text style={styles.tagText}
                              ellipsizeMode={'tail'}
                              numberOfLines={1}
                        >Transmisión del VIH</Text>
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
)(Transmission);
