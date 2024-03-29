import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
  },
  topHeaderView: {
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
    paddingHorizontal: 15,
    borderBottomWidth: 5,
    borderBottomColor: 'deeppink',
  },
  topTxtView: {
    marginHorizontal: 10,
  },
  crossIcon: {
    resizeMode: 'contain',
    tintColor: 'deeppink',
  },
  cartTxt: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
  },
  locationTxt: {
    fontSize: 14,
    color: '#000',
  },
  deliveryView: {
    backgroundColor: '#fff',
    marginTop: 15,
    height: 80,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10,
    elevation: 2,
    padding: 8,
    flexDirection: 'row',
  },
  deliveryTxt: {
    fontSize: 14,
    // color: '#000',
  },
  minstxt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  changeTxtView: {
    // backgroundColor: 'green',
    // borderBottomWidth: 0.3,
    // borderBottomColor: 'deeppink',
  },
  changeTxt: {
    fontSize: 12,
    color: 'deeppink',
    textDecorationLine: 'underline',
  },
  lineView: {
    borderWidth: 1,
    borderColor: 'gainsboro',
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
  counterView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 45,
    height: 35,
    justifyContent: 'space-between',
    padding: 5,
    borderRadius: 3,
    borderWidth: 2,
    borderColor: 'gainsboro',
    marginHorizontal: 10,
  },
  counterDataTxt: {
    fontSize: 16,
    color: '#000',
  },
  downArrowImg: {
    resizeMode: 'contain',
    width: 12,
    height: 12,
    tintColor: 'deeppink',
  },
  counterViewImg: {
    width: 80,
    height: 60,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  ImgTxt: {
    fontSize: 18,
    marginHorizontal: 10,
  },
  bottomView: {
    width: '100%',
    height: 100,
    position: 'absolute',
    bottom: 0,
  },
  paymentBtn: {
    width: '95%',
    height: 50,
    borderRadius: 10,
    backgroundColor: 'deeppink',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  paymentTxt: {
    fontSize: 16,
    color: '#fff',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  totalTxt: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginLeft: 10,
  },
  vatTxt: {
    fontSize: 9,
    color: 'grey',
    alignSelf: 'center',
    marginLeft: 5,
  },
  totalPrice: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginRight: 15,
  },
  subTotalTxt: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  feeView: {
    flexDirection: 'row',
    marginTop: 150,
    width: '95%',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  feeView2: {
    flexDirection: 'row',
    marginTop: 20,
    width: '95%',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  feeView3: {
    flexDirection: 'row',
    marginTop: 20,
    width: '95%',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  discountView: {
    flexDirection: 'row',
    marginTop: 20,
    width: '95%',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  discountTxt: {
    color: Colors.deeppink,
    fontSize: 14,
  },
});
