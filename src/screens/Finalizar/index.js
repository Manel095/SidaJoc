import React, {Component} from 'react';
import {SafeAreaView, Text, TouchableOpacity, ScrollView, AsyncStorage, Image} from 'react-native';
import {compose} from 'redux'
import {connect} from 'react-redux'
import styles from './styles';

// Import components
import Header from '../../components/Header'
import Finish from '../../../assets/images/Casilla_Finish.png'


class Finalizar extends Component {
  constructor(props) {
    super(props);
  }

  clearAsyncStorage = async() => {
    AsyncStorage.clear();
    this.props.navigation.navigate('AuthStack')
  };


  render() {
    return (
      <SafeAreaView style={styles.safeAreaView}>

        <Header/>

        <ScrollView style={styles.scrollContainer}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}
        >

          <Image
            style={{
              width: '90%',
              height: 300,
              marginBottom: 24
            }}
            resizeMode={'contain'}
          source={Finish}
          />

          <Text style={styles.finishText}>
            ¡Felicidades!
          </Text>

          <Text style={styles.finishText}>
            Lo has logrado
          </Text>

        </ScrollView>

        <TouchableOpacity
          style={styles.buttonHomeEnd}
          onPress={() => this.clearAsyncStorage()}>
          <Text style={styles.buttonHomeEndText}>Finalizar</Text>
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
)(Finalizar);
