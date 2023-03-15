import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../../screens/Vouchers/VoucherHistoryStyles';
import {images} from '../../utils/Images';
import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../navigations/AppStack';
const VouchersHistory = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topView}>
        <TouchableOpacity
          activeOpacity={0.85}
          onPress={() => navigation.goBack()}>
          <Image style={styles.lefticon} source={images.lefticon} />
        </TouchableOpacity>
        <Text style={styles.topViewTxt}>History</Text>
      </View>
      <View style={styles.centeredView}>
        <Image style={styles.centeredVoucherImg} source={images.voucher} />
        <Text style={styles.centererdTxt}>No vouchers yet</Text>
        <Text style={styles.centeredInstTxt}>
          It seem you have no vouchers yet. You{'\n'}can refer a friend to get
          your first one.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default VouchersHistory;
