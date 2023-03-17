import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import styles from './FpBussinessStyles';
import {images} from '../../utils/Images';
import {useNavigation} from '@react-navigation/native';
import BottomButton from '../../components/BottomButton';
import {Colors} from '../../utils/colors';
const FpBussinesssScreen = () => {
  const [topViewVisible, setTopViewVisible] = useState(false);
  const navigation = useNavigation();
  const windowWidth = Dimensions.get('screen').width;
  const windowHeight = Dimensions.get('screen').height;
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.crossImageOpacity}
        activeOpacity={0.85}
        onPress={() => navigation.goBack()}>
        <Image style={styles.crossImg} source={images.crossIcon} />
      </TouchableOpacity>
      {topViewVisible ? (
        <View style={styles.topView}>
          <Text style={styles.topTxt}>foodpanda for business</Text>
        </View>
      ) : (
        <></>
      )}
      <ScrollView
        style={{
          width: windowWidth,
          height: windowHeight,
        }}
        onScroll={() => setTopViewVisible(!topViewVisible)}
        showsVerticalScrollIndicator={false}>
        <Image style={styles.fpBusinessLogo} source={images.fpBussinessLogo} />
        <View style={styles.foodPandaBox}>
          <Text style={styles.boxTxt}>foodpanda for business</Text>
          <Text style={styles.boxInstr}>
            Drive your business forword by keeping{'\n'}your employees happy and
            fed.
          </Text>
        </View>
        {/* //======== three bussiness Features view =========// */}
        <View style={styles.wholeView}>
          <Image style={styles.image} source={images.giftImg} />
          <View style={styles.txtView}>
            <Text style={styles.txt}>Food worth for working</Text>
            <Text style={styles.inst}>
              Allowances, pandapro, gift vouchers{'\n'}catering and office
              pantry.
            </Text>
          </View>
        </View>
        {/* //2nd// */}
        <View style={styles.wholeView}>
          <Image style={styles.image} source={images.controlImg} />
          <View style={styles.txtView}>
            <Text style={styles.txt}>Expense control</Text>
            <Text style={styles.inst}>
              Easy employee management{'\n'}allowance rules, monthly invoicing
            </Text>
          </View>
        </View>
        {/* //3rd// */}
        <View style={styles.wholeView}>
          <Image style={styles.image} source={images.starsImg} />
          <View style={styles.txtView}>
            <Text style={styles.txt}>Dedicated support</Text>

            <Text style={styles.inst}>
              Get in touch with our teams fo any{'\n'}issue or hot restaurant
              tips
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomBtnView}>
        <BottomButton
          backgroundColor={Colors.deeppink}
          txt="I'm interested"
          txtColor={Colors.white}
          borderColor={Colors.deeppink}
        />
      </View>
    </SafeAreaView>
  );
};

export default FpBussinesssScreen;
