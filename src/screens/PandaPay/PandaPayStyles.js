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
    padding: 20,
  },
  nestedTopTxtView: {
    flexDirection: 'row',
  },
  crossImg: {
    tintColor: Colors.white,
    resizeMode: 'contain',
    width: 25,
    height: 25,
  },
  topViewPandaTxt: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 15,
  },
  payTxt: {
    color: Colors.deeppink,
    backgroundColor: Colors.white,
    fontStyle: 'italic',
  },
  settingsImg: {
    tintColor: Colors.white,
    width: 22,
    height: 22,
    resizeMode: 'contain',
  },
  //============= credit box ==============//
  creditBocView: {
    flex: 1,
    width: 375,
    height: 120,
    backgroundColor: Colors.white,
    elevation: 4,
    position: 'absolute',
    top: 70,
    alignSelf: 'center',
    borderRadius: 10,
    padding: 20,
  },
  creditTxtView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  creditNestedView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 140,
    height: 40,
  },
  creditTxt: {
    fontSize: 16,
    color: Colors.black,
  },
  infoImg: {
    resizeMode: 'contain',
  },
  topUpNestedView: {
    flexDirection: 'row',
    width: 80,
    justifyContent: 'space-between',
    height: 40,
  },
  topUpImg: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: Colors.deeppink,
  },
  topUpTxt: {
    fontSize: 16,
    color: Colors.deeppink,
    fontWeight: 'bold',
  },
  availableCreditTxt: {
    fontWeight: 'bold',
    color: Colors.black,
    fontSize: 28,
  },
  //================ balance box ================//
  balanceBoxView: {
    width: 375,
    height: 100,
    backgroundColor: Colors.gainsboro,
    elevation: 1,
    alignSelf: 'center',
    borderRadius: 10,
    padding: 20,
    flexDirection: 'row',
    marginTop: 90,
  },
  topUpImgCircle: {
    backgroundColor: Colors.grey,
    width: 55,
    height: 55,
    borderRadius: 65,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  topUpbalanceImg: {
    tintColor: Colors.white,
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  txtView: {
    marginHorizontal: 20,
  },
  stepTxt: {
    color: Colors.black,
  },
  topUpText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  balanceTxt: {
    fontSize: 15,
  },
  rightIconImage: {
    width: 25,
    height: 25,
    tintColor: Colors.grey,
    alignSelf: 'center',
  },
  //=============== payment method text =============//
  paymentTextView: {
    padding: 20,
    flexDirection: 'row',
  },
  paymentwalletImg: {
    width: 28,
    height: 28,
    tintColor: Colors.deeppink,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  paymentMethTxt: {
    fontWeight: 'bold',
    color: Colors.black,
    fontSize: 24,
    marginHorizontal: 10,
  },
  //============== payment box ==================//
  paymentBoxView: {
    width: 375,
    height: 100,
    backgroundColor: Colors.babyPink,
    borderWidth: 1,
    borderColor: Colors.deeppink,
    alignSelf: 'center',
    borderRadius: 10,
    padding: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  paymentTxtView: {},
  paymentTxt: {
    color: Colors.black,
    fontSize: 16,
  },
  backToHomeBtn: {
    color: Colors.deeppink,
    fontWeight: 'bold',
    fontSize: 16,
    marginVertical: 6,
  },
  creditCardImg: {
    tintColor: Colors.deeppink,
    width: 45,
    height: 45,
    alignSelf: 'center',
  },
});
