import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  topView: {
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: Colors.gainsboro,
    elevation: 5,
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
    height: 60,
  },

  crossImg: {
    tintColor: Colors.deeppink,
    resizeMode: 'contain',
    width: 25,
    height: 25,
    marginHorizontal: 15,
  },
  topViewTxt: {
    color: Colors.black,
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 80,
  },
  maintxt: {
    color: Colors.deeppink,
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10,
    marginHorizontal: 20,
  },
  renderItemView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderColor: Colors.disableButton,
  },
  View: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 300,
  },
  renderitemImg: {
    tintColor: Colors.black,
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  renderitemTxt: {
    color: Colors.black,
    fontSize: 17,
    marginHorizontal: 15,
  },
  renderItemArrowIcon: {
    width: 20,
    height: 20,
    tintColor: Colors.deeppink,
  },
});
