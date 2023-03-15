import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
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
        style={{
          height: 80,
          marginLeft: 15,
          borderBottomWidth: 1,
          borderBottomColor: Colors.gainsboro,
          justifyContent: 'center',
          marginBottom: 10,
        }}
        activeOpacity={0.85}
        onPress={() => navigation.navigate(ScreenNames.PandaPayScreen)}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: '3%',
          }}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Text
              style={{
                fontSize: 13,
                color: Colors.deeppink,
              }}>
              panda
            </Text>
            <Text
              style={{
                fontSize: 13,
                color: Colors.white,
                fontStyle: 'italic',
                backgroundColor: Colors.deeppink,
                width: 25,
                textAlign: 'center',
              }}>
              pay
            </Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.gainsboro,
              borderColor: Colors.gainsboro,
              borderRadius: 10,
              borderWidth: 1,
              width: 'auto',
              height: 'auto',
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 20,
            }}
            activeOpacity={0.5}>
            <Text
              style={{
                fontSize: 10,
                color: Colors.deeppink,
              }}>
              Rs. 0.00
            </Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontSize: 14,
            color: Colors.black,
          }}>
          Credit and payment methods
        </Text>
      </TouchableOpacity>
      <FlatList scrollEnabled={true} data={userData} renderItem={renderItem} />
      <View
        style={{
          borderColor: Colors.gainsboro,
          borderBottomWidth: 1,
          marginRight: 10,
        }}
      />
      <TouchableOpacity style={styles.settingsView} activeOpacity={0.5}>
        <Text style={styles.settingsTxt}>Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.termsPrivacyView} activeOpacity={0.5}>
        <Text style={styles.termsPrivacytxt}>Terms & Conditions / privacy</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.logoutView} activeOpacity={0.5}>
        <Text style={styles.logOutTxt}>Log out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default CustomDrawer;
