import React, {Component} from 'react';
import {SafeAreaView, Text, TouchableOpacity, ScrollView, View, Modal, Image, AsyncStorage} from 'react-native';
import {compose} from 'redux'
import {connect} from 'react-redux'
import styles from './styles';
import Colors from '../../../theme/Colors';

// Import questions
import diagnostico from '../../data/preguntas/diagnostico'
import maternidad from '../../data/preguntas/maternidad';
import pregunton from '../../data/preguntas/pregunton';
import prevencion from '../../data/preguntas/prevencion';
import sexualidad from '../../data/preguntas/sexualidad';
import vias from '../../data/preguntas/vias';
import vih from '../../data/preguntas/vih';

// Import components
import Correcto from '../../../assets/icon/correcto.png'
import Incorrecto from '../../../assets/icon/incorrecto.png'

class Question extends Component {

  constructor(props) {
    super(props);

    const section = this.props.navigation.getParam('section', '');

    var questions = [];

    switch (section) {
      case 'Vias de transmisión':
        questions = vias;
        break;
      case 'Modos de prevención':
        questions = prevencion;
        break;
      case 'Diagnostico y tratamiento':
        questions = diagnostico;
        break;
      case 'Vivir con el VIH':
        questions = vih;
        break;
      case 'Maternidad y VIH':
        questions = maternidad;
        break;
      case 'Sexualidad y VIH':
        questions = sexualidad;
        break;
      case 'Preguntón':
        questions = pregunton;
        break;
      default:
        questions = [];
    }

    var currentQuestion = (Math.floor(Math.random() * (questions.length - 1) ));

    this.state = {
      error: true,
      click: false,
      response: true,
      buttonStyle1: {
        width: '80%',
        borderWidth: 2,
        borderColor: Colors.gray,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginTop: 24
      },
      buttonStyle2: {
        width: '80%',
        borderWidth: 2,
        borderColor: Colors.gray,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginTop: 24
      },
      buttonStyle3: {
        width: '80%',
        borderWidth: 2,
        borderColor: Colors.gray,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginTop: 24
      },
      modalVisibleCorrect: false,
      modalVisibleFalse: false,
      section: section,
      questions: questions,
      currentQuestion: currentQuestion,
      hits: this.props.navigation.getParam('hits', 0)
    };
  };

  async componentDidMount() {
    try {
      const start  = await AsyncStorage.getItem('start');
      const parsed = JSON.parse(start);
    }
    catch (error) {
      alert ('No se han guardado los aciertos')
    }
  };

  responseButton = () => {
    if (this.state.click === true) {
      return(
        <TouchableOpacity style={styles.buttonResponse}
                          onPress={() => this.response()}
        >
          <Text style={styles.buttonResponseText}>Responder</Text>
        </TouchableOpacity>
      );
    }

    return null
  };

  response1 = () => {
    {
      this.setState(
        {
          buttonStyle1: {
            width: '80%',
            borderWidth: 2,
            borderColor: Colors.title,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 8,
            marginTop: 24
          },
          buttonStyle2: {
            width: '80%',
            borderWidth: 2,
            borderColor: Colors.gray,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 8,
            marginTop: 24
          },
          buttonStyle3: {
            width: '80%',
            borderWidth: 2,
            borderColor: Colors.gray,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 8,
            marginTop: 24
          },
          click: true,
          error: this.state.questions[this.state.currentQuestion].one.error
        }
      )
    }
  };

  response2 = () => {
    this.setState(
      {
        buttonStyle1: {
          width: '80%',
          borderWidth: 2,
          borderColor: Colors.gray,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 8,
          marginTop: 24
        },
        buttonStyle2: {
          width: '80%',
          borderWidth: 2,
          borderColor: Colors.title,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 8,
          marginTop: 24
        },
        buttonStyle3: {
          width: '80%',
          borderWidth: 2,
          borderColor: Colors.gray,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 8,
          marginTop: 24
        },
        click: true,
        error: this.state.questions[this.state.currentQuestion].two.error
      }
    )
  };

  response3 = () => {
    this.setState(
      {
        buttonStyle1: {
          width: '80%',
          borderWidth: 2,
          borderColor: Colors.gray,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 8,
          marginTop: 24
        },
        buttonStyle2: {
          width: '80%',
          borderWidth: 2,
          borderColor: Colors.gray,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 8,
          marginTop: 24
        },
        buttonStyle3: {
          width: '80%',
          borderWidth: 2,
          borderColor: Colors.title,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 8,
          marginTop: 24
        },
        click: true,
        error: this.state.questions[this.state.currentQuestion].three.error
      }
    )
  };


  response = () => {
    if (this.state.error === 'true') {
      this.setState({
        modalVisibleFalse: true
      })
    }
    else {
      this.setState({
        modalVisibleCorrect: true
      })
    }
  };

  correctAnswer = () => {
    const onFinishCallback = this.props.navigation.getParam('onFinishCallback', null);

    if (this.state.hits >= 2) {
      this.setState({
        modalVisibleCorrect: false,
      });

      if (onFinishCallback) {
        onFinishCallback(this.state.hits + 1);
      }
      this.props.navigation.goBack()
    }
    else {
      if (onFinishCallback) {
        onFinishCallback(this.state.hits + 1);
      }

      this.setState({
        modalVisibleCorrect: false,
        currentQuestion: (this.state.currentQuestion + 1) % this.state.questions.length,
        hits: this.state.hits + 1
      })
    }

  };

  wrongAnswer = () => {
    this.setState({
      modalVisibleFalse: false,
      currentQuestion: (this.state.currentQuestion + 1) % this.state.questions.length
    })
  };

  render() {

    var titleCard = {
      width: '90%',
      height: 160,
      borderWidth: 2,
      borderColor: Colors.pregunton,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 8,
      marginTop: 72
    };

    if (this.state.section === 'Vias de transmisión') {
      titleCard = {
        width: '90%',
        height: 160,
        borderWidth: 2,
        borderColor: Colors.vias,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginTop: 72
      }
    };

    if (this.state.section === 'Modos de prevención') {
      titleCard = {
        width: '90%',
        height: 160,
        borderWidth: 2,
        borderColor: Colors.prevencion,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginTop: 72
      }
    };

    if (this.state.section === 'Diagnostico y tratamiento') {
      titleCard = {
        width: '90%',
        height: 160,
        borderWidth: 2,
        borderColor: Colors.diagnostico,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginTop: 72
      }
    };

    if (this.state.section === 'Vivir con el VIH') {
      titleCard = {
        width: '90%',
        height: 160,
        borderWidth: 2,
        borderColor: Colors.vih,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginTop: 72
      }
    };

    if (this.state.section === 'Maternidad y VIH') {
      titleCard = {
        width: '90%',
        height: 160,
        borderWidth: 2,
        borderColor: Colors.maternidad,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginTop: 72
      }
    };

    if (this.state.section === 'Sexualidad y VIH') {
      titleCard = {
        width: '90%',
        height: 160,
        borderWidth: 2,
        borderColor: Colors.sexualidad,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginTop: 72
      }
    };

    if (this.state.section === 'Pregunton') {
      titleCard = {
        width: '90%',
        height: 160,
        borderWidth: 2,
        borderColor: Colors.pregunton,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginTop: 72
      }
    };

    return (
      <SafeAreaView style={styles.safeAreaView}>
        <ScrollView
          style={{flex:1}}
          contentContainerStyle={{flexGrow:1, alignItems:'center'}}
        >
          <View style={titleCard}>
            <Text style={styles.textQuestionTitle}>
              {this.state.questions[this.state.currentQuestion].title}
            </Text>
          </View>

          <TouchableOpacity style={this.state.buttonStyle1}
                            onPress={() => this.response1()}
          >
            <Text style={styles.textQuestionResponse}>
              {this.state.questions[this.state.currentQuestion].one.title}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={this.state.buttonStyle2}
                            onPress={() => this.response2()}
          >
            <Text style={styles.textQuestionResponse}>
              {this.state.questions[this.state.currentQuestion].two.title}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={this.state.buttonStyle3}
                            onPress={() => this.response3()}
          >
            <Text style={styles.textQuestionResponse}>
              {this.state.questions[this.state.currentQuestion].three.title}
            </Text>
          </TouchableOpacity>

        </ScrollView>

        {this.responseButton()}

        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisibleCorrect}
        >
          <View style={styles.modalContent}>

            <Image
              source={Correcto}
            />

            <Text style={styles.textModal}>
              Correcto
            </Text>

            <TouchableOpacity
              style={{
                margin: 8,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: Colors.button,
                borderRadius: 8,
                borderWidth: 1,
                borderColor: Colors.title,
                width: '50%',
                height: 48
              }}
              onPress={() => this.correctAnswer()}
            >
              <Text
                style={{
                  color: Colors.white,
                  fontSize: 16
                }}
              >
                Siguiente
              </Text>
            </TouchableOpacity>

          </View>

        </Modal>

        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisibleFalse}
        >

          <View style={styles.modalContent}>

            <Image
              source={Incorrecto}
            />

            <Text style={styles.textModal}>
              Incorrecto
            </Text>

            <TouchableOpacity
              style={{
                margin: 8,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: Colors.button,
                borderRadius: 8,
                borderWidth: 1,
                borderColor: Colors.title,
                width: '50%',
                height: 48
              }}
              onPress={() => this.wrongAnswer()}
            >
              <Text
                style={{
                  color: Colors.white,
                  fontSize: 16
                }}
              >
                Siguiente
              </Text>
            </TouchableOpacity>

          </View>

        </Modal>

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
)(Question);
