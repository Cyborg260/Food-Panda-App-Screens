import {
  StatusBar,
  ScrollView,
  Text,
  Animated,
  SafeAreaView,
  View,
} from 'react-native';
import React, {useEffect, useRef} from 'react';
import SearchView from './SearchView';
import TopView from './TopView';
import {AnimatedHeaderValue} from '../utils/Constant';
import ItemsScreen from '../components/ItemsScreen';
import {Colors} from '../utils/colors';
import MainScreenStyles from '../assets/styles/MainScreenStyles';
import RBSheet from 'react-native-raw-bottom-sheet';
import BottomButton from '../components/BottomButton';
import {images} from '../utils/Images';
import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../navigations/AppStack';

const MainScreen = () => {
  //===================== useEffect =======================//
  useEffect(() => {
    setTimeout(() => {
      refSheet.current.open();
    }, 2000);
  }, []);
  const refSheet = useRef();
  const navigation = useNavigation();
  return (
    <SafeAreaView style={MainScreenStyles.container}>
      <StatusBar backgroundColor={Colors.deeppink} />
      <TopView />
      <SearchView />
      <ScrollView
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: AnimatedHeaderValue}}}],
          {useNativeDriver: false},
        )}>
        <ItemsScreen />
      </ScrollView>
      {/* //====================== BottomSheet ========================// */}
      <RBSheet
        ref={refSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={300}
        openDuration={250}
        customStyles={{
          container: {
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
          },
          draggableIcon: {
            backgroundColor: Colors.gainsboro,
            width: 50,
          },
        }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={MainScreenStyles.rbSheetTxt}>Sign up or Log in</Text>
          <BottomButton
            backgroundColor={Colors.white}
            borderColor={Colors.white}
            txt="Continue with Google"
            txtColor={Colors.grey}
            image={images.googleLogo}
          />
          <BottomButton
            backgroundColor={Colors.blue}
            borderColor={Colors.blue}
            txt="Continue with Facebook"
            txtColor={Colors.white}
            image={images.facebookLogo}
          />
          <View style={MainScreenStyles.lineView}>
            <View style={MainScreenStyles.line}></View>
            <Text style={MainScreenStyles.orTxt}>or</Text>
            <View style={MainScreenStyles.line}></View>
          </View>
          <BottomButton
            txt="Continue with email"
            txtColor={Colors.deeppink}
            borderColor={Colors.deeppink}
            navigation={() => {
              navigation.navigate(ScreenNames.EnterMobileNo),
                refSheet.current.close();
            }}
          />
          <View style={{marginVertical: 5}}>
            <Text style={MainScreenStyles.instTxt}>
              By continuing, you agree to our
              <Text style={MainScreenStyles.highlightedTxt}>
                {' '}
                Terms and Conditions
              </Text>
              <Text> and</Text>
              <Text style={MainScreenStyles.highlightedTxt}>
                {' '}
                Privacy Policy.
              </Text>
            </Text>
          </View>
        </ScrollView>
      </RBSheet>
    </SafeAreaView>
  );
};
export default MainScreen;
