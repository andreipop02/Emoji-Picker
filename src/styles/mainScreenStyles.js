import {StyleSheet} from 'react-native';
import {strings, metrics} from '../constants/index';

export const styles = StyleSheet.create({
  titleText: {
    fontSize: metrics.size20,
    color: 'rgb(0,0,127)',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: metrics.size20,
  },

  textInput: {
    backgroundColor: 'rgb(250,250,250)',
    height: metrics.size40,
    flex: metrics.size1,
  },

  mainContainer: {
    marginHorizontal: metrics.size20,
    marginTop: metrics.size20,
  },

  textInputContainer: {
    flexDirection: 'row',
    borderWidth: metrics.size3,
    borderColor: 'black',
    alignItems: 'center',
    borderRadius: metrics.size5,
  },

  openModalIcon: {
    marginHorizontal: metrics.size10,
  },

  modalContainer: {
    borderWidth: metrics.size2,
    borderColor: 'black',
    position: 'absolute',
    marginTop: metrics.size100,
    alignSelf: 'flex-end',
    width: '75%',
    height: '300%',
    marginRight: metrics.size30,
    borderRadius: metrics.size5,
  },

  modalCategoryLine: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    flex: metrics.size1,
    justifyContent: 'space-evenly',
    marginHorizontal: metrics.size5,
  },
  modalIconsList: {
    flex: metrics.size10,
    marginHorizontal: metrics.size10,
    fontSize: metrics.size16,
    marginVertical: metrics.size5,
    alignItems:'center'
  },
  modalSearch: {
    flex: metrics.size2,
    borderWidth: metrics.size1,
    borderColor: 'black',
    marginHorizontal: metrics.size20,
    borderRadius: metrics.size5,
    justifyContent: 'center',
  },
  emojis: {
    fontSize: metrics.size25,
    alignSelf: 'flex-start',
  },
  allEmojisList: {
    justifyContent: 'space-evenly',
  },

  categoryTitleText: {
    fontSize: metrics.size16,
    fontWeight: 'bold',
    marginVertical: metrics.size5,
    alignSelf: 'center',
  },

  flatlist:{
    flexWrap:'wrap'
  }
});
