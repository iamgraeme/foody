import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import StarRating from 'react-native-star-rating';
import { colors } from 'app/config/styles';

import styles from './styles';

const Rating = ({ rating }) => (
  <React.Fragment>
    <StarRating
      disabled={false}
      starSize={16}
      maxStars={5}
      rating={rating}
      containerStyle={styles.rating}
      emptyStarColor={colors.starYellow}
      fullStarColor={colors.starYellow}
      iconSet="Ionicons"
      emptyStar="ios-star-outline"
      fullStar="ios-star"
      halfStar="ios-star-half"
    />
  </React.Fragment>
);

Rating.propTypes = {
  rating: PropTypes.number
};

export default Rating;
