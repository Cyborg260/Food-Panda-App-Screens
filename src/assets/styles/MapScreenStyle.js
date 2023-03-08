import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  mapViewContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    height:"90%",
    marginTop:70
  },
  confirmBtn: {
    marginTop: 510,
  },
  topView: {
    flexDirection: 'row',
    height: 70,
    backgroundColor: Colors.white,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  inputStyleView: {
    backgroundColor: Colors.gainsboro,
    width: 350,
    borderRadius: 6,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  inputStyle: {
    backgroundColor: Colors.gainsboro,
    width: 280,
    borderRadius: 6,
    height: 50,
    padding: 5,
  },
  leftImg: {
    tintColor: Colors.deeppink,
    resizeMode: 'stretch',
    width: 32,
    height: 42,
  },
  locPointer: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    tintColor: Colors.deeppink,
  },
});
