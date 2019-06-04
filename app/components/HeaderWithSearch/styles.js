import { StyleSheet, Dimensions } from 'react-native';
import { colors, sizes } from 'app/config/styles';
const width = Dimensions.get('window').width;
export default StyleSheet.create({
  container: {
    width,
    paddingHorizontal: 20,
    height: sizes.header.height,
    backgroundColor: colors.primary,
    justifyContent: 'flex-end',
    alignItems: 'flex-start'
  }
});
