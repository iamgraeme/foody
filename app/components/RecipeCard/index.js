/*
 * app/components/RecipeCard
 */

// import react and react-native elements
import React, { Component } from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

// import screens styles
import styles from './styles';

const RecipeCard = props => {
  const { onPress, cardTitle, category, price, rating } = props;
  return (
    <TouchableOpacity style={styles.card}>
      <Image source={require('./../../assets/images/FoodImage.jpg')} />
      <Text style={styles.cardTitle}>Crispy Chicken Sandwich</Text>
      <Text style={styles.category}>Korean BBQ</Text>
      <Text style={styles.price}>£15.00</Text>
    </TouchableOpacity>
  );
};

RecipeCard.propTypes = {
  onPress: PropTypes.string,
  cardTitle: PropTypes.string,
  category: PropTypes.string,
  price: PropTypes.string,
  rating: PropTypes.string
};

export default RecipeCard;
