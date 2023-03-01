import React from 'react';
import {Easing} from 'react-native';
// packages import //
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
// import screens //
import DrawerStack from './DrawerStack';
import DealsScreen from '../screens/DealsScreen';
import SearchEntry from '../screens/SearchEntry';
import RestaurantsSceen from '../screens/RestaurantsSceen';
import SelectedRest from '../screens/SelectedRestaurant';
import ViewCart from '../screens/ViewCart';
import Home from '../screens/Home';
import SplashScreen from '../screens/SplashScreen';
import EnterLocScreen from '../screens/EnterLocScreen';
import MapScreen from '../screens/MapScreen';
import EnterMobileNo from '../screens/EnterMobileNo';
import VerifyMobScreen from '../screens/VerifyMobScreen';

const Stack = createStackNavigator();
export const ScreenNames = {
  SplashScreen: 'SplashScreen',
  EnterLocation: 'EnterLocation',
  MapScreen: 'MapScreen',
  DrawerScreen: 'DrawerStack',
  SearchScreen: 'Search',
  DealScreen: 'Deals',
  RestauScreen: 'Restaurants',
  SelectedRest: 'SelectedRestaurant',
  CartScreen: 'CartScreen',
  Home: 'Home',
  EnterMobileNo: 'EnterMobileNo',
  VerfifyMobNo: 'VerifyMob',
};
const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const closeconfig = {
  animation: 'timing',
  config: {
    duration: 200,
    easing: Easing.linear,
  },
};

const StackScreens = () => {
  const options = {
    headerShown: false,
    gestureEnabled: false,
    gestureDirection: 'horizontal',
    transitionSpec: {
      open: config,
      close: closeconfig,
    },
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  };

  const screenOptions = {
    gestureEnabled: true,
    cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
  };

  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={screenOptions}>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={options}
      />
      <Stack.Screen
        name="EnterLocation"
        component={EnterLocScreen}
        options={options}
      />
      <Stack.Screen name="MapScreen" component={MapScreen} options={options} />
      <Stack.Screen
        name="EnterMobileNo"
        component={EnterMobileNo}
        options={options}
      />
      <Stack.Screen
        name="VerifyMob"
        component={VerifyMobScreen}
        options={options}
      />
      <Stack.Screen
        name="DrawerStack"
        component={DrawerStack}
        options={options}
      />
      <Stack.Screen name="Search" component={SearchEntry} options={options} />
      <Stack.Screen name="Deals" component={DealsScreen} options={options} />
      <Stack.Screen
        name="Restaurants"
        component={RestaurantsSceen}
        options={options}
      />
      <Stack.Screen
        name="SelectedRestaurant"
        component={SelectedRest}
        options={options}
      />
      <Stack.Screen name="CartScreen" component={ViewCart} options={options} />
      <Stack.Screen name="Home" component={Home} options={options} />
    </Stack.Navigator>
  );
};
export default StackScreens;
