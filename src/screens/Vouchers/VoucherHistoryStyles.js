import {StyleSheet} from 'react-native';
import {color} from 'react-native-reanimated';
import {Colors} from '../../utils/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  topView: {
    backgroundColor: Colors.deeppink,
    elevation: 5,
    flexDirection: 'row',
    height: 70,
    padding: 20,
    alignItems: 'center',
  },

  lefticon: {
    tintColor: Colors.white,
    resizeMode: 'contain',
    width: 20,
    height: 20,
  },
  topViewTxt: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 15,
  },
  centeredView: {
    backgroundColor: Colors.white,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    position: 'absolute',
    width: '100%',
    height: '90%',
    top: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredVoucherImg: {
    tintColor: Colors.deeppink,
    width: 100,
    height: 100,
    resizeMode: 'contain',
    opacity: 0.4,
  },
  centererdTxt: {
    color: Colors.black,
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical:10
  },
  centeredInstTxt: {
    color: Colors.black,
  },
});
