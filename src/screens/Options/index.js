import React, {Component} from 'react';
import {Linking, SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {compose} from 'redux'
import {connect} from 'react-redux'
import styles from './styles';

// Import components

class Options extends Component {
  constructor() {
    super();
  }


  render() {
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <TouchableOpacity style={styles.buttonQuestion}
                          onPress={() => Linking.openURL('http://espictools.cat/') }
        >
          <Text style={styles.tagText}
                ellipsizeMode={'tail'}
                numberOfLines={1}>
            Sobre Nosotros
          </Text>
        </TouchableOpacity>
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
)(Options);
