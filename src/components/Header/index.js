import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {compose} from 'redux'
import {connect} from 'react-redux'
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../../../theme/Colors';
import {withNavigation} from 'react-navigation';

// Import components

class Header extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.sidajocText}>
          SidaJoc
        </Text>
        <TouchableOpacity style={styles.buttonOptions}
                          onPress={() => this.props.navigation.navigate('Options')}>
          <Icon name={'md-settings'} size={24} color={Colors.title}/>
        </TouchableOpacity>
      </View>
    );
  };

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
  withNavigation,
  connect( mapStateToProps, mapDispatchToProps )
)(Header);
