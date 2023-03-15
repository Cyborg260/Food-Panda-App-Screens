import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../../utils/colors';
import {images} from '../../utils/Images';
import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../navigations/AppStack';

const FavouritesRestaurant = () => {
  //=============== useState ================//
  const [pressDelivery, setPressDelivery] = useState(false);
  const [pressPickUp, setPressPickup] = useState(false);
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bothBtnView}>
        <TouchableOpacity
          activeOpacity={0.85}
          onPress={() => setPressDelivery(!pressDelivery)}
          style={[
            styles.deliveryBtnopacity,
            {
              borderColor: !pressDelivery ? Colors.deeppink : Colors.grey,
              backgroundColor: !pressDelivery ? Colors.deeppink : Colors.white,
            },
          ]}>
          <Text
            style={[
              styles.deliveryTxt,
              {color: !pressDelivery ? Colors.white : Colors.black},
            ]}>
            Delivery
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.85}
          onPress={() => setPressDelivery(!pressDelivery)}
          style={[
            styles.deliveryBtnopacity,
            {
              borderColor: pressDelivery ? Colors.deeppink : Colors.grey,
              backgroundColor: pressDelivery ? Colors.deeppink : Colors.white,
            },
          ]}>
          <Text
            style={[
              [
                styles.deliveryTxt,
                {color: pressDelivery ? Colors.white : Colors.black},
              ],
            ]}>
            Pick-Up
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.centeredView}>
        <Image style={styles.img} source={images.emptyFaves} />
        <Text style={styles.screenMainTxt}>No favourites saved</Text>
        <Text style={styles.instTxt}>
          To make ordering even faster, you'll find your{'\n'}faves here. Just
          look for the heart icon
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate(ScreenNames.SearchEntryScreen)}
          activeOpacity={0.85}
          style={styles.bottomOpacity}>
          <Text style={styles.opacityTxt}>Let's find some favourites</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default FavouritesRestaurant;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  deliveryBtnopacity: {
    width: 90,
    height: 45,
    borderRadius: 22,
    borderWidth: 1,
    justifyContent: 'center',
    marginHorizontal: 5,
    elevation: 1,
  },
  deliveryTxt: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bothBtnView: {
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 15,
  },
  screenMainTxt: {
    fontSize: 26,
    color: Colors.black,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  instTxt: {
    fontSize: 17,
    color: Colors.black,
    textAlign: 'center',
    marginVertical: 5,
  },
  bottomOpacity: {
    backgroundColor: Colors.deeppink,
    borderRadius: 10,
    height: 30,
    width: 250,
    alignSelf: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  opacityTxt: {
    fontSize: 17,
    color: Colors.white,
    fontWeight: 'bold',
    marginHorizontal: 15,
    textAlign: 'center',
  },
  img: {
    alignSelf: 'center',
    width: 75,
    height: 75,
    tintColor: Colors.deeppink,
    opacity: 0.3,
    marginVertical: 20,
  },
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
