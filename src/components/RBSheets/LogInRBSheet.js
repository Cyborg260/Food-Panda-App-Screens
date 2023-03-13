import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef} from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import BottomButton from '../BottomButton';
import {Colors} from '../../utils/colors';
import {images} from '../../utils/Images';
import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../navigations/AppStack';

const logInRBSheet = () => {
  //===================== useEffect =======================//
  useEffect(() => {
    setTimeout(() => {
      refSheet.current.open();
    }, 2000);
  }, []);
  const refSheet = useRef();
  const navigation = useNavigation();
  return (
    <RBSheet
      ref={refSheet}
      closeOnDragDown={true}
      closeOnPressMask={true}
      height={340}
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
      <Text style={styles.rbSheetTxt}>Sign up or Log in</Text>
      <BottomButton
        backgroundColor={Colors.white}
        borderColor={Colors.white}
        txt="Continue with Google"
        txtColor={Colors.grey}
        image={images.googleLogo}
        imageStyle={{
          width: 30,
          height: 30,
        }}
        isShadow={true}
      />
      <BottomButton
        backgroundColor={Colors.blue}
        borderColor={Colors.blue}
        txt="Continue with Facebook"
        txtColor={Colors.white}
        image={images.facebookLogo}
        imageStyle={{
          width: 30,
          height: 30,
          tintColor: Colors.white,
        }}
        isShadow={true}
      />
      <View style={styles.lineView}>
        <View style={styles.line}></View>
        <Text style={styles.orTxt}>or</Text>
        <View style={styles.line}></View>
      </View>
      <BottomButton
        txt="Continue with email"
        txtColor={Colors.deeppink}
        borderColor={Colors.deeppink}
        backgroundColor={Colors.white}
        navigation={() => {
          navigation.navigate(ScreenNames.EnterMobileNo),
            refSheet.current.close();
        }}
        isShadow={true}
      />
      <View style={{marginVertical: 5}}>
        <Text style={styles.instTxt}>
          By continuing, you agree to our
          <Text style={styles.highlightedTxt}> Terms and Conditions</Text>
          <Text> and</Text>
          <Text style={styles.highlightedTxt}> Privacy Policy.</Text>
        </Text>
      </View>
    </RBSheet>
  );
};

export default logInRBSheet;

const styles = StyleSheet.create({
  rbSheetTxt: {
    color: Colors.black,
    fontSize: 24,
    fontWeight: 'bold',
    paddingLeft: 20,
  },
  lineView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  line: {
    borderWidth: 1,
    borderColor: Colors.gainsboro,
    width: 170,
    marginHorizontal: 10,
  },
  orTxt: {
    fontSize: 18,
    color: Colors.black,
    fontWeight: 'bold',
  },
  instTxt: {
    marginTop: 5,
    fontSize: 11,
    textAlign: 'center',
    color: Colors.grey,
  },
  highlightedTxt: {
    fontSize: 11,
    textAlign: 'center',
    color: Colors.blue,
  },
});
