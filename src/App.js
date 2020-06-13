import React, {Component} from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {RouterContainer} from './navigators/Router';


class App extends Component {

  constructor() {
    super();

    this.state = {
      showSplashscreen: true
    }
  };

  componentDidMount() {

  };

  componentWillUnmount() {

  };

  render() {
    return (
      <RouterContainer/>
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
  connect( mapStateToProps, mapDispatchToProps )
)(App);
