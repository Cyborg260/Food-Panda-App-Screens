import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../../screens/Address/AddressScreenStyles';
import {images} from '../../utils/Images';
import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../navigations/AppStack';

const AddressScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topView}>
        <TouchableOpacity
          activeOpacity={0.85}
          onPress={() => navigation.goBack()}>
          <Image style={styles.leftImage} source={images.lefticon} />
        </TouchableOpacity>
        <Text style={styles.topViewTxt}>Address</Text>
      </View>
      <View style={styles.centeredView}>
        <Image style={styles.img} source={images.emptyAddress} />
        <Text style={styles.screenMainTxt}>It's empty here</Text>
        <Text style={styles.instTxt}>
          You haven't saved any address yet. Add new{'\n'}address to get
          started.
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate(ScreenNames.MapScreen)}
          activeOpacity={0.85}
          style={styles.bottomOpacity}>
          <Text style={styles.opacityTxt}>Add New Address</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AddressScreen;
