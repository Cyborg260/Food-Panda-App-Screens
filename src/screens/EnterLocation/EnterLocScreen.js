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
import {Colors} from '../../utils/colors';
import styles from './EnterLocStyles';
import {images} from '../../utils/Images';
import BottomButton from '../../components/BottomButton';
import {ScreenNames} from '../../navigations/AppStack';
import {useNavigation} from '@react-navigation/native';

const EnterLocScreen = () => {
  //====================== useState ====================//
  const [showOpacityView, setShowOpacityView] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  //==================== useEffect ========================//
  const navigation = useNavigation();
  const OpacityView = () => {
    setShowOpacityView(true);
    setTimeout(() => {
      setShowOpacityView(false);
      navigation.navigate(ScreenNames.MapScreen);
    }, 3000);
  };
  const navigateToHome = () => {
    setModalVisible(false);
    navigation.reset({
      index: 0,
      routes: [{name: ScreenNames.DrawerScreen}],
    });
  };

  return (
    <SafeAreaView style={[styles.container]}>
      <StatusBar
        animated={true}
        backgroundColor={Colors.white}
        barStyle="dark-content"
      />
      <Image style={styles.img} source={images.enterLocImg} />
      <Text style={styles.mainTxt}>
        Find restaurants and shops{'\n'}near you!
      </Text>
      <Text style={styles.intructxt}>
        By allowing location access, you can search for{'\n'}estaurants and
        shops near you and receive{'\n'}more accurate delivery.
      </Text>
      <View style={styles.bottomView}>
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
          borderColor={Colors.deeppink}
          navigation={() => OpacityView()}
        />
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Image
                style={styles.pointerLocationImg}
                source={images.locationPointer}
              />
              <Text style={styles.modalTxt}>
                Allow <Text style={styles.modalFPtxt}>foodpanda </Text>
                to access this device's{'\n'} location?
              </Text>
              <View style={styles.lineView}></View>
              <TouchableOpacity
                activeOpacity={0.85}
                onPress={() => navigateToHome()}>
                <Text style={styles.txt}>While Using the app</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.85}
                onPress={() => navigateToHome()}>
                <Text style={styles.txt}>Only this time</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.85}
                onPress={() => {
                  setModalVisible(false);
                }}>
                <Text style={styles.txt}>Don't allow</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>

      {showOpacityView && (
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(255,255,255,0.35)',
            // opacity:0.5,
          }}>
          <ActivityIndicator
            style={styles.indicator}
            size="large"
            color={Colors.deeppink}
          />
        </View>
      )}
    </SafeAreaView>
  );
};
export default EnterLocScreen;
