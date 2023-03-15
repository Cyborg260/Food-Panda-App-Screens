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
  },
  screenMainTxt: {
    fontSize: 26,
    color: Colors.black,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  instTxt: {
    fontSize: 16,
    color: Colors.black,
    textAlign: 'center',
    marginVertical: 5,
  },
  bottomOpacity: {
    backgroundColor: Colors.deeppink,
    borderRadius: 10,
    height: 32,
    width: "auto",
    alignSelf: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  opacityTxt: {
    fontSize: 17,
    color: Colors.white,
    fontWeight: 'bold',
    marginHorizontal: 15,
    textAlign: 'center',
  },
  img: {
    alignSelf: 'center',
    width: 75,
    height: 75,
    tintColor: Colors.deeppink,
    opacity: 0.3,
    marginVertical: 20,
  },
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
