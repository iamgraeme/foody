import { StyleSheet } from 'react-native';

import { colors } from 'app/config/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryBackground,
    alignContent: 'center',
    justifyContent: 'center'
  },
  text: {
    color: colors.primary,
    textAlign: 'center'
  }
});
