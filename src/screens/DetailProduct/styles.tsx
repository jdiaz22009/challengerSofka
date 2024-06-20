import {BLUE_DARK, GRAY, RED, WHITE} from '@/themes';
import {Dimensions, StyleSheet} from 'react-native';

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  containerSumary: {
    paddingHorizontal: width * 0.1,
  },

  textId: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  textInformation: {
    fontSize: 17,
    color: GRAY,
  },

  bold: {
    fontWeight: 'bold',
  },

  imgLogo: {
    width: width * 0.5,
    height: height * 0.1,
    objectFit: 'contain',
  },

  imageContainer: {
    width: width,
    alignItems: 'center',
  },

  rowData: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },

  columnData: {
    flexDirection: 'column',
  },

  space: {
    height: height * 0.07,
  },
  spaceaData: {
    height: height * 0.03,
  },

  spaceabtn: {
    height: height * 0.02,
  },

  contentBtn: {
    paddingVertical: 50,
  },

  btnEdit: {
    width: width * 0.9,
    borderRadius: 5,
    backgroundColor: GRAY,
    height: height * 0.06,
    paddingHorizontal: width * 0.05,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },

  btnTextEdit: {
    fontWeight: 'bold',
    color: BLUE_DARK,
    fontSize: 16,
  },

  btnDelete: {
    backgroundColor: RED,
  },

  btnTextDelete: {
    color: WHITE,
  },
});
