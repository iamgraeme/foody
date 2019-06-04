/**
 * app/config/styles
 * ---
 * Store global styles and style related helpers here.
 */

export const colors = {
  primary: '#F52D56',
  secondary: '#FFF',
  accent: '#000',
  darkGrey: '#9B9B9B',
  lightGrey: '#C1C0C9',
  veryLightGrey: '#F8F8F8',
  background: this.secondary
};

export const sizes = {
  header: {
    height: 150,
    padding: 30
  },
  card: {
    borderRadius: 4
  },
  largeCard: {
    borderRadius: 8
  },
  button: {
    borderRadius: 8
  },
  search: {
    height: 40,
    borderRadius: 8,
    padding: 20
  },
  profile: {
    avatarDiameterSmall: 34,
    avatarDiameterLarge: 60
  }
};

export const fonts = {
  light: '100',
  regular: '300',
  semiBold: '500',
  bold: '700',
  heavy: '900',
  title: 36,
  headerTitle: 17,
  cardSectionTitle: 20,
  searchBarTitle: 17,
  secondaryTitle: 34,
  callToAction: 16,
  sectionTitle: 15,
  bodyText: 15,
  cardTitle: 15,
  cardSubTitle: 13,
  cardPrice: 15,
  buttonTitle: 17
};

export const fullFlexContainer = {
  flex: 1,
  flexDirection: 'column',
  backgroundColor: colors.background
};

export const centerChildren = {
  justifyContent: 'center',
  alignItems: 'center'
};
