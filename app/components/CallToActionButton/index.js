/*
 * app/components/CallToActionButton
 */

// import react and react-native elements
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';

// import screens styles
import styles from './styles';

const CallToActionButton = props => {
  const { title } = props;
  return (
    <TouchableOpacity style={styles.callToAction}>
      <Text style={styles.callToActionText}>{title}</Text>
      <View style={styles.callToActionIcon}>
        <Image source={require('./../../assets/images/DoubleCaret.png')} />
      </View>
    </TouchableOpacity>
  );
};

CallToActionButton.propTypes = {
  title: PropTypes.string
};

export default CallToActionButton;
