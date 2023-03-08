import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {Colors} from '../utils/colors';

const BottomButton = ({
  txt,
  backgroundColor,
  txtColor,
  navigation,
  image,
  borderColor,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={navigation}
      style={[
        styles.container,
        {backgroundColor: backgroundColor, borderColor: borderColor},
      ]}>
      <Image style={styles.img} source={image} />
      <Text style={[styles.txt, {color: txtColor}]}>{txt}</Text>
    </TouchableOpacity>
  );
};

export default BottomButton;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 60,
    alignSelf: 'center',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    borderColor: Colors.deeppink,
    borderWidth: 1,
    elevation: 1,
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
