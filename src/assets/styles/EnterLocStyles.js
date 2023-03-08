import {StyleSheet} from 'react-native';
import {color} from 'react-native-reanimated';
import {Colors} from '../../utils/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  img: {
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 120,
    width: 100,
    height: 150,
  },
  mainTxt: {
    textAlign: 'center',
    color: Colors.black,
    fontSize: 24,
    fontWeight: 'bold',
  },
  intructxt: {
    textAlign: 'center',
    color: Colors.black,
    fontSize: 14,
    marginTop: 15,
  },
  bottomView: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderColor: Colors.gainsboro,
    borderWidth: 1,
    height: 185,
    backgroundColor: Colors.white,
    marginTop: 100,
  },
  indicator: {
    position: 'absolute',
    alignSelf: 'center',
    marginTop: 300,
    zIndex: 1,
  },
  centeredView: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  modalView: {
    borderRadius: 20,
    elevation: 5,
    marginTop: 200,
    width: '80%',
    height: 280,
    alignSelf: 'center',
    backgroundColor: Colors.white,
  },
  modalFPtxt: {
    fontSize: 16,
    color: Colors.black,
  },
  modalTxt: {
    textAlign: 'center',
    fontSize: 15,
    marginTop: 15,
  },
  pointerLocationImg: {
    width: 25,
    height: 25,
    tintColor: Colors.aqua,
    alignSelf: 'center',
    resizeMode: 'contain',
    marginTop: 20,
  },
  lineView: {
    borderWidth: 1,
    borderColor: 'gainsboro',
    width: '100%',
    alignSelf: 'center',
    marginTop: 20,
  },
  txt: {
    textAlign: 'center',
    marginTop: 22,
    color: Colors.seaGreen,
    fontSize: 16,
  },
});
