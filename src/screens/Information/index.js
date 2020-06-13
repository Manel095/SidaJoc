import React, {Component} from 'react';
import {SafeAreaView, View, TouchableOpacity, Text, ScrollView} from 'react-native';
import {compose} from 'redux'
import {connect} from 'react-redux'
import styles from './styles';

// Import components

class Information extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <SafeAreaView style={styles.safeAreaView}>
                <Text style={styles.textHeader}>
                    Este apartado te servirá como apoyo y formación para poder contestar a todas las preguntas del SidaJoc
                </Text>
                <ScrollView style={styles.scrollContainer}>

                    <TouchableOpacity style={styles.buttonQuestion}
                                      onPress={() => this.props.navigation.navigate('General')}
                    >
                        <Text style={styles.tagText}>General</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonQuestion}
                    onPress={() => this.props.navigation.navigate('Transmission')}
                    >
                        <Text style={styles.tagText}>Vias de transmisión</Text>
                        <View style={styles.tagVia}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonQuestion}
                                      onPress={() => this.props.navigation.navigate('Prevention')}
                    >
                        <Text style={styles.tagText}>Modos de prevención</Text>
                        <View style={styles.tagPrevencion}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonQuestion}
                                      onPress={() => this.props.navigation.navigate('Treatment')}
                    >
                        <Text style={styles.tagText}>Diagnostico y tratamiento</Text>
                        <View style={styles.tagDiagnostico}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonQuestion}
                                      onPress={() => this.props.navigation.navigate('Vih')}>
                        <Text style={styles.tagText}>Vivir con el VIH</Text>
                        <View style={styles.tagVIH}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonQuestion}
                                      onPress={() => this.props.navigation.navigate('Maternidad')}
                    >
                        <Text style={styles.tagText}>Maternidad y VIH</Text>
                        <View style={styles.tagMaternidad}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonQuestion}
                                      onPress={() => this.props.navigation.navigate('Pregunton')}
                    >
                        <Text style={styles.tagText}>Preguntón</Text>
                        <View style={styles.tagPregunton}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonQuestion}
                                      onPress={() => this.props.navigation.navigate('Sexualidad')}
                    >
                        <Text style={styles.tagText}>Sexualidad y VIH</Text>
                        <View style={styles.tagSexualidad}/>
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
)(Information);
