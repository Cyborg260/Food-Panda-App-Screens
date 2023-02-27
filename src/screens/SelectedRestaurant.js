import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  StatusBar,
  ScrollView,
  SafeAreaView,
  Alert,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import styles from '../assets/styles/styles';
import {useNavigation} from '@react-navigation/native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {useDispatch, useSelector} from 'react-redux';
import {addtocart} from '../redux/action';
import {images} from '../utils/Images';
import {Colors} from '../utils/colors';
import {ScreenNames} from '../navigations/AppStack';

const SelectedCateg = ({route}) => {
  //======================= useState ==============================//
  const [menus, setMenus] = useState([]);
  //========================= useEffect =============================//
  useEffect(() => {
    const arr = [];
    arr.push(product);
    console.log(arr);
    setMenus(arr);
  }, []);

  useEffect(() => {
    console.log('================= State ============');
    console.log(state);
  }, [state]);
  const refRBSheet = useRef();
  const product = route?.params?.product;
  console.log(product.price, '=================product===================');
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const quantity = useSelector(state => state.quantity);
  const amount = useSelector(state => state.price);
  console.log(amount, '================amount================');
  console.log(quantity, '================quantity================');
  let actualPrice = product.price;
  let plus = {payload: quantity + 1, rupees: amount + actualPrice, product};
  let minus = {payload: quantity - 1, rupees: amount - actualPrice, product};
  console.log(plus.rupees, '=========== actual price ===============');

  const renderItem = ({item}) => (
    <Items image={item.image} title={item.title} price={item.price} />
  );
  const Items = ({image, title, price}) => (
    <View style={styles.itemsView}>
      {/* {quantity > 0 ? (
        <View style={styles.quantLogo}>
          <Text style={styles.quanTxt}>{quantity}</Text>
        </View>
      ) : (
        <></>
      )} */}
      <TouchableOpacity
        style={styles.categImage}
        activeOpacity={0.85}
        onPress={() => refRBSheet.current.open()}>
        <Image style={styles.image} source={image} />
        <Text style={styles.text}>{title}</Text>
        <View style={styles.priceTxtView}>
          <Text style={styles.text1}>Rs. {price}.00</Text>
        </View>
      </TouchableOpacity>
      <Text style={styles.locationTxtStyle}>{product.detail}</Text>
    </View>
  );
  return (
    <SafeAreaView style={{flex: 1}}>
      <TouchableOpacity
        style={styles.backBtnView}
        onPress={() => navigation.goBack()}
        activeOpacity={0.85}>
        <Image style={styles.backBtn} source={images.lefticon} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.shareBtnView}
        onPress={() => Alert.alert('No Internet Connection')}
        activeOpacity={0.85}>
        <Image style={styles.shareBtn} source={images.shareIcon} />
      </TouchableOpacity>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <Image style={styles.topImage} source={images.fp7} />
      <Text style={styles.cateTxt}>Popular</Text>
      <FlatList data={menus} renderItem={renderItem} numColumns={2} />
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={false}
        closeOnPressMask={true}
        customStyles={styles.rbSheetStyles}>
        <Image style={styles.topImage} source={product.image} />
        <View style={styles.rbSheetTxtView}>
          <Text style={styles.itemName}>{product.title}</Text>
          <Text style={styles.itemPrice}>from Rs. {product.price}:00</Text>
        </View>
        <View style={styles.detailTxtView}>
          <Text style={styles.detailTxt}>{product.detail}</Text>
        </View>
        <View style={styles.lineView}></View>
        <Text style={styles.specialHeadingTxt}>Special instructions</Text>
        <View style={styles.specialTxtView}>
          <Text style={styles.specialTxt}>
            Please let us know if you are allergic to anything or if you need to
            avoid anything.
          </Text>
        </View>
        <View style={styles.cartOpacityView}>
          {/* //Minus icon */}
          <TouchableOpacity
            activeOpacity={0.85}
            style={[
              styles.IconView,
              {
                backgroundColor:
                  quantity <= 0 ? Colors.gainsboro : Colors.deeppink,
              },
            ]}
            onPress={() => {
              const payload = {
                quantity: quantity - 1,
                price: actualPrice,
              };

              dispatch(addtocart(payload));
            }}>
            <Image style={styles.cartIcon} source={images.subtractImg} />
          </TouchableOpacity>
          <Text style={styles.counterTxt}>{quantity}</Text>
          {/* //Plus icon */}
          <TouchableOpacity
            activeOpacity={0.85}
            style={[styles.IconView1, {backgroundColor: Colors.deeppink}]}
            onPress={() => {
              const payload = {
                quantity: quantity + 1,
                price: actualPrice,
              };

              dispatch(addtocart(payload));
            }}>
            <Image style={styles.cartIcon} source={images.plusImg} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.RBbutton,
              {
                backgroundColor:
                  quantity <= 0 ? Colors.gainsboro : Colors.deeppink,
              },
            ]}
            activeOpacity={0.85}
            onPress={() => {
              refRBSheet.current.close();
            }}>
            <Text style={styles.RBbuttonTxt}>Add To Cart</Text>
          </TouchableOpacity>
        </View>
      </RBSheet>
      {quantity > 0 ? (
        <View style={styles.cartView}>
          <TouchableOpacity
            style={styles.viewCartBtn}
            activeOpacity={0.85}
            onPress={() =>
              navigation.navigate(ScreenNames.CartScreen, {
                locationDetail: product,
              })
            }>
            {quantity > 0 ? (
              <View style={styles.viewQuan}>
                <Text style={styles.counterTxt2}>{quantity}</Text>
              </View>
            ) : (
              <></>
            )}
            <Text style={styles.RBbuttonTxt}> View your cart</Text>
            {amount > 0 ? (
              <Text style={styles.amountTxt}>{actualPrice * quantity}.00</Text>
            ) : (
              <></>
            )}
          </TouchableOpacity>
        </View>
      ) : (
        <></>
      )}
    </SafeAreaView>
  );
};
export default SelectedCateg;
