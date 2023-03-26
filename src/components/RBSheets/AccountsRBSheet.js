import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useRef} from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import {Colors} from '../../utils/colors';
import {images} from '../../utils/Images';
import {useState} from 'react';

const AccountsBottomSheet = ({rbSheetRef}) => {
  //======================= useStae ==========================//
  const [showTick, setShowTick] = useState(false);
  return (
    <View style={styles.container}>
      <RBSheet
        ref={rbSheetRef}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={280}
        openDuration={250}
        customStyles={{
          container: {
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
          },
          draggableIcon: {
            backgroundColor: Colors.disableButton,
            width: 50,
          },
        }}>
        <Text style={styles.mainTxt}>Choose an account to use </Text>
        <TouchableOpacity
          activeOpacity={0.85}
          style={[
            styles.userAccountView,
            {
              borderBottomColor: Colors.disableButton,
              borderBottomWidth: 1,
            },
          ]}
          onPress={() => setShowTick(true)}>
          <View style={styles.imageView}>
            <Image style={styles.image} source={images.maleUserImg} />
          </View>
          <View style={styles.txtsView}>
            <Text style={styles.typeTxt}>Personal account</Text>
            <Text style={styles.nameTxt}>Syed Shuja</Text>
          </View>

          {showTick === true ? (
            <Image style={styles.tickImg} source={images.tickImg} />
          ) : (
            <></>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.85}
          style={styles.userAccountView}
          onPress={() => setShowTick(false)}>
          <View style={styles.imageView}>
            <Image style={styles.image} source={images.bussinessLogo} />
          </View>
          <View style={styles.txtsView}>
            <Text style={styles.typeTxt}>Corporate account</Text>
          </View>
          {showTick === false ? (
            <Image style={styles.tickImg} source={images.tickImg} />
          ) : (
            <></>
          )}
        </TouchableOpacity>
      </RBSheet>
    </View>
  );
};

export default AccountsBottomSheet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  mainTxt: {
    color: Colors.black,
    fontSize: 24,
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingVertical: 10,
  },
  userAccountView: {
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageView: {
    width: 55,
    height: 55,
    backgroundColor: Colors.deeppink,
    borderRadius: 65,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
    tintColor: Colors.white,
  },
  txtsView: {
    width: '75%',
    height: 45,
    paddingHorizontal: 8,
    marginHorizontal: 10,
  },
  typeTxt: {
    color: Colors.deeppink,
    fontSize: 18,
    fontWeight: 'bold',
  },
  nameTxt: {
    color: Colors.disableButton,
    fontSize: 15,
    fontWeight: 'bold',
  },
  tickImg: {
    resizeMode: 'contain',
    tintColor: Colors.deeppink,
  },
});
