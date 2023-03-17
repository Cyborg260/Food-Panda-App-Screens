import React from 'react';
import {Easing} from 'react-native';
// packages import //
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
// import screens //
import DrawerStack from './DrawerStack';
import SearchEntry from '../screens/Search/SearchEntry';
import SelectedRest from '../screens/SelectedRestaurants/SelectedRestaurant';
import EnterLocScreen from '../screens/EnterLocation/EnterLocScreen';
import MapScreen from '../screens/Map/MapScreen';
import ViewCart from '../screens/ViewYourCart/ViewCart';
import Home from '../screens/Home/Home';
import EnterMobileNo from '../screens/EnterYourMobNo/EnterMobileNo';
import VerifyMobScreen from '../screens/VerifyYourMobNo/VerifyMobScreen';
import SplashScreen from '../screens/SplashScreen/SplashScreen';
import DealsScreen from '../screens/Deals/DealsScreen';
import RestaurantsSceen from '../screens/Restaurant/RestaurantsSceen';
import FavouritesScreen from '../screens/Favourites/FavouritesScreen';
import OrdersReorderingScreens from '../screens/Orders&Reordering/Orders&ReorderingScreens';
import AddressScreen from '../screens/Address/AddressScreen';
import PandaPayScreen from '../screens/PandaPay/PandaPayScreen';
import VouchersOfferScreen from '../screens/Vouchers/VouchersOfferScreen';
import VouchersHistory from '../screens/Vouchers/VouchersHistory';
import HelpCenterScreen from '../screens/HelpCenter/HelpCenterScreen';
import FpBussinesssScreen from '../screens/FoodpandaBussiness/FpBussinessScreen';

const Stack = createStackNavigator();
export const ScreenNames = {
  SplashScreen: 'SplashScreen',
  EnterLocation: 'EnterLocation',
  MapScreen: 'MapScreen',
  DrawerScreen: 'DrawerStack',
  SearchEntryScreen: 'SearchEntry',
  DealScreen: 'Deals',
  RestauScreen: 'Restaurants',
  SelectedRest: 'SelectedRestaurant',
  CartScreen: 'CartScreen',
  Home: 'Home',
  EnterMobileNo: 'EnterMobileNo',
  VerfifyMobNo: 'VerifyMob',
  Favourites: 'Favourites',
  OrderReordering: 'Orders&ReOrder',
  AddressScreen: 'AddressScreen',
  PandaPayScreen: 'PandaPayScreen',
  VoucherOffers: 'Voucher&Offers',
  VoucherHistory: 'VoucherHistory',
  HelpCenter: 'HelpCenterScreen',
  FpForBussiness: 'FpForBussiness',
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
      <Stack.Screen
        name="SearchEntry"
        component={SearchEntry}
        options={options}
      />
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
      <Stack.Screen
        name="Favourites"
        component={FavouritesScreen}
        options={options}
      />
      <Stack.Screen
        name="Orders&ReOrder"
        component={OrdersReorderingScreens}
        options={options}
      />
      <Stack.Screen
        name="AddressScreen"
        component={AddressScreen}
        options={options}
      />
      <Stack.Screen
        name="PandaPayScreen"
        component={PandaPayScreen}
        options={options}
      />
      <Stack.Screen
        name="Voucher&Offers"
        component={VouchersOfferScreen}
        options={options}
      />
      <Stack.Screen
        name="VoucherHistory"
        component={VouchersHistory}
        options={options}
      />
      <Stack.Screen
        name="HelpCenterScreen"
        component={HelpCenterScreen}
        options={options}
      />
      <Stack.Screen
        name="FpForBussiness"
        component={FpBussinesssScreen}
        options={options}
      />
    </Stack.Navigator>
  );
};
export default StackScreens;
