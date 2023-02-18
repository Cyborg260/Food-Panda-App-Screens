import { View, Text } from 'react-native'
import React from 'react'

// import screens //

import DrawerStack from './DrawerStack';

// packages import //
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchView from '../screens/SearchView';
import DealsScreen from '../screens/DealsScreen';
import SearchEntry from '../screens/SearchEntry';
import RestaurantsSceen from '../screens/RestaurantsSceen';
import SelectedCateg from '../screens/SelectedCateg';
import RestaurCateg from '../screens/RestaurCateg';

const Stack = createNativeStackNavigator();

const StackScreens = () => {

  const forFade = ({ current }) => {
    cardStyle: {
      opacity: current.progress
    }
  }
  return (
    <Stack.Navigator
      screenOptions={({
        cardStyleInterpolator: forFade,
        headerShown: false,
      })}
    >
      <Stack.Screen name='DrawerStack' component={DrawerStack} options={{ headerShown: false, gestureDirection: "horizontal", cardStyleInterpolator: forFade }} />
      <Stack.Screen name='Search' component={SearchEntry} options={{ headerShown: false, gestureDirection: "horizontal" }} />
      <Stack.Screen name='Deals' component={DealsScreen} options={{ headerShown: false, gestureDirection: "horizontal" }} />
      <Stack.Screen name='Restaurants' component={RestaurantsSceen} options={{ headerShown: false, gestureDirection: "horizontal" }} />
      <Stack.Screen name='RestCateg' component={RestaurCateg} options={{ headerShown: false, gestureDirection: "horizontal" }} />
      <Stack.Screen name='SeleCateg' component={SelectedCateg} options={{ headerShown: false, gestureDirection: "horizontal" }} />

      {/* <Stack.Screen name='SearchView' component={SearchView} options={{ headerShown: false, gestureDirection: "horizontal" }} />
      <Stack.Screen name='Search' component={SearchEntry} options={{ headerShown: false, gestureDirection: "horizontal" }} />
      <Stack.Screen name='DealsScreen' component={DealsScreen} options={{ headerShown: false, gestureDirection: "horizontal" }} />
      <Stack.Screen name='RestaurantsScreen' component={RestaurantsSceen} options={{ headerShown: false, gestureDirection: "horizontal" }} /> */}
    </Stack.Navigator>
  )
};
export default StackScreens;