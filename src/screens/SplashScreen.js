import {StyleSheet, Text, View, StatusBar, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Colors} from '../utils/colors';
import {ScreenNames} from '../navigations/AppStack';
import {useNavigation} from '@react-navigation/native';
import {images} from '../utils/Images';

const SplashScreen = () => {
  //=================== useState =======================//
  const [showPic, setShowPic] = useState(false);
  //=================== useEffect ======================//
  useEffect(() => {
    setTimeout(() => {
      setShowPic(!showPic);
    }, 3000);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{name: ScreenNames.EnterLocation}],
      });
    }, 5000);
  }, []);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor={Colors.deeppink}
        barStyle="light-content"
      />
      <Text style={[styles.txt, {fontSize: showPic ? 16 : 24}]}>
        Food Panda
      </Text>
      {showPic ? <Image style={styles.panda} source={images.panda} /> : <></>}
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.deeppink,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    fontWeight: 'bold',
    color: Colors.white,
  },
  panda: {
    position: 'absolute',
    resizeMode: 'contain',
    height: 250,
    width: 250,
    bottom: -10,
  },
});
