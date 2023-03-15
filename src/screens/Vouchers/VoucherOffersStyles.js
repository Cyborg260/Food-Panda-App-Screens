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
    borderBottomWidth: 1,
    borderBottomColor: Colors.gainsboro,
    elevation: 5,
    flexDirection: 'row',
    height: 130,
    justifyContent: 'space-between',
    padding: 15,
  },
  nestedTopTxtView: {
    flexDirection: 'row',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftImg: {
    tintColor: Colors.white,
    resizeMode: 'contain',
    width: 35,
    height: 30,
  },
  topViewTxt: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 15,
    alignSelf: 'center',
  },
  historyTxt: {
    color: Colors.white,
    fontWeight: 'bold',
  },
  //============= voucherBox ==============//
  voucherViewBox: {
    flex: 1,
    width: 375,
    height: 80,
    backgroundColor: Colors.white,
    elevation: 4,
    position: 'absolute',
    top: 90,
    alignSelf: 'center',
    borderRadius: 10,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nestedViewTxt: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  amountTxt: {
    fontWeight: 'bold',
    fontSize: 24,
    color: Colors.black,
  },
  txt: {},
  nestedImgView: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    borderLeftWidth: 1,
    borderLeftColor: Colors.disableButton,
  },
  img: {
    tintColor: Colors.deeppink,
    width: 35,
    height: 35,
    resizeMode: 'contain',
    marginHorizontal: 8,
  },
  imgTxt: {
    fontSize: 16,
    color: Colors.deeppink,
    fontWeight: 'bold',
  },
  rbSheetTxt: {
    color: Colors.black,
    fontSize: 24,
    fontWeight: 'bold',
    paddingLeft: 20,
  },
  line: {
    width: '90%',
    height: 0,
    borderWidth: 0.5,
    borderColor: Colors.disableButton,
    alignSelf: 'center',
    marginVertical: 10,
  },
  voucherCodeInput: {
    width: '90%',
    height: 50,
    alignSelf: 'center',
    marginTop: 15,
    borderRadius: 10,
    borderColor: Colors.grey,
    borderWidth: 1,
    padding: 15,
  },
  bottomBtnView: {
    height: 100,
    borderWidth: 1,
    borderColor: Colors.disableButton,
    marginVertical: 30,
    justifyContent: 'center',
  },
  centeredVoucherImg: {
    tintColor: Colors.deeppink,
    width: 100,
    height: 100,
    resizeMode: 'contain',
    opacity: 0.4,
    alignSelf: 'center',
  },
  centeredView: {
    height: 380,
    justifyContent: 'flex-end',
  },
  centererdTxt: {
    color: Colors.black,
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 10,
    alignSelf: 'center',
  },
  centeredInstTxt: {
    color: Colors.black,
    textAlign: 'center',
  },
});
