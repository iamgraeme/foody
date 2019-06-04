import { StyleSheet } from 'react-native';
import { fonts, colors } from 'app/config/styles';

export default StyleSheet.create({
  callToAction: {
    position: 'absolute',
    right: 15,
    flexDirection: 'row',
    alignItems: 'center'
  },
  callToActionIcon: {
    marginLeft: 2
  },
  callToActionText: {
    fontSize: fonts.callToAction,
    fontWeight: fonts.light,
    color: colors.primary
  }
});
