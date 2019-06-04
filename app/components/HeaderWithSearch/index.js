/*
 * app/components/HeaderWithSearch
 */

// import react and react-native elements
import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import HeaderTitle from './../HeaderTitle';
import SearchBar from './../SearchBar';
import { colors } from 'app/config/styles';

// import screens styles
import styles from './styles';

class HeaderWithSearch extends Component {
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
	      <StatusBar barStyle="light-content" />
	      <View style={styles.padder}>
	        <HeaderTitle title={this.props.title} color={colors.secondary} />
	        <SearchBar showIcon />
	      </View>
	    </View>
	  );
	}
}

export default HeaderWithSearch;
