import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addtocart} from '../redux/action';
import {images} from '../utils/Images';

const ModalView = ({onPressAdd, onPressMinus}) => {
  const dispatch = useDispatch();
  const amount = useSelector(state => state);
  const data = useSelector(state => state.quantity);
  const WholeData = ''; // props?.route?.params?.locationDetail;

  let actualPrice = WholeData;
  let plus = {payload: data + 1, rupees: amount + actualPrice};
  let minus = {payload: data - 1, rupees: amount - actualPrice};
  console.log(amount, '=================== amount ================');
  console.log(
    WholeData,
    '=================== actualPricerrrrr ================',
  );

  return data === 0 ? (
    <></>
  ) : (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.85} onPress={onPressMinus}>
        <Image style={styles.quantityIcon} source={images.subtractImg} />
      </TouchableOpacity>
      <Text style={styles.seperator}>|</Text>
      <TouchableOpacity activeOpacity={0.85} onPress={onPressAdd}>
        <Image style={styles.quantityIcon} source={images.plusImg} />
      </TouchableOpacity>
    </View>
  );
};

export default ModalView;

const styles = StyleSheet.create({
  container: {
    width: 90,
    height: 50,
    borderRadius: 3,
    borderWidth: 2,
    borderColor: 'gainsboro',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 230,
    left: 80,
    backgroundColor: '#fff',
  },
  seperator: {fontSize: 28, color: 'gainsboro', marginBottom: 6},
  quantityIcon: {
    width: 20,
    height: 20,
    tintColor: 'deeppink',
    resizeMode: 'stretch',
    marginHorizontal: 8,
  },
});
