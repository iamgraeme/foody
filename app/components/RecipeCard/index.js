/*
 * app/components/RecipeCard
 */

// import react and react-native elements
import React, { Component } from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import { colors, boxWithShadow } from 'app/config/styles';
import { Rating } from 'app/components';
import FastImage from 'react-native-fast-image';
import PropTypes from 'prop-types';

// import screens styles
import styles from './styles';

const RecipeCard = props => {
  const { onPress, image, title, category, price, rating } = props;
  return (
    <TouchableOpacity style={[styles.card, boxWithShadow]}>
      <FastImage style={styles.image} source={{ uri: image }} />
      <View style={styles.cardInner}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.category}>{category}</Text>
        <Rating rating={rating} />
        <Text style={styles.price}>£{price}</Text>
      </View>
    </TouchableOpacity>
  );
};

RecipeCard.defaultProps = {
  category: 'Korean BBQ',
  image:
		'https://www.bite.co.nz/images/recipes/10022016VIVAKoreanBBQBeef.jpg?width=603&height=339&mode=crop&upscale=false',
  onPress: () => {},
  price: '15.00',
  rating: 1,
  title: 'BBQ Short Ribs'
};

RecipeCard.propTypes = {
  category: PropTypes.string,
  image: PropTypes.string,
  onPress: PropTypes.func,
  price: PropTypes.string,
  rating: PropTypes.number,
  title: PropTypes.string
};

export default RecipeCard;
