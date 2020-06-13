import React, {Component} from 'react';
import {SafeAreaView, View, ScrollView, Text, Image} from 'react-native';
import {compose} from 'redux'
import {connect} from 'react-redux'
import styles from './styles';
import Example from '../../../assets/images/SectionExample.png'

// Import components

class Rules extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <SafeAreaView style={styles.safeAreaView}>
                <View style={styles.scrollContainer}>
                    <ScrollView style={styles.scrollContainer}>
                        <Text style={styles.textTitle}>Introducción</Text>
                        <Text
                          style={styles.textRules}
                        >
                            El Proyecto de este juego surge como una iniciativa enmarcada en el proyecto de formación de
                            mujeres africanas como agentes de salud que ha sido llevado a cabo entre la Unitat de Malalties
                            Tropicals-D.A.P. Ciutat Vella (ICS) y ACSAR en Barcelona, AIDS & Mobility en Amsterdam, el Service
                            Social des Etrangers En Bruselas, y AIDES en París.
                        </Text>

                        <Text
                          style={styles.textRules}
                        >
                        Se ha llevado a cabo con el soporte de la Comunidad Económica Europea y con el Programa de
                        PrevencIó i Assistència de la SIDA del Departament de Sanitat de la Generalitat de Catalunya.
                    </Text>

                        <Text style={styles.textTitle}>Estructura del Juego</Text>

                        <Text
                          style={styles.textRules}
                        >
                            El Juego para móvil consta de las siguientes temáticas:
                        </Text>

                        <Text
                          style={styles.textRules}
                        >
                            -<Text style={{fontWeight: "bold"}}>Vías de transmisión</Text>: Trata la transmisión del SIDA por sus vías principales.
                        </Text>

                        <Text
                          style={styles.textRules}
                        >
                            -<Text style={{fontWeight: "bold"}}>Modos de prevención</Text>: Trata la prevención del SIDA en el propio individuo.
                        </Text>

                        <Text
                          style={styles.textRules}
                        >
                            -<Text style={{fontWeight: "bold"}}>Diagnóstico y tratamiento</Text>: Explora los métodos para la diagnosis y en el caso de tener el SIDA como tratarlo.
                        </Text>

                        <Text
                          style={styles.textRules}
                        >
                            -<Text style={{fontWeight: "bold"}}>Vivir con el VIH</Text>: Como influye y afecta los aspectos básicos como la alimentación o el cuidado de los niños, en el dia a dia de una persona con seropositiva.
                        </Text>

                        <Text
                          style={styles.textRules}
                        >
                            -<Text style={{fontWeight: "bold"}}>Sexualidad y SIDA</Text>: Trata la transmisión del SIDA por vía sexual y los modos de prevenrla.
                        </Text>

                        <Text
                          style={styles.textRules}
                        >
                            -<Text style={{fontWeight: "bold"}}>Maternidad y SIDA</Text>: Trata el tema de la maternidad no sólo en la relación directa, sino también en
                            relación al papel que juegan las madres al tratar el tema de la prevención de SIDA en los hijos. Este es un apartado importante dentro de un programa destinado a mujeres.
                        </Text>

                        <Text
                          style={styles.textRules}
                        >
                            -<Text style={{fontWeight: "bold"}}>Preguntón</Text>: Para las preguntas más dificiles.
                        </Text>

                        <Text style={styles.textTitle}>Reglas</Text>

                        <Text
                          style={styles.textRules}
                        >
                            El juego consiste en contestar a las preguntas de cada bloque hasta responder de forma correcta tres de cada uno de los apartados.

                        </Text>

                        <Image
                          source={Example}
                          style={styles.imageScroll}
                        />

                        <Text
                          style={styles.textRules}
                        >
                            Al completar todos los apartados el juego habrá terminado, para ello recomendamos leer el apartado "Infromación" para poder contestar todas las preguntas sin problemas.
                        </Text>

                        <Text
                          style={styles.textRulesFinal}
                        >
                            La partida finaliza si el jugador falla 3 preguntas de cualquiera de los bloques principales.

                        </Text>
                    </ScrollView>
                </View>

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
)(Rules);
