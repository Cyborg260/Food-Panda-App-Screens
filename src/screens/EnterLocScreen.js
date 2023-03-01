import {
  View,
  Text,
  Image,
  SafeAreaView,
  StatusBar,
  ActivityIndicator,
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
        />
        <BottomButton
          txt="Enter my location"
          backgroundColor={Colors.white}
          txtColor={Colors.deeppink}
          borderColor={Colors.white}
          navigation={() => OpacityView()}
        />
      </View>
    </SafeAreaView>
  );
};
export default EnterLocScreen;
