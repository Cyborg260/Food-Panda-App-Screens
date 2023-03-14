import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  userProfileView: {
    height: 180,
    backgroundColor: Colors.deeppink,
    justifyContent: 'flex-end',
  },
  profileViewTxt: {
    color: Colors.white,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 15,
    fontSize: 15,
  },
  renderItemContainer: {
    flexDirection: 'row',
    height: 40,
    marginLeft: 15,
    marginTop: 15,
  },
  renderItemImg: {
    height: 22,
    width: 30,
    resizeMode: 'contain',
    tintColor: Colors.deeppink,
    
  },
  renderItemTxt: {
    marginHorizontal: 5,
    color: Colors.black,
    marginHorizontal:25
  },
  lineView: {
    borderColor: Colors.gainsboro,
    borderBottomWidth: 1,
    marginRight: 10,
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
});
