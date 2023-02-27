import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {images} from '../utils/Images';
import TopViewStyles from '../assets/styles/TopViewStyles';

const TopView = () => {
  const navigation = useNavigation();
  return (
    <View style={TopViewStyles.container}>
      <TouchableOpacity
        activeOpacity={0.85}
        onPress={() => navigation.openDrawer()}>
        <Image style={TopViewStyles.drawerImg} source={images.menuIcon} />
      </TouchableOpacity>
      <View style={TopViewStyles.txtsView}>
        <Text style={TopViewStyles.txt1}>Home</Text>
        <TouchableOpacity activeOpacity={0.5}>
          <Text style={TopViewStyles.txt2}>Al Hamra Garden Apartment</Text>
        </TouchableOpacity>
      </View>
      <View style={TopViewStyles.imgView}>
        <TouchableOpacity activeOpacity={0.5}>
          <Image style={TopViewStyles.img1} source={images.favouriteIcon} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5}>
          <Image style={TopViewStyles.img2} source={images.shoppingBagIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopView;
