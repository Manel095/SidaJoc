import React, {Component} from 'react';
import {SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  View,
  TextInput,
  AsyncStorage,
  ScrollView
} from 'react-native';
import {compose} from 'redux'
import {connect} from 'react-redux'
import styles from './styles';
import Logo from '../../../assets/images/SidaJocLogo.png';
import InformationIcon from '../../../assets/images/InformationIcon.png'
import Rules from '../../../assets/images/Rules.png'
import Colors from '../../../theme/Colors';
// Import components

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: null,
      lastname: null
    }
  }

  async componentDidMount() {
    try {
      const savedData  = await AsyncStorage.getItem('start');
      const parsed = JSON.parse(savedData);
      this.setState({lastname: parsed.name});
    }
    catch (error) {
      null
    }
  }

  continuarButton = () => {
    if (this.state.lastname) {
        return(
          <TouchableOpacity style={styles.buttonLoginStart}
                            onPress={() => this.props.navigation.navigate('MainStack')}
          >
            <Text style={styles.buttonLoginStartText}>Continuar Partida</Text>
          </TouchableOpacity>
        );
    }

    return null
  };


  goToInformation = () => {
    this.props.navigation.navigate('Information');
  };

  goToRules = () => {
    this.props.navigation.navigate('Rules');
  };

  goToStart = () => {
    if (this.state.text === null) {
      alert ('Debes introducir un nombre para comenzar')
    }

    else {
      AsyncStorage.clear();
      const start = {
        name: this.state.text,
        vias: 0,
        prevencion: 0,
        diagnostico: 0,
        vih: 0,
        maternidad: 0,
        sexualidad: 0,
        pregunton: 0
      };
      AsyncStorage.setItem('start', JSON.stringify(start));
      this.props.navigation.navigate('MainStack');

    }

  };

  render() {
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <ScrollView>


          <Image source={Logo} style={styles.logoContainer} resizeMode={'contain'}/>
          <TouchableOpacity style={styles.buttonLoginInformation}
                            onPress={() => this.goToInformation()}
          >
            <Text style={styles.buttonLoginInformationText}>Información</Text>
            <Image source={InformationIcon} resizeMode={'contain'}/>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonLoginRules}
                            onPress={() => this.goToRules()}
          >
            <Text style={styles.buttonLoginInformationText}>Reglas</Text>
            <Image source={Rules} resizeMode={'contain'}/>
          </TouchableOpacity>
          <View style={styles.divider}/>
          <View style={styles.nameLogin}>
            <TextInput
              style={{height: 40}}
              placeholder="Nombre de Usuario"
              onChangeText={(text) => this.setState({text})}
              placeholderTextColor={Colors.title}
              textAlign={'center'}
            />
          </View>
          <TouchableOpacity style={styles.buttonLoginStart}
                            onPress={() => this.goToStart()}
          >
            <Text style={styles.buttonLoginStartText}>Nueva Partida</Text>
          </TouchableOpacity>

          {this.continuarButton()}

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
)(Login);
