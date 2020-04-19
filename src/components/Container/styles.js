import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    fontSize: 50,
    '@media ios': {
      paddingTop: 40,
    },
  },
  scrollContainer: {
    '@media ios': {
      paddingTop: 40,
    },
    flexGrow: 1,
    paddingBottom: 40,
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36,
    alignItems: 'center',

  },
});
