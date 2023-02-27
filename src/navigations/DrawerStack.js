import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Profile from '../screens/Profile';
import MainScreen from '../screens/MainScreen';
import CustomDrawer from '../components/CustomDrawer';
import {Colors} from '../utils/colors';

const Drawer = createDrawerNavigator();
const DrawerStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: Colors.white,
        drawerInactiveBackgroundColor: Colors.white,
        drawerActiveTintColor: Colors.black,
      }}>
      <Drawer.Screen
        name="MainScreen"
        component={MainScreen}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Pro"
        component={Profile}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerStack;
