import { StyleSheet, Dimensions } from 'react-native';
import { colors, fonts, sizes } from 'app/config/styles';

const width = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    height: 285,
    width
  },
  listView: {
    paddingLeft: 20
  }
});
