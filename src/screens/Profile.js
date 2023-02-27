import {View, Text, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import MainScreen from './MainScreen';

const Profile = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Profile</Text>
      <Button
        title="Go To MainScreen"
        onPress={() => navigation.navigate('MainScreen')}
      />
    </View>
  );
};
export default Profile;
