import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../utils/colors';
import PhoneInput from 'react-native-phone-number-input';

const PhoneInputCompo = ({onChangePhoneNumber}) => {
  const [phoneNum, setPhoneNum] = useState('');
  console.log(onChangePhoneNumber, '================ phoneNumber');
  return (
    <View style={styles.container}>
      <PhoneInput
        defaultValue={phoneNum}
        defaultCode="PK"
        containerStyle={styles.inputStyle}
        withShadow
        textContainerStyle={{
          backgroundColor: 'white',
          marginLeft: 20,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: 'gainsboro',
        }}
        codeTextStyle={{
          backgroundColor: 'white',
          position: 'absolute',
          left: -55,
        }}
        countryPickerButtonStyle={{
          backgroundColor: 'white',
          borderWidth: 1,
          borderColor: 'gainsboro',
        }}
        onChangeText={onChangePhoneNumber}
        textInputProps={{
          maxLength: 10,
        }}
      />
    </View>
  );
};

export default PhoneInputCompo;

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    marginLeft: 20,
  },
  inputStyle: {
    width: 350,
    backgroundColor: 'transparent',
  },
});
