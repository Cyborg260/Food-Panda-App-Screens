import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import React, {useState, useRef} from 'react';
import {images} from '../utils/Images';
import VerifyMobStyles from '../assets/styles/VerifyMobStyles';
import {Colors} from '../utils/colors';
import OtpInputs from 'react-native-otp-inputs';
import {useIsFocused} from '@react-navigation/native';
const VerifyMobScreen = ({...props}) => {
  //================= useState ======================//
  const [codeSend, setCodeSend] = useState();
  const [focused, setFocused] = useState();
  const [OTP, setOTP] = useState('');
  console.log(OTP, '===============otp');
  const otpRef = useRef(null);
  const mobileNumber = props?.route?.params?.text;
  console.log(mobileNumber, '=====================mobileNumber');
  const SendCodeAgain = () => {
    setCodeSend(!codeSend);
  };
  return (
    <SafeAreaView style={VerifyMobStyles.container}>
      <View style={VerifyMobStyles.topView}>
        <Image style={VerifyMobStyles.crossImg} source={images.crossIcon} />
      </View>
      <Image style={VerifyMobStyles.mobImg} source={images.verifyMobImg} />
      <Text style={VerifyMobStyles.Txt}>Verify your mobile number</Text>
      <Text style={VerifyMobStyles.insTxt}>
        Enter 4-digit code sent to your mobile number
      </Text>
      <Text style={VerifyMobStyles.mobNoTxt}>+92{mobileNumber}</Text>
      <View>
        <OtpInputs
          handleChange={value => setOTP(value)}
          numberOfInputs={4}
          ref={otpRef}
          autofillFromClipboard={false}
          style={{
            marginVertical: 25,
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 15,
          }}
          keyboardType="phone-pad"
          onFocus={setFocused}
          inputContainerStyles={{
            borderRadius: 8,
            backgroundColor: Colors.white,
            borderColor: focused  ? Colors.black : Colors.gainsboro,
            borderWidth: 1,
            alignItems: 'center',
            justifyContent: 'center',
            width: 65,
            height: 65,
            marginHorizontal: 5,
          }}
          inputStyles={{
            width: '100%',
            textAlign: 'center',
            fontSize: 20,
            fontWeight: '700',
            borderRadius: 10,
            color: 'black',
          }}
          selectionColor="black"
        />
      </View>
      <TouchableOpacity
        onPress={() => SendCodeAgain()}
        style={[
          VerifyMobStyles.sendCodeOpacity,
          {backgroundColor: codeSend ? Colors.deeppink : Colors.gainsboro},
        ]}
        activeOpacity={0.85}>
        <Text style={[VerifyMobStyles.sendCodeTxt, {}]}>Send code again</Text>
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
