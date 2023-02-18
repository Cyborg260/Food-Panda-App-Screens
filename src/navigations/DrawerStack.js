import { View, Text, Settings } from 'react-native'
import React from 'react'
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer'
import Profile from '../screens/Profile'
import MainScreen from '../screens/MainScreen';
import CustomDrawer from '../screens/CustomDrawer';


const Drawer = createDrawerNavigator();

const DrawerStack = () => {
  return (

    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: "#fff",
        drawerInactiveBackgroundColor: "#fff",
        drawerActiveTintColor: "black",
      }}
    >
      <Drawer.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false }} />
      <Drawer.Screen name="Pro" component={Profile} options={{ headerShown: false }} />
    </Drawer.Navigator>
  )
}

export default DrawerStack;