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
    width: 70,
    height: 70,
    marginHorizontal: 15,
    marginTop: 40,
  },
  Txt: {
    fontSize: 28,
    color: Colors.black,
    fontWeight: 'bold',
    marginHorizontal: 15,
    marginTop: 20,
  },
  insTxt: {
    fontSize: 17,
    marginHorizontal: 15,
    marginTop: 10,
  },
  bothView: {
    flexDirection: 'row',
    marginHorizontal: 15,
    marginTop: 30,
  },
  domainView: {
    width: 70,
    height: 50,
    borderWidth: 1,
    borderColor: Colors.gainsboro,
    padding: 4,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textInputView: {
    width: 300,
    height: 50,
    borderWidth: 1,
    borderColor: Colors.gainsboro,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  inputStyle: {
    paddingLeft: 18,
  },
  BottomTxt: {
    marginTop: 270,
    height: 90,
    borderTopWidth: 1,
    borderColor: Colors.gainsboro,
  },
});
