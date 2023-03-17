import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  userProfileView: {
    height: 180,
    backgroundColor: Colors.deeppink,
  },
  userProfileIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    tintColor: Colors.white,
    marginLeft: 15,
    marginTop: 15,
  },
  userNametxt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.white,
  },
  statusContainer: {
    marginLeft: 15,
    flexDirection: 'row',
    marginTop: 65,
    justifyContent: 'space-between',
  },
  txtView: {},
  statusTxt: {
    fontSize: 14,
    color: Colors.white,
  },
  switchView: {
    width: 80,
    height: 40,
    borderRadius: 20,
    borderColor: Colors.white,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  switchTxt: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '700',
  },
  renderItemContainer: {
    flexDirection: 'row',
    height: 40,
    marginLeft: 15,
    marginTop: 10,
  },
  renderItemImg: {
    height: 22,
    width: 30,
    resizeMode: 'contain',
  },
  renderItemTxt: {
    marginHorizontal: 5,
    color: Colors.black,
    marginHorizontal: 25,
  },
  pandaPayOpacity: {
    height: 80,
    marginLeft: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.gainsboro,
    justifyContent: 'center',
    marginBottom: 10,
  },
  pandaPayTxtView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: '3%',
  },
  pandapayNestedTxtView: {
    flexDirection: 'row',
  },
  pandaTxt: {
    fontSize: 13,
    color: Colors.deeppink,
  },
  payTxt: {
    fontSize: 13,
    color: Colors.white,
    fontStyle: 'italic',
    backgroundColor: Colors.deeppink,
    width: 25,
    textAlign: 'center',
  },
  amountTxt: {
    fontSize: 10,
    color: Colors.deeppink,
  },
  amountOpacityView: {
    backgroundColor: Colors.gainsboro,
    borderColor: Colors.gainsboro,
    borderRadius: 10,
    borderWidth: 1,
    width: 'auto',
    height: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  lineView: {
    borderColor: Colors.gainsboro,
    borderBottomWidth: 1,
    marginRight: 10,
  },
  txt: {
    fontSize: 14,
    color: Colors.black,
  },
  settingsView: {
    marginTop: 15,
    marginLeft: 15,
  },
  settingsTxt: {
    color: Colors.black,
    fontSize: 16,
  },
  termsPrivacyView: {
    marginTop: 25,
    marginLeft: 15,
  },
  termsPrivacytxt: {
    color: Colors.black,
    fontSize: 16,
  },
  logoutView: {
    marginTop: 25,
    marginLeft: 15,
    marginBottom: 20,
  },
  logOutDrawerTxt: {
    color: Colors.black,
    fontSize: 16,
  },
  centeredView: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  modalView: {
    borderRadius: 20,
    elevation: 5,
    marginTop: 250,
    width: '80%',
    height: 200,
    alignSelf: 'center',
    backgroundColor: Colors.white,
    padding: 22,
  },
  loggingOutTxt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.black,
  },
  thanksTxt: {
    fontSize: 16,
    color: Colors.black,
    marginVertical: 12,
  },
  bothButtonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  cancelBtnOpacity: {
    width: 135,
    height: 50,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: Colors.deeppink,
    borderWidth: 1,
    elevation: 2,
  },
  cancelTxt: {
    color: Colors.deeppink,
    fontWeight: 'bold',
  },
  logOutOpacity: {
    width: 135,
    height: 50,
    backgroundColor: Colors.deeppink,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: Colors.deeppink,
    borderWidth: 1,
    elevation: 2,
  },
  logOutTxt: {
    color: Colors.white,
    fontWeight: 'bold',
  },
});
