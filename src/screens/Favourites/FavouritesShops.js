import {SafeAreaView, StyleSheet, Image, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Colors} from '../../utils/colors';
import {images} from '../../utils/Images';

const FavouritesShops = () => {
  //================ useState ==================//
  const [showImage, setShowimage] = useState();
  //================ useEffect ==================//
  useEffect(() => {
    setTimeout(() => {
      setShowimage(!showImage);
    }, 2000);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      {
        <View style={styles.centeredImageView}>
          <Image
            style={[styles.centerImage, {opacity: showImage ? 0.3 : 1}]}
            source={images.shopCenterImg}
          />
          {showImage ? (
            <Image style={styles.closedImage} source={images.closedSign} />
          ) : null}
        </View>
      }
    </SafeAreaView>
  );
};

export default FavouritesShops;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  centeredImageView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  centerImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    tintColor: Colors.deeppink,
  },
  closedImage: {
    position: 'absolute',
    width: 120,
    height: 100,
    resizeMode: 'contain',
    tintColor: Colors.deeppink,
  },
});
