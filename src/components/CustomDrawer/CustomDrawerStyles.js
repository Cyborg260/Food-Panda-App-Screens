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
  logOutTxt: {
    color: Colors.black,
    fontSize: 16,
  },
});
