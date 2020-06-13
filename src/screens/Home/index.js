import React, {Component} from 'react';
import {SafeAreaView, TouchableOpacity, Text, AsyncStorage, View, FlatList, Image} from 'react-native';
import {compose} from 'redux';
import {connect} from 'react-redux';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';


// Import components
import Header from '../../components/Header';
import Colors from '../../../theme/Colors';

const DATA = [
  {
    title: 'Vias de transmisión',
    image: require('../../../assets/images/Vias_de_transmision.png'),
    style: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.vias,
      padding: 4,
      borderRadius: 4
    },
  },
  {
    title: 'Modos de prevención',
    image: require('../../../assets/images/Modos_de_prevención.png'),
    style: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.prevencion,
      padding: 4,
      borderRadius: 4
    },
  },
  {
    title: 'Diagnostico y tratamiento',
    image: require('../../../assets/images/Diagnostico_y_tratamiento.png'),
    style: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.diagnostico,
      padding: 4,
      borderRadius: 4
    },
  },
  {
    title: 'Vivir con el VIH',
    image: require('../../../assets/images/Vivir_con_el_VIH.png'),
    style: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.vih,
      padding: 4,
      borderRadius: 4
    },
  },
  {
    title: 'Maternidad y VIH',
    image: require('../../../assets/images/Maternidad_y_VIH.png'),
    style: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.maternidad,
      padding: 4,
      borderRadius: 4
    },
  },
  {
    title: 'Sexualidad y VIH',
    image: require('../../../assets/images/Sexualidad_y_VIH.png'),
    style: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.sexualidad,
      padding: 4,
      borderRadius: 4
    },
  },
  {
    title: 'Preguntón',
    image: require('../../../assets/images/Pregunton.png'),
    style: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.pregunton,
      padding: 4,
      borderRadius: 4
    },
  },
];



class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      vias: 0,
      prevencion: 0,
      diagnostico: 0,
      vih: 0,
      maternidad: 0,
      sexualidad: 0,
      pregunton: 0
    }
  }

  async componentDidMount() {
    try {
      const start  = await AsyncStorage.getItem('start');
      const parsed = JSON.parse(start);

      this.setState({text: parsed.name, vias: parsed.vias, prevencion: parsed.prevencion, diagnostico: parsed.diagnostico,
      vih: parsed.vih, maternidad: parsed.maternidad, sexualidad: parsed.sexualidad, pregunton: parsed.pregunton
      });
    }
    catch (error) {
      alert ('No se ha guardado el usuario')
    }
  };

  updateHits = (hits, section) => {

    var key = null;
    switch (section) {
      case 'Vias de transmisión':
        key = "vias";
        break;
      case 'Modos de prevención':
        key = "prevencion";
        break;
      case 'Diagnostico y tratamiento':
        key = "diagnostico";
        break;
      case 'Vivir con el VIH':
        key = "vih";
        break;
      case 'Maternidad y VIH':
        key = "maternidad";
        break;
      case 'Sexualidad y VIH':
        key = "sexualidad";
        break;
      case 'Preguntón':
        key = "pregunton";
        break;
    }

    var start = {
      name: this.state.text,
      vias: this.state.vias,
      prevencion: this.state.prevencion,
      diagnostico: this.state.diagnostico,
      vih: this.state.vih,
      maternidad: this.state.maternidad,
      sexualidad: this.state.sexualidad,
      pregunton: this.state.pregunton
    };
    start[key] = hits;

    this.setState({ [key]: hits });
    AsyncStorage.setItem('start', JSON.stringify(start));
  };

  endGame() {
    this.props.navigation.navigate('Finalizar');
  };

  renderItem (item) {

    var hits = 0;
    switch (item.title) {
      case 'Vias de transmisión':
        hits = this.state.vias;
        break;
      case 'Modos de prevención':
        hits = this.state.prevencion;
        break;
      case 'Diagnostico y tratamiento':
        hits = this.state.diagnostico;
        break;
      case 'Vivir con el VIH':
        hits = this.state.vih;
        break;
      case 'Maternidad y VIH':
        hits = this.state.maternidad;
        break;
      case 'Sexualidad y VIH':
        hits = this.state.sexualidad;
        break;
      case 'Preguntón':
        hits = this.state.pregunton;
        break;
      default:
        hits = 0;
    }

    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => this.props.navigation.navigate('Question', { section: item.title, hits: hits, onFinishCallback: (hits) => this.updateHits(hits, item.title) })}
        disabled={hits >= 3}
      >
        <Image
          source={item.image}
          style={{margin: 8, height:'90%', width:'45%',resizeMode: 'contain'}}
        />
        <View style={{height: '100%', width: 1, backgroundColor: Colors.title, marginRight: 4, marginLeft:4}}/>
        <View style={{flexDirection: 'column', flex: 1}}>
          <Text style={{fontSize: 16, color: Colors.title, fontWeight: 'bold', marginBottom: 16, marginTop:16, marginLeft: 4}}>
            {item.title}
          </Text>
          <View>
            <View>

            </View>
            <View style={styles.iconGo}>
              <View
                style={item.style}>
                <Text style={{color:Colors.white, fontSize: 12}}>
                  {hits}/3 Aciertos
                </Text>
              </View>

              <Icon color={Colors.title} size={24} name={'ios-arrow-round-forward'}/>
            </View>

          </View>
        </View>

      </TouchableOpacity>
    );
  };

  endButton = () => {
    if (this.state.vias == '3' && this.state.prevencion == '3' && this.state.diagnostico == '3' && this.state.vih == '3' && this.state.maternidad == '3' && this.state.sexualidad == '3' && this.state.pregunton == '3') {
      return(
        <TouchableOpacity
          style={styles.buttonHomeEnd}
          onPress={() => this.endGame()}>
          <Text style={styles.buttonHomeEndText}>Finalizar partida</Text>
        </TouchableOpacity>
      );
    }};

  render() {
    return (
      <SafeAreaView style={styles.safeAreaView}>

        <Header/>

        <View style={styles.nameTag}>
          <Text style={styles.nameTagText}>{this.state.text}</Text>
        </View>

        <FlatList
          alwaysBounceVertical={false}
          showsVerticalScrollIndicator={false}
          data={DATA}
          renderItem={({ item }) => this.renderItem(item)}
          style={{flex:1}}
          contentContainerStyle={{marginLeft: 16 ,marginRight: 16, flexGrow: 1}}
        />
        {this.endButton()}

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
)(Home);
