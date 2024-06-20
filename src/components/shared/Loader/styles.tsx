import {StyleSheet} from 'react-native';
import {BLACK} from '@/themes';

export default StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: BLACK,
    justifyContent: 'center',
    paddingRight: 26,
    paddingLeft: 26,
  },
  animation: {
    width: 120,
    height: 120,
    alignSelf: 'center',
  },
});
