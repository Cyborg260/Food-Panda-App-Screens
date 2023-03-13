import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {images} from '../../utils/Images';
import styles from '../../components/TopView/TopViewStyles';

const TopView = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.85}
        onPress={() => navigation.openDrawer()}>
        <Image style={styles.drawerImg} source={images.menuIcon} />
      </TouchableOpacity>
      <View style={styles.txtsView}>
        <Text style={styles.txt1}>Home</Text>
        <TouchableOpacity activeOpacity={0.5}>
          <Text style={styles.txt2}>Al Hamra Garden Apartment</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.imgView}>
        <TouchableOpacity activeOpacity={0.5}>
          <Image style={styles.img1} source={images.favouriteIcon} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5}>
          <Image style={styles.img2} source={images.shoppingBagIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopView;
