import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {images} from '../../utils/Images';

const DealsScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View
        style={{
          marginVertical: 10,
        }}>
        <TouchableOpacity
          activeOpacity={0.85}
          onPress={() => navigation.goBack()}>
          <Image style={styles.img} source={images.lefticon} />
        </TouchableOpacity>
      </View>
      <View style={styles.indicator}>
        <ActivityIndicator size="large" color="deeppink" />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // backgroundColor: "yellow",
    marginHorizontal: 15,
    flex: 1,
  },
  img: {
    tintColor: 'deeppink',
    resizeMode: 'stretch',
    width: 20,
    height: 20,
  },
  indicator: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export default DealsScreen;
