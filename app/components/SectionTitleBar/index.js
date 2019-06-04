/*
 * app/components/SectionTitleBar
 */

// import react and react-native elements
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import CallToActionButton from './../CallToActionButton';

// import screens styles
import styles from './styles';

const SectionTitleBar = props => {
  const { sectionTitle, ctaTitle } = props;
  return (
    <View style={styles.sectionTitleBar}>
      <Text style={styles.sectionTitle}>{sectionTitle}</Text>
      <CallToActionButton title={ctaTitle} />
    </View>
  );
};

SectionTitleBar.propTypes = {
  sectionTitle: PropTypes.string,
  ctaTitle: PropTypes.string
};

export default SectionTitleBar;
