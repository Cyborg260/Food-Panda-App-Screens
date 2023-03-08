import {
  View,
  Text,
  Image,
  SafeAreaView,
  StatusBar,
  ActivityIndicator,
  Modal,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Colors} from '../utils/colors';
import EnterLocStyles from '../assets/styles/EnterLocStyles';
import {images} from '../utils/Images';
import BottomButton from '../components/BottomButton';
import {ScreenNames} from '../navigations/AppStack';
import {useNavigation} from '@react-navigation/native';

const EnterLocScreen = () => {
  //====================== useState ====================//
  const [showOpacityView, setShowOpacityView] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  //==================== useEffect ========================//
  const navigation = useNavigation();
  const OpacityView = () => {
    setShowOpacityView(!showOpacityView);
    setTimeout(() => {
      navigation.navigate(ScreenNames.MapScreen);
    }, 3000);
  };
  console.log(showOpacityView, '============================opacity');
  return (
    <SafeAreaView
      style={[
        EnterLocStyles.container,
        {
          opacity: showOpacityView ? 0.5 : 1,
        },
      ]}>
      <StatusBar
        animated={true}
        backgroundColor={Colors.white}
        barStyle="dark-content"
      />
      {showOpacityView ? (
        <ActivityIndicator
          style={EnterLocStyles.indicator}
          size="large"
          color={Colors.deeppink}
        />
      ) : (
        <></>
      )}
      <Image style={EnterLocStyles.img} source={images.enterLocImg} />
      <Text style={EnterLocStyles.mainTxt}>
        Find restaurants and shops{'\n'}near you!
      </Text>
      <Text style={EnterLocStyles.intructxt}>
        By allowing location access, you can search for{'\n'}estaurants and
        shops near you and receive{'\n'}more accurate delivery.
      </Text>
      <View style={EnterLocStyles.bottomView}>
        <BottomButton
          txt="Allow Location Access"
          backgroundColor={Colors.deeppink}
          txtColor={Colors.white}
          borderColor={Colors.deeppink}
          navigation={() => setModalVisible(true)}
        />
        <BottomButton
          txt="Enter my location"
          backgroundColor={Colors.white}
          txtColor={Colors.deeppink}
          borderColor={Colors.white}
          navigation={() => OpacityView()}
        />
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={EnterLocStyles.centeredView}>
            <View style={EnterLocStyles.modalView}>
              <Image
                style={EnterLocStyles.pointerLocationImg}
                source={images.locationPointer}
              />
              <Text style={EnterLocStyles.modalTxt}>
                Allow <Text style={EnterLocStyles.modalFPtxt}>foodpanda </Text>
                to access this device's{'\n'} location?
              </Text>
              <View style={EnterLocStyles.lineView}></View>
              <TouchableOpacity
                activeOpacity={0.85}
                onPress={() => navigation.navigate(ScreenNames.DrawerScreen)}>
                <Text style={EnterLocStyles.txt}>While Using the app</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.85}
                onPress={() => navigation.navigate(ScreenNames.DrawerScreen)}>
                <Text style={EnterLocStyles.txt}>Only this time</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.85}
                onPress={() => {
                  setModalVisible(false);
                }}>
                <Text style={EnterLocStyles.txt}>Don't allow</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};
export default EnterLocScreen;
