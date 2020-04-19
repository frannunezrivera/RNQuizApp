import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    alignItems: 'center',
  },
  primaryButton: {
    marginTop: 20,
    backgroundColor: '$primaryBlue',
  },
  secondaryButton: {
    marginVertical: 20,
    marginHorizontal: 30,
    padding: 15,
  },
  emojiButton: {
    marginTop: 10,
    padding: 15,
    width: 80,
    height: 80,
    justifyContent: 'center',
  },
  secondaryButtonText: {
    alignSelf: 'center',
    color: '$primaryBlue',
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 19,
    marginRight: 11,
  },
  text: {
    color: '$white',
    fontSize: 14,
    paddingVertical: 20,
    fontWeight: '300',
  },
});
