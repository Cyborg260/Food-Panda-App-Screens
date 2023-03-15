import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React from 'react';
import {images} from '../../utils/Images';
import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../navigations/AppStack';
import styles from '../../screens/PandaPay/PandaPayStyles';
const PandaPayScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      {/* //========= topView =========// */}
      <View style={styles.topView}>
        <View style={styles.nestedTopTxtView}>
          <TouchableOpacity
            activeOpacity={0.85}
            onPress={() => navigation.goBack()}>
            <Image style={styles.crossImg} source={images.crossIcon} />
          </TouchableOpacity>
          <Text style={styles.topViewPandaTxt}>
            panda<Text style={styles.payTxt}>pay</Text>
          </Text>
        </View>
        <TouchableOpacity activeOpacity={0.85}>
          <Image style={styles.settingsImg} source={images.settingsicon} />
        </TouchableOpacity>
      </View>
      {/* //============ credit Box ===========// */}
      <View style={styles.creditBocView}>
        <View style={styles.creditTxtView}>
          <View style={styles.creditNestedView}>
            <Text style={styles.creditTxt}>Available credit</Text>
            <TouchableOpacity
              activeOpacity={0.85}
              onPress={() => Alert.alert('Add a card?')}>
              <Image style={styles.infoImg} source={images.info} />
            </TouchableOpacity>
          </View>
          <View style={styles.topUpNestedView}>
            <Image style={styles.topUpImg} source={images.topUp} />
            <Text style={styles.topUpTxt}>Top up</Text>
          </View>
        </View>
        <Text style={styles.availableCreditTxt}>Rs. 0.00</Text>
      </View>
      {/* //=============== topUp balance box ==================// */}
      <View style={styles.balanceBoxView}>
        <View style={styles.topUpImgCircle}>
          <Image style={styles.topUpbalanceImg} source={images.topUp} />
        </View>
        <View style={styles.txtView}>
          <Text style={styles.stepTxt}>Step 1 of 1</Text>
          <Text style={styles.topUpText}>Top up your balance</Text>
          <Text style={styles.balanceTxt}>Use your balance in all orders</Text>
        </View>
        <Image style={styles.rightIconImage} source={images.rightIcon} />
      </View>
      {/* //================ Payment Text =================// */}
      <View style={styles.paymentTextView}>
        <Image style={styles.paymentwalletImg} source={images.payment} />
        <Text style={styles.paymentMethTxt}>Payment methods</Text>
      </View>
      {/* //================= payment box ==================// */}
      <View style={styles.paymentBoxView}>
        <View style={styles.paymentTxtView}>
          <Text style={styles.paymentTxt}>
            Save a payment method at{'\n'}checkout to view it here
          </Text>
          <TouchableOpacity
            activeOpacity={0.85}
            onPress={() => navigation.navigate(ScreenNames.DrawerScreen)}>
            <Text style={styles.backToHomeBtn}>Back to home</Text>
          </TouchableOpacity>
        </View>
        <Image style={styles.creditCardImg} source={images.creditCard} />
      </View>
    </SafeAreaView>
  );
};

export default PandaPayScreen;
