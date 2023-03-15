import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useRef} from 'react';
import {images} from '../../utils/Images';
import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../navigations/AppStack';
import styles from '../../screens/Vouchers/VoucherOffersStyles';
import RBSheet from 'react-native-raw-bottom-sheet';
import {Colors} from '../../utils/colors';
import BottomButton from '../../components/BottomButton';
const VouchersOfferScreen = () => {
  const navigation = useNavigation();
  const refSheet = useRef();
  return (
    <SafeAreaView style={styles.container}>
      {/* //========= topView =========// */}
      <View style={styles.topView}>
        <View style={styles.nestedTopTxtView}>
          <TouchableOpacity
            activeOpacity={0.85}
            onPress={() => navigation.goBack()}>
            <Image style={styles.leftImg} source={images.lefticon} />
          </TouchableOpacity>
          <Text style={styles.topViewTxt}>Vouchers & Offers</Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.85}
          onPress={() => navigation.navigate(ScreenNames.VoucherHistory)}
          style={{justifyContent: 'center', height: 30}}>
          <Text style={styles.historyTxt}>History</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.voucherViewBox}>
        <View style={styles.nestedViewTxt}>
          <Text style={styles.amountTxt}>Rs. 0.00</Text>
          <Text style={styles.txt}>Saved this month</Text>
        </View>
        <View style={styles.nestedImgView}>
          <Image style={styles.img} source={images.voucher} />
          <TouchableOpacity
            activeOpacity={0.85}
            onPress={() => {
              refSheet.current.open();
            }}>
            <Text style={styles.imgTxt}>Add a Voucher</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.centeredView}>
        <Image style={styles.centeredVoucherImg} source={images.voucher} />
        <Text style={styles.centererdTxt}>No vouchers yet</Text>
        <Text style={styles.centeredInstTxt}>
          It seem you have no vouchers yet. You{'\n'}can refer a friend to get
          your first one.
        </Text>
      </View>
      <RBSheet
        ref={refSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={270}
        openDuration={250}
        customStyles={{
          container: {
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
          },
          draggableIcon: {
            backgroundColor: Colors.gainsboro,
            width: 50,
          },
        }}>
        <Text style={styles.rbSheetTxt}>Add a Voucher</Text>
        <View style={styles.line} />
        <TextInput
          maxLength={12}
          placeholder="Voucher code"
          style={styles.voucherCodeInput}
        />
        <View style={styles.bottomBtnView}>
          <BottomButton
            backgroundColor={Colors.disableButton}
            borderColor={Colors.white}
            txt="Add"
            txtColor={Colors.white}
          />
        </View>
      </RBSheet>
    </SafeAreaView>
  );
};

export default VouchersOfferScreen;
