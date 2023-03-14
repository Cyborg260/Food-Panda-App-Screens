import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Colors} from '../utils/colors';
import MainScreen from '../screens/MainScreen/MainScreen';
import Profile from '../screens/profile/Profile';
import CustomDrawer from '../components/CustomDrawer/CustomDrawer';
import { useNavigation } from '@react-navigation/native';

const Drawer = createDrawerNavigator();
const DrawerStack = () => {

  const navigation = useNavigation()

  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: Colors.white,
        drawerInactiveBackgroundColor: Colors.white,
        drawerActiveTintColor: Colors.black,
        drawerStyle: {
          width: 350,
        },
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
