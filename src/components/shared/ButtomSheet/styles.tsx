import {Dimensions, StyleSheet} from 'react-native';
import {BLUE_DARK, GRAY_100, WHITE, YELLOW} from '@/themes';

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  bottomSheet: {
    width: '100%',
    height: height / 2.5,
    backgroundColor: WHITE,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderTopWidth: 4,
    borderTopColor: 'gray',
  },
  header: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: WHITE,
  },
  separator: {
    height: 1,
    backgroundColor: 'lightgray',
  },
  sheetContent: {
    padding: 20,
  },
  sheetTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  closeButton: {
    fontSize: 18,
    color: 'black',
  },

  contentBtn: {
    paddingVertical: 50,
  },

  space3: {
    height: height * 0.01,
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
