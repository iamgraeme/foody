/*
 * app/components/HeaderTitle
 */

// import react and react-native elements
import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import PropTypes from 'prop-types';

// import screens styles
import styles from './styles';

const HeaderTitle = props => {
  const { color, title } = props;
  return (
    <View>
      <Text style={[styles.text, { color }]}>{title}</Text>
    </View>
  );
};

HeaderTitle.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string
};

export default HeaderTitle;
