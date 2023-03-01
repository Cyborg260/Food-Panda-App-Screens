import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  rbSheetTxt: {
    color: Colors.black,
    fontSize: 24,
    fontWeight: 'bold',
    paddingLeft: 20,
  },
  lineView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  line: {
    borderWidth: 1,
    borderColor: Colors.gainsboro,
    width: 170,
    marginHorizontal: 10,
  },
  orTxt: {
    fontSize: 18,
    color: Colors.black,
    fontWeight: 'bold',
  },
  instTxt: {
    marginTop: 5,
    fontSize: 11,
    textAlign: 'center',
    color: Colors.grey,
  },
  highlightedTxt: {
    fontSize: 11,
    textAlign: 'center',
    color: Colors.blue,
  },
});
