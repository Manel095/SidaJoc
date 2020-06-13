import React, {Component} from 'react';
import {SafeAreaView, View, TouchableOpacity, Linking, Text, ScrollView} from 'react-native';
import {compose} from 'redux'
import {connect} from 'react-redux'
import styles from './styles';

// Import components

class Maternidad extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <SafeAreaView style={styles.safeAreaView}>
                <ScrollView style={styles.scrollContainer}>
                    <TouchableOpacity style={styles.buttonQuestion}
                                      onPress={() => Linking.openURL('http://gtt-vih.org/files/active/0/InfoV_esp_41.pdf') }
                    >
                        <Text style={styles.tagText}
                              ellipsizeMode={'tail'}
                              numberOfLines={1}
                        >Embarazo y anticoncepción</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonQuestion}
                                      onPress={() => Linking.openURL('http://gtt-vih.org/files/active/0/InfoV_esp_43.pdf') }
                    >
                        <Text style={styles.tagText}
                              ellipsizeMode={'tail'}
                              numberOfLines={1}
                        >Transmisión de madre a hijo/a</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonQuestion}
                                      onPress={() => Linking.openURL('http://gtt-vih.org/files/active/0/InfoV_esp_65.pdf') }
                    >
                        <Text style={styles.tagText}
                              ellipsizeMode={'tail'}
                              numberOfLines={1}
                        >Básicos: tener un bebé</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonQuestion}
                                      onPress={() => Linking.openURL('http://gtt-vih.org/files/active/0/InfoV_112_esp.pdf') }
                    >
                        <Text style={styles.tagText}
                              ellipsizeMode={'tail'}
                              numberOfLines={1}
                        >Tener un bebé</Text>
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
)(Maternidad);
