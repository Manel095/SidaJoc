import React, {Component} from 'react';
import {SafeAreaView, View, TouchableOpacity, ScrollView, Linking, Text} from 'react-native';
import {compose} from 'redux'
import {connect} from 'react-redux'
import styles from './styles';

// Import components

class Treatment extends Component {
    constructor() {
        super();
    }

    render() {
        return (
          <SafeAreaView style={styles.safeAreaView}>
              <ScrollView style={styles.scrollContainer}>
                  <Text style={styles.subSectionText}>Diagnóstico</Text>
                  <TouchableOpacity style={styles.buttonQuestion}
                                    onPress={() => Linking.openURL('http://gtt-vih.org/files/active/1/InfoV_esp_01.pdf') }
                  >
                      <Text style={styles.tagText}
                            ellipsizeMode={'tail'}
                            numberOfLines={1}
                      >¿Te han diagnosticado el VIH recientemente?</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.buttonQuestion}
                                    onPress={() => Linking.openURL('http://gtt-vih.org/files/active/0/InfoV_esp_32.pdf') }
                  >
                      <Text style={styles.tagText}
                            ellipsizeMode={'tail'}
                            numberOfLines={1}
                      >Análisis del VIH</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.buttonQuestion}
                                    onPress={() => Linking.openURL('http://gtt-vih.org/files/active/0/InfoV_esp_75.pdf') }
                  >
                      <Text style={styles.tagText}
                            ellipsizeMode={'tail'}
                            numberOfLines={1}
                      >La prueba del VIH</Text>
                  </TouchableOpacity>

                  <Text style={styles.subSectionText}>Tratamiento</Text>

                  <TouchableOpacity style={styles.buttonQuestion}
                                    onPress={() => Linking.openURL('http://gtt-vih.org/files/active/0/InfoV_esp_03_re.pdf') }
                  >
                      <Text style={styles.tagText}
                            ellipsizeMode={'tail'}
                            numberOfLines={1}
                      >Terapia anti-VIH</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.buttonQuestion}
                                    onPress={() => Linking.openURL('http://gtt-vih.org/files/active/0/InfoV_esp_04.pdf') }
                  >
                      <Text style={styles.tagText}
                            ellipsizeMode={'tail'}
                            numberOfLines={1}
                      >
                          Consejos de adhesión</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.buttonQuestion}
                                    onPress={() => Linking.openURL('http://gtt-vih.org/files/active/0/InfoV_esp_61.pdf') }
                  >
                      <Text style={styles.tagText}
                            ellipsizeMode={'tail'}
                            numberOfLines={1}
                      >
                          Básicos: cómo funciona el tratamiento</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.buttonQuestion}
                                    onPress={() => Linking.openURL('http://gtt-vih.org/files/active/0/InfoV_esp_66.pdf') }
                  >
                      <Text style={styles.tagText}
                            ellipsizeMode={'tail'}
                            numberOfLines={1}
                      >
                          Básicos: tomar los fármacos a su hora
                      </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.buttonQuestion}
                                    onPress={() => Linking.openURL('http://gtt-vih.org/files/active/1/InfoV_131_esp.pdf') }
                  >
                      <Text style={styles.tagText}
                            ellipsizeMode={'tail'}
                            numberOfLines={1}
                      >
                          Los pasos del tratamiento del VIH
                      </Text>
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
)(Treatment);
