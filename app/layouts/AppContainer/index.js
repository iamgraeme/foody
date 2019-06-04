/*
 * app/components/AppContainer
 */

// import react and react-native elements
import React from 'react';
import { View, StatusBar } from 'react-native';
import PropTypes from 'prop-types';

// import screens styles
import styles from './styles';
const AppContainer = props => <View style={styles.container}>{props.children}</View>;

export default AppContainer;
