/*
 * app/components/CardSection
 */

// import react and react-native elements
import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import SectionTitleBar from './../SectionTitleBar';
import RecipeCard from './../RecipeCard';

// import screens styles
import styles from './styles';

class CardSection extends Component {
	static propTypes = {};

	/**
   * Construct component class
   * @param {object} props
   */
	constructor (props) {
	  super(props);
	}

	renderCards = () => {};

	/**
   * Render component
   */
	render () {
	  return (
	    <View style={styles.container}>
	      <SectionTitleBar sectionTitle="Trending this week" ctaTitle="View All" />
	      <ScrollView horizontal style={styles.listView}>
	        <RecipeCard />
	        <RecipeCard />
	        <RecipeCard />
	        <RecipeCard />
	        <RecipeCard />
	        <RecipeCard />
	        <RecipeCard />
	      </ScrollView>
	    </View>
	  );
	}
}

export default CardSection;
