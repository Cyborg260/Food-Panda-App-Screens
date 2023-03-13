import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import {images} from '../../utils/Images';
import styles from '../../screens/VerifyYourMobNo/VerifyMobStyles';
import {Colors} from '../../utils/colors';
import OtpInputs from 'react-native-otp-inputs';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../navigations/AppStack';
const VerifyMobScreen = ({...props}) => {
  //================= useState ======================//
  const [focused, setFocused] = useState();
  const [OTP, setOTP] = useState('');
  const otpRef = useRef(null);
  const mobileNumber = props?.route?.params?.text;
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.topView}
        onPress={() => navigation.goBack()}>
        <Image style={styles.crossImg} source={images.crossIcon} />
      </TouchableOpacity>
      <Image style={styles.mobImg} source={images.verifyMobImg} />
      <Text style={styles.Txt}>Verify your mobile number</Text>
      <Text style={styles.insTxt}>
        Enter 4-digit code sent to your mobile number
      </Text>
      <Text style={styles.mobNoTxt}>+92{mobileNumber}</Text>
      <View>
        <OtpInputs
          handleChange={value => {
            if (value?.length === 4) {
              if (value === '0000') {
                navigation.navigate(ScreenNames.DrawerScreen);
              } else {
                otpRef?.current.reset();
                Alert.alert('Wrong otp', 'wrong otp, please re-enter again', [
                  {
                    text: 'OK',
                    onPress: () => {
                      otpRef?.current.focus();
                    },
                  },
                ]);
              }
            }
          }}
          numberOfInputs={4}
          ref={otpRef}
          autofillFromClipboard={true}
          style={styles.otpStyles}
          keyboardType="phone-pad"
          onFocus={setFocused}
          inputContainerStyles={[
            styles.inputContainerStyles,
            {borderColor: focused ? Colors.black : Colors.grey},
          ]}
          inputStyles={styles.inputStyles}
          selectionColor="black"
        />
      </View>
      <TouchableOpacity
        // onPress={() =>
        //   navigation.reset({
        //     index: 0,
        //     routes: [{name: ScreenNames.DrawerScreen}],
        //   })
        // }
        style={[
          styles.sendCodeOpacity,
          {
            backgroundColor: OTP === 0 ? Colors.deeppink : Colors.gainsboro,
          },
        ]}
        activeOpacity={0.85}>
        <Text style={[styles.sendCodeTxt, {}]}>Send code again</Text>
      </TouchableOpacity>
      <Text style={{marginHorizontal: 15}}>
        Try again in{' '}
        <Text style={{color: Colors.black, fontWeight: 'bold'}}>
          10 seconds
        </Text>
      </Text>
    </SafeAreaView>
  );
};

export default VerifyMobScreen;
