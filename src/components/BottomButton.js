import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {Colors} from '../utils/colors';
// AIzaSyAV-20ePoEXfVQdjnGgR4yLBuLi-oO-s9A
const BottomButton = ({
  txt,
  backgroundColor,
  txtColor,
  navigation,
  image,
  borderColor,
  imageStyle,
  isShadow,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={navigation}
      style={[
        styles.container,
        {backgroundColor: backgroundColor, borderColor: borderColor},
        isShadow && {
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,

          elevation: 3,
        },
      ]}>
      <Image style={[styles.img, imageStyle]} source={image} />
      <Text style={[styles.txt, {color: txtColor}]}>{txt}</Text>
    </TouchableOpacity>
  );
};

export default BottomButton;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 50,
    alignSelf: 'center',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    borderColor: Colors.deeppink,
    borderWidth: 1.5,
    // elevation: 1,
    flexDirection: 'row',
  },
  txt: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.deeppink,
  },
  img: {
    width: 35,
    height: 35,
    position: 'absolute',
    left: 15,
    resizeMode: 'contain',
  },
});
