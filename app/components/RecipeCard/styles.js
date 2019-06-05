import { StyleSheet } from 'react-native';
import { fonts, colors, sizes } from 'app/config/styles';
export default StyleSheet.create({
  card: {
    position: 'relative',
    marginRight: 15,
    height: 211,
    width: 243,
    backgroundColor: colors.background
  },
  cardInner: {
    padding: 10,
    flex: 1
  },
  cardTitle: {
    fontSize: fonts.cardTitle,
    fontWeight: fonts.semibold
  },
  image: {
    width: 243,
    height: 129
  },
  category: {
    fontSize: fonts.cardSubTitle,
    fontWeight: fonts.regular,
    color: colors.darkGrey
  },
  price: {
    position: 'absolute',
    bottom: 10,
    right: 10
  },
  rating: {}
});
