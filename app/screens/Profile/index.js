/*
 * app/screens/Profile
 */

// import react and react-native elements
import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

// import redux functions to connect controller to app state
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// import redux actions
// import * as SampleActions from 'app/redux/Sample';

// import screens styles
import styles from './styles';

class Profile extends Component {
	// Define tab options
	static navigationOptions = () => {
	  return {
	    title: 'Profile',
	    tabBarLabel: 'Profile',
	    tabBarIcon: ({ tintColor, focused }) => {
	      return <Image style={{ tintColor }} source={require('app/assets/images/icons/Profile.png')} />;
	    }
	  };
	};

	static propTypes = {};

	/**
   * Construct component class
   * @param {object} props
   */
	constructor (props: {}) {
	  super(props);
	}

	/**
   * Render component
   */
	render () {
	  return (
	    <View style={styles.container}>
	      <Text style={styles.text}>Hello from screens/Profile!</Text>
	    </View>
	  );
	}
}

/**
 * Map component props to redux app state
 * @param {*} state - the redux app state
 */
const mapStateToProps = state => ({
  // sampleStuff: state.Sample
});

/**
 * Bind redux actions to component
 * @param {*} dispatch
 */
const mapDispatchToProps = dispatch => ({
  // SampleActions: bindActionCreators(SampleActions, dispatch)
});

// export the connect function
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
