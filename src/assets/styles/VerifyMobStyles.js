import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  topView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 15,
    marginTop: 15,
  },
  crossImg: {
    tintColor: Colors.deeppink,
    resizeMode: 'stretch',
    width: 25,
    height: 25,
  },
  topTxt: {
    fontSize: 16,
  },
  mobImg: {
    width: 75,
    height: 75,
    marginHorizontal: 15,
    marginTop: 40,
  },
  insTxt: {
    fontSize: 17,
    marginHorizontal: 15,
    marginTop: 10,
  },
  Txt: {
    fontSize: 28,
    color: Colors.black,
    fontWeight: 'bold',
    marginHorizontal: 15,
    marginTop: 20,
  },
  mobNoTxt: {
    fontSize: 17,
    marginHorizontal: 15,
    fontWeight: 'bold',
    color: Colors.black,
  },
  sendCodeOpacity: {
    width: 160,
    height: 50,
    borderRadius: 10,
    marginHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendCodeTxt: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.white,
  },
});
