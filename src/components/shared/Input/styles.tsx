import {Dimensions, StyleSheet} from 'react-native';

import {BLACK, GRAY_100} from '@/themes';

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    height: height * 0.06,
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
    borderWidth: 1,
  },

  error: {
    borderWidth: 1,
  },
  input: {
    fontSize: 14,
    height: height * 0.06,
    width: '100%',
    color: BLACK,
    minHeight: 20,
  },

  inputFocus: {
    color: BLACK,
  },
  iconContainer: {
    paddingHorizontal: 10,
  },

  inputNotEdit: {
    backgroundColor: GRAY_100,
  },

  borderFocus: {
    borderWidth: 1.5,
    borderColor: BLACK,
  },
});

export default styles;
