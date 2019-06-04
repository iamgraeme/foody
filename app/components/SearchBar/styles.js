import { StyleSheet, Dimensions } from 'react-native';
import { colors, sizes } from 'app/config/styles';
const width = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    height: sizes.search.height,
    width: width - 40,
    borderRadius: sizes.search.borderRadius,
    backgroundColor: colors.secondary,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    paddingHorizontal: 10
  },
  textInput: {
    height: sizes.search.height,
    borderRadius: sizes.search.borderRadius,
    flex: 1,
    backgroundColor: colors.secondary,
    paddingHorizontal: 10,
    color: colors.lightGrey
  }
});
