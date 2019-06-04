import { StyleSheet } from 'react-native';
import { fonts, colors, sizes } from 'app/config/styles';
export default StyleSheet.create({
  card: {
    position: 'relative',
    marginRight: 15,
    height: 211,
    backgroundColor: colors.veryLightGrey
  },
  cardTitle: {},
  category: {},
  price: {
    position: 'absolute',
    bottom: 10,
    right: 10
  },
  rating: {}
});
