import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {images} from '../../utils/Images';
import styles from '../../screens/EnterYourMobNo/EnterMobStyles';
import BottomButton from '../../components/BottomButton';
import {Colors} from '../../utils/colors';
import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../navigations/AppStack';
import PhoneInputCompo from '../../components/PhoneInput';

const EnterMobileNo = () => {
  //=================== useState ========================//
  const [text, setText] = useState('');
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topView}>
        <Image style={styles.crossImg} source={images.crossIcon} />
        <TouchableOpacity
          activeOpacity={0.85}
          onPress={() =>
            navigation.navigate(ScreenNames.VerfifyMobNo, {text: text})
          }>
          <Text
            style={[
              styles.topTxt,
              {color: text.length === 10 ? Colors.grey : Colors.disableButton},
            ]}>
            Continue
          </Text>
        </TouchableOpacity>
      </View>
      <Image style={styles.mobImg} source={images.enterMobImg} />
      <Text style={styles.Txt}>What's your mobile number?</Text>
      <Text style={styles.insTxt}>
        We need this to verify and secure the account
      </Text>
      <PhoneInputCompo
        onChangePhoneNumber={text => {
          console.log(text);
          setText(text);
        }}
      />
      <View style={styles.BottomTxt}>
        <BottomButton
          borderColor={Colors.gainsboro}
          txtColor={Colors.white}
          txt="Continue"
          backgroundColor={
            text.length === 10 ? Colors.deeppink : Colors.disableButton
          }
          navigation={() => {
            text.length === 10
              ? navigation.navigate(ScreenNames.VerfifyMobNo, {
                  text: text,
                })
              : null;
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default EnterMobileNo;
