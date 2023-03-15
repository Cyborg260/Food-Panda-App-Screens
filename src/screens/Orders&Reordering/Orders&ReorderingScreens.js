import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../../screens/Orders&Reordering/Orders&ReorderingStyles';
import {images} from '../../utils/Images';
import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../navigations/AppStack';
const OrdersReorderingScreens = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topView}>
        <TouchableOpacity
          activeOpacity={0.85}
          onPress={() => navigation.goBack()}>
          <Image style={styles.crossImg} source={images.crossIcon} />
        </TouchableOpacity>
        <Text style={styles.topViewTxt}>Orders & reordering</Text>
      </View>
      <View style={styles.centeredView}>
        <Image style={styles.img} source={images.ordersImage} />
        <Text style={styles.screenMainTxt}>Browse Restaurants </Text>
        <Text style={styles.instTxt}>
          You don't have any orders yet. Try one of our awesome{'\n'}{' '}
          restaurants and place your first order!
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate(ScreenNames.SearchEntryScreen)}
          activeOpacity={0.85}
          style={styles.bottomOpacity}>
          <Text style={styles.opacityTxt}>Browse restaurants in your area</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OrdersReorderingScreens;
