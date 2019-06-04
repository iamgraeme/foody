/*
 * app/components/SearchBar
 */

// import react and react-native elements
import React, { Component } from 'react';
import { View, TextInput, Image } from 'react-native';
import PropTypes from 'prop-types';

// import screens styles
import styles from './styles';

class SearchBar extends Component {
	static propTypes = {
	  showIcon: PropTypes.bool
	};

	constructor (props) {
	  super(props);
	  this.state = { text: 'Search...' };
	}

	/**
   * Render component
   */
	render () {
	  return (
	    <View style={styles.container}>
	      {this.props.showIcon && (
	        <View style={styles.icon}>
	          <Image source={require('./../../assets/images/icons/search.png')} />
	        </View>
	      )}
	      <TextInput
	        style={styles.textInput}
	        placeholder="Search..."
	        onChangeText={text => this.setState({ text })}
	        value={this.state.text}
	        autoCapitalize="none"
	        autoCorrect={false}
	        clearButtonMode="while-editing"
	        clearTextOnFocus
	      />
	    </View>
	  );
	}
}

export default SearchBar;
