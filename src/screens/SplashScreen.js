import {StyleSheet, Text, View,StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import {Colors} from '../utils/colors';
import {ScreenNames} from '../navigations/AppStack';
import {useNavigation} from '@react-navigation/native';

const SplashScreen = () => {
  //=================== useEffect ======================//
    useEffect(() => {
      setTimeout(() => {
        navigation.reset({
          index: 0,
          routes: [{name: ScreenNames.DrawerScreen}],
        });
      }, 2500);
    }, []);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor={Colors.deeppink}
        barStyle="light-content"
      />
      <Text style={styles.txt}>Food Panda</Text>
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
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.white,
  },
});
