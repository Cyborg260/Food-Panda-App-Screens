import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';
import {images} from '../utils/Images';
import EnterMobStyles from '../assets/styles/EnterMobStyles';
import BottomButton from '../components/BottomButton';
import {Colors} from '../utils/colors';
import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../navigations/AppStack';

const EnterMobileNo = () => {
  //=================== useState ========================//
  const [text, setText] = useState('');
  const navigation = useNavigation();
  return (
    <SafeAreaView style={EnterMobStyles.container}>
      <View style={EnterMobStyles.topView}>
        <Image style={EnterMobStyles.crossImg} source={images.crossIcon} />
        <Text style={EnterMobStyles.topTxt}>Continue</Text>
      </View>
      <Image style={EnterMobStyles.mobImg} source={images.enterMobImg} />
      <Text style={EnterMobStyles.Txt}>What's your mobile number?</Text>
      <Text style={EnterMobStyles.insTxt}>
        We need this to verify and secure the account
      </Text>
      <View style={EnterMobStyles.bothView}>
        <View style={EnterMobStyles.domainView}>
          <Image />
          <Text>+92</Text>
        </View>
        <View style={EnterMobStyles.textInputView}>
          <TextInput
            style={EnterMobStyles.inputStyle}
            onChangeText={setText}
            value={text}
            placeholder="Mobile number"
            keyboardType="numeric"
            maxLength={10}
          />
        </View>
      </View>
      <View style={EnterMobStyles.BottomTxt}>
        <BottomButton
          borderColor={Colors.gainsboro}
          txtColor={Colors.white}
          txt="Continue"
          backgroundColor={
            text.length === 10 ? Colors.deeppink : Colors.gainsboro
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
