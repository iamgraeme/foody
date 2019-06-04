import { StyleSheet } from 'react-native';
import { fonts } from 'app/config/styles';

export default StyleSheet.create({
  sectionTitleBar: {
    position: 'relative',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    marginBottom: 10
  },
  sectionTitle: {
    fontSize: fonts.cardSectionTitle,
    fontWeight: fonts.semibold,
    marginLeft: 15
  }
});
