import React, {Component} from 'react';
import {SafeAreaView, TouchableOpacity, Text, ScrollView, Linking} from 'react-native';
import {compose} from 'redux'
import {connect} from 'react-redux'
import styles from './styles';

// Import components

class General extends Component {
    constructor() {
        super();
    }

    render() {
        return (
          <SafeAreaView style={styles.safeAreaView}>
              <ScrollView style={styles.scrollContainer}>
                  <TouchableOpacity style={styles.buttonQuestion}
                                    onPress={() => Linking.openURL('http://gtt-vih.org/files/active/0/InfoV_esp_31.pdf') }
                  >
                      <Text style={styles.tagText}
                            ellipsizeMode={'tail'}
                            numberOfLines={1}
                      >¿Qué es el sida?</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.buttonQuestion}
                                    onPress={() => Linking.openURL('http://gtt-vih.org/files/active/0/InfoV_esp_84.pdf') }
                  >
                      <Text style={styles.tagText}
                            ellipsizeMode={'tail'}
                            numberOfLines={1}
                      >Mitos y Realidades (I)</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.buttonQuestion}
                                    onPress={() => Linking.openURL('http://gtt-vih.org/files/active/0/InfoV_esp_85.pdf') }
                  >
                      <Text style={styles.tagText}
                            ellipsizeMode={'tail'}
                            numberOfLines={1}
                      >Mitos y Realidades (II)</Text>
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
)(General);
