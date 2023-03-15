import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import styles from '../../screens/HelpCenter/HelpCenterStyles';
import {useNavigation} from '@react-navigation/native';
import {images} from '../../utils/Images';
import {Colors} from '../../utils/colors';
import {Data} from '../../utils/Data/HelpCenter/HelpCenterData';

const HelpCenterScreen = () => {
  const navigation = useNavigation();
  const renderItem = ({item}) => (
    <View style={styles.renderItemView}>
      <View style={styles.View}>
        <Image style={styles.renderitemImg} source={item.image} />
        <Text style={styles.renderitemTxt}>{item.txt}</Text>
      </View>
      <Image style={styles.renderItemArrowIcon} source={item.icon} />
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      {/* //========= topView =========// */}
      <View style={styles.topView}>
        <TouchableOpacity
          activeOpacity={0.85}
          onPress={() => navigation.goBack()}>
          <Image style={styles.crossImg} source={images.crossIcon} />
        </TouchableOpacity>
        <Text style={styles.topViewTxt}>How can we help?</Text>
      </View>
      <Text style={styles.maintxt}>How can we help?</Text>
      <View>
        <FlatList data={Data} renderItem={renderItem} />
      </View>
    </SafeAreaView>
  );
};

export default HelpCenterScreen;
