import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  Modal,
  BackHandler,
} from 'react-native';
import React, {useState, useRef} from 'react';
import {Colors} from '../../utils/colors';
import {images} from '../../utils/Images';
import styles from '../../components/CustomDrawer/CustomDrawerStyles';
import {userData} from '../../utils/Data/CustomDrawerData/userData';
import LoginDrawer from '../../components/CustomDrawer/LoginDrawer';
import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../navigations/AppStack';
const CustomDrawer = ({...props}) => {
  //================== useState ===================//
  const [switchDrawer, setSwitchDrawer] = useState(false);
  const [logOutModalView, setLogoutModalView] = useState(false);
  const navigation = useNavigation();
  const refSheet = useRef();
  console.log('ASdasasdasdasdasdsa', props.navigation);

  const renderItem = ({item}) => (
    <TouchableOpacity
      activeOpacity={0.85}
      style={styles.renderItemContainer}
      onPress={() => {
        navigation.navigate(
          item.id === 1
            ? ScreenNames.Favourites
            : item.id === 2
            ? ScreenNames.OrderReordering
            : item.id === 4
            ? ScreenNames.AddressScreen
            : item.id === 6
            ? ScreenNames.VoucherOffers
            : item.id === 7
            ? ScreenNames.HelpCenter
            : item.id === 8
            ? ScreenNames.FpForBussiness
            : ScreenNames.Home,
        );
      }}>
      <Image
        style={[
          styles.renderItemImg,
          {tintColor: item.id === 0 ? null : Colors.deeppink},
        ]}
        source={item.image}
      />
      <Text style={styles.renderItemTxt}>{item.txt}</Text>
    </TouchableOpacity>
  );
  return switchDrawer ? (
    <LoginDrawer drawerNav={props.navigation} />
  ) : (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.userProfileView}>
        <Image style={styles.userProfileIcon} source={images.userIcon} />
        <View style={styles.statusContainer}>
          <View style={styles.txtView}>
            <Text style={styles.userNametxt}>Syed Shuja</Text>
            <Text style={styles.statusTxt}>Personal account</Text>
          </View>
          <TouchableOpacity
            onPress={() => setSwitchDrawer(true)}
            activeOpacity={0.85}
            style={styles.switchView}>
            <Text style={styles.switchTxt}>Switch</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={styles.pandaPayOpacity}
        activeOpacity={0.85}
        onPress={() => navigation.navigate(ScreenNames.PandaPayScreen)}>
        <View style={styles.pandaPayTxtView}>
          <View style={styles.pandapayNestedTxtView}>
            <Text style={styles.pandaTxt}>panda</Text>
            <Text style={styles.payTxt}>pay</Text>
          </View>
          <TouchableOpacity
            style={styles.amountOpacityView}
            activeOpacity={0.5}>
            <Text style={styles.amountTxt}>Rs. 0.00</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.txt}>Credit and payment methods</Text>
      </TouchableOpacity>
      <FlatList scrollEnabled={true} data={userData} renderItem={renderItem} />
      <View style={styles.lineView} />
      <TouchableOpacity style={styles.settingsView} activeOpacity={0.5}>
        <Text style={styles.settingsTxt}>Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.termsPrivacyView} activeOpacity={0.5}>
        <Text style={styles.termsPrivacytxt}>Terms & Conditions / privacy</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.logoutView}
        activeOpacity={0.5}
        onPress={() => setLogoutModalView(true)}>
        <Text style={styles.logOutDrawerTxt}>Log out</Text>
      </TouchableOpacity>
      <Modal
        animationType="fade"
        transparent={true}
        visible={logOutModalView}
        onRequestClose={() => {
          setLogoutModalView(false);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.loggingOutTxt}>Logging out?</Text>
            <Text style={styles.thanksTxt}>
              Thanks for stopping by see you{'\n'}soon!
            </Text>
            <View style={styles.bothButtonView}>
              <TouchableOpacity
                style={styles.cancelBtnOpacity}
                activeOpacity={0.85}
                onPress={() => setLogoutModalView(false)}>
                <Text style={styles.cancelTxt}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.logOutOpacity}
                activeOpacity={0.85}
                onPress={() => BackHandler.exitApp()}>
                <Text style={styles.logOutTxt}>Log out</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default CustomDrawer;
