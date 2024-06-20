import {BLUE_DARK, GRAY, YELLOW} from '@/themes';
import {Dimensions, StyleSheet} from 'react-native';

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  space: {
    height: height * 0.07,
  },
  space2: {
    height: height * 0.04,
  },
  space3: {
    height: height * 0.1,
  },

  contentList: {
    paddingHorizontal: width * 0.05,
  },
  input: {
    borderColor: GRAY,
    borderWidth: 1,
    paddingHorizontal: 10,
  },

  btnContainer: {
    paddingHorizontal: 10,
  },

  btnAdd: {
    width: width * 0.9,
    borderRadius: 5,
    backgroundColor: YELLOW,
    height: height * 0.06,
    paddingHorizontal: width * 0.05,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  btnText: {
    fontWeight: 'bold',
    color: BLUE_DARK,
    fontSize: 16,
  },
});
