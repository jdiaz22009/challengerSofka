import {BLUE_DARK, GRAY, GRAY_100, RED, YELLOW} from '@/themes';
import {Dimensions, StyleSheet} from 'react-native';

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  formContent: {
    paddingHorizontal: width * 0.05,
  },
  space: {
    height: height * 0.07,
  },
  space2: {
    height: height * 0.05,
  },
  space3: {
    height: height * 0.01,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },

  errorText: {
    color: RED,
  },

  borderError: {
    borderColor: RED,
    borderWidth: 2,
  },

  textInput: {
    fontSize: 12,
    fontWeight: 'bold',
  },

  input: {
    borderColor: GRAY,
    borderWidth: 1,
    paddingHorizontal: 12,
  },

  contentBtn: {
    paddingVertical: 50,
  },

  btnSend: {
    width: width * 0.9,
    borderRadius: 5,
    backgroundColor: YELLOW,
    height: height * 0.06,
    paddingHorizontal: width * 0.05,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  btnTextSend: {
    fontWeight: 'bold',
    color: BLUE_DARK,
    fontSize: 16,
  },

  btnReset: {
    backgroundColor: GRAY_100,
  },
});
