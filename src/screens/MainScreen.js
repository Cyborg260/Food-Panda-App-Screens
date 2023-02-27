import {StatusBar, ScrollView, Animated, SafeAreaView} from 'react-native';
import React from 'react';
import SearchView from './SearchView';
import TopView from './TopView';
import {AnimatedHeaderValue} from '../utils/Constant';
import ItemsScreen from '../components/ItemsScreen';
import {Colors} from '../utils/colors';
import MainScreenStyles from '../assets/styles/MainScreenStyles';

const MainScreen = () => {
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
    </SafeAreaView>
  );
};
export default MainScreen;
