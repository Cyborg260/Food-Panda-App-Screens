import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StatusBar,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import styles from '../assets/styles/CartScreenStyles';
import {images} from '../utils/Images';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {addtocart} from '../redux/action';
import ModalView from '../components/modalView';
import {Colors} from '../utils/colors';

const ViewCart = ({...props}) => {
  //====================== useStae ==========================//
  const [showView, setShowView] = useState(false);
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const totalAmount = useSelector(state => state.price);
  const data = useSelector(state => state.quantity);
  const quantity = useSelector(state => state.quantity);

  const location = props?.route?.params?.locationDetail;
  let plus = {payload: data + 1, rupees: totalAmount + actualPrice, location};
  let minus = {payload: data - 1, rupees: totalAmount - actualPrice, location};
  let subTotal = totalAmount * quantity;
  let deliveryFees = 69;
  let platformFees = 4.99;
  let total = subTotal + deliveryFees + platformFees;
  let discount = (15 / 100) * total;
  let actualPrice = location;
  console.log(discount, '================ totalamount ================');
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor={Colors.white}
        barStyle="dark-content"
      />
      <View style={styles.topHeaderView}>
        <TouchableOpacity
          activeOpacity={0.85}
          onPress={() => navigation.goBack()}>
          <Image style={styles.crossIcon} source={images.crossIcon} />
        </TouchableOpacity>
        <View style={styles.topTxtView}>
          <Text style={styles.cartTxt}>Cart</Text>
          <Text style={styles.locationTxt}>{location.detail}</Text>
        </View>
      </View>
      <View style={styles.deliveryView}>
        <Image source={images.deliveryImg} />
        <View style={{marginHorizontal: 40}}>
          <Text style={styles.deliveryTxt}>Est. Delivery Time</Text>
          <Text style={styles.minstxt}>NOW (15Mins)</Text>
          <TouchableOpacity
            activeOpacity={0.85}
            onPress={() => Alert.alert('Unavailable')}
            style={styles.changeTxtView}>
            <Text style={styles.changeTxt}>Change</Text>
          </TouchableOpacity>
        </View>
      </View>

      {data === 0 ? (
        <></>
      ) : (
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 40,
            width: '90%',
            alignSelf: 'center',
            opacity: showView ? 0.5 : 1,
          }}
          activeOpacity={0.85}
          onPress={() => setShowView(!showView)}>
          <View style={styles.counterView}>
            <Text style={styles.counterDataTxt}>{data}</Text>
            <TouchableOpacity
              activeOpacity={0.85}
              onPress={() => {
                setShowView(!showView);
              }}>
              <Image style={styles.downArrowImg} source={images.downArrow} />
            </TouchableOpacity>
          </View>
          <Image style={styles.counterViewImg} source={location.image} />
          <Text style={styles.ImgTxt}>{location.title}</Text>
        </TouchableOpacity>
      )}
      {data === 0 ? <></> : <View style={styles.lineView}></View>}
      {showView ? (
        <ModalView
          onPressAdd={() => {
            const payload = {
              quantity: quantity + 1,
              price: totalAmount,
            };
            dispatch(addtocart(payload));
          }}
          onPressMinus={() => {
            const payload = {
              quantity: quantity - 1,
              price: totalAmount,
            };
            dispatch(addtocart(payload));
          }}
        />
      ) : null}
      <View style={styles.feeView}>
        <Text style={styles.subTotalTxt}>Subtotal</Text>
        <Text style={{color: Colors.black}}>Rs. {subTotal}.00</Text>
      </View>
      <View style={styles.feeView2}>
        <Text style={styles.deliveryTxt}>Delivery Fees</Text>
        <Text>Rs. {deliveryFees}.00</Text>
      </View>
      <View style={styles.feeView3}>
        <Text style={styles.platformFeeTxt}>Platorm Fees</Text>
        <Text>Rs. {platformFees}</Text>
      </View>
      <View style={styles.discountView}>
        <Text style={styles.discountTxt}>15% Discount</Text>
        <Text>Rs. {Number.parseFloat(discount).toFixed(2)}</Text>
      </View>
      <View style={styles.bottomView}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 10,
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.totalTxt}>Total</Text>
            <Text style={styles.vatTxt}>(incl. VAT)</Text>
          </View>
          <Text style={styles.totalPrice}>Rs.{total}.00</Text>
        </View>
        <TouchableOpacity activeOpacity={0.85} style={styles.paymentBtn}>
          <Text style={styles.paymentTxt}>Confirm payment and address </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default ViewCart;
