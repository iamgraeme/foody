/*
 * app/screens/Home
 */

// import react and react-native elements
import React, { Component } from 'react';
import { View, Text, Button, Image } from 'react-native';
import PropTypes from 'prop-types';
import { AppContainer } from 'app/layouts';
import { HeaderWithSearch } from 'app/components';

// import redux functions to connect controller to app state
import { connect } from 'react-redux';

// import MainStack navigation controller
import { MainStack } from 'app/navigators';

// import screens styles
import styles from './styles';

class Home extends Component {
	// Define tab options
	static navigationOptions = () => {
	  return {
	    title: 'Home',
	    tabBarLabel: 'Home',
	    tabBarIcon: ({ tintColor, focused }) => {
	      return <Image style={{ tintColor }} source={require('app/assets/images/icons/Home.png')} />;
	    }
	  };
	};

	static propTypes = {
	  MainStackActions: PropTypes.object
	};

	/**
   * Open 'Detail' screen
   * @param {String} passedValue
   */
	openDetailPage = (passedValue: string) => e => {
	  MainStack.navigate('Detail', {
	    passedValue
	  });
	};

	render () {
	  return (
	    <AppContainer>
	      <HeaderWithSearch title="Browse" />
	    </AppContainer>
	  );
	}
}

/**
 * Map component props to redux app state
 * @param {*} state - the redux app state
 */
const mapStateToProps = state => ({});

/**
 * Bind redux actions to component
 * @param {*} dispatch
 */
const mapDispatchToProps = dispatch => ({});

// export the connect function
export default connect(mapStateToProps, mapDispatchToProps)(Home);
