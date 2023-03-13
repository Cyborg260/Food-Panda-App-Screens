import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import styles from './HomeStyles';
import {PizzaData} from '../../utils/Data/RestaurantData/PizzaData';
import {CakesData} from '../../utils/Data/RestaurantData/CakesData';
import {ScreenNames} from '../../navigations/AppStack';
import {images} from '../../utils/Images';
import {Colors} from '../../utils/colors';
const Home = ({...props}) => {
  const navigation = useNavigation();
  console.log(props?.route?.params?.product.title, '================product');
  const productName = props?.route?.params?.product.title;
  const productId = props?.route?.params?.product.id;
  const renderItem = ({item}) => {
    return (
      <View style={{marginTop: 20}}>
        <TouchableOpacity
          activeOpacity={0.85}
          style={{height: 160, width: '95%', marginHorizontal: 14}}
          onPress={() => {
            navigation.navigate(ScreenNames.SelectedRest, {
              product: item,
            });
          }}>
          <Image
            style={{
              width: '98%',
              height: 160,
              borderRadius: 10,
              resizeMode: 'stretch',
            }}
            source={item.image}
          />
        </TouchableOpacity>
        <View style={{paddingLeft: 10, marginTop: 10}}>
          <View style={{marginTop: 4}}>
            <Text style={{color: Colors.black, fontWeight: 'bold'}}>
              {item.title}
            </Text>
          </View>
          <View>
            <Text> {item.detail} </Text>
          </View>
          <View>
            <Text style={{color: Colors.black, fontWeight: 'bold'}}>
              {' '}
              PKR {item.price} Rs.
            </Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      <View style={styles.headerView}>
        <TouchableOpacity
          style={styles.backBtnOpacity}
          activeOpacity={0.85}
          onPress={() => navigation.goBack()}>
          <Image style={styles.backBtn} source={images.lefticon} />
        </TouchableOpacity>
        <Text style={styles.maintxt}>{productName}</Text>
      </View>
      <View style={styles.flatlistView}>
        <FlatList
          data={
            productId === 0 ? PizzaData : productId === 1 ? CakesData : null
          }
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};
export default Home;
