import {Dimensions, StyleSheet} from 'react-native';
import {BLUE_DARK} from '@/themes';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
    borderBottomColor: BLUE_DARK,
    borderBottomWidth: 1,
    padding: width * 0.04,
  },

  spaceWidth: {
    width: width * 0.02,
  },

  textHeader: {
    fontSize: 17,
    fontWeight: 'bold',
    color: BLUE_DARK,
  },
});
