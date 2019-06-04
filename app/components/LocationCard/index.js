/*
 * app/components/LocationCard
 */

// import react and react-native elements
import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

// import screens styles
import styles from './styles';

const LocationCard = props => {
  return (
    <View style={styles.card}>
      <Image source={require('./../../assets/images/FoodImage.jpg')} />
      <Text>Crispy Chicken Sandwich</Text>
      <Text>Korean BBQ</Text>
      <Text>£15.00</Text>
    </View>
  );
};

LocationCard.propTypes = {};

export default LocationCard;
