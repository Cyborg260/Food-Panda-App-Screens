import {
  StatusBar,
  ScrollView,
  Text,
  Animated,
  SafeAreaView,
  View,
} from 'react-native';
import React, {useEffect, useRef} from 'react';
import SearchView from '../Search/SearchView';
import {AnimatedHeaderValue} from '../../utils/Constant';
import ItemsScreen from '../../components/ItemsScreen';
import {Colors} from '../../utils/colors';
import styles from '../../screens/MainScreen/MainScreenStyles';
import LogInRBSheet from '../../components/RBSheets/LogInRBSheet';
import TopView from '../../components/TopView/TopView';

const MainScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
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
      <LogInRBSheet />
    </SafeAreaView>
  );
};
export default MainScreen;
