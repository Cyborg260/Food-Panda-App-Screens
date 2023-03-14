import {FlatList, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState, useRef} from 'react';
import styles from '../../components/CustomDrawer/LoginDrawerStyles';
import {logindata} from '../../utils/Data/LoginDrawer/loginData';
import {useNavigation} from '@react-navigation/native';
import LoginRBSheet from '../../components/RBSheets/LogInRBSheet';
const LoginDrawer = ({drawerNav}) => {
  const navigation = useNavigation();
  const refSheet = useRef();
  console.log(refSheet, '===========refSheet');
  const renderItem = ({item}) => (
    <TouchableOpacity activeOpacity={0.85} style={styles.renderItemContainer}>
      <Image style={[styles.renderItemImg]} source={item.image} />
      <Text style={styles.renderItemTxt}>{item.txt}</Text>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <View style={styles.userProfileView}>
        <TouchableOpacity
          activeOpacity={0.85}
          onPress={() => {
            drawerNav.closeDrawer(), refSheet.current.open();
          }}>
          <Text style={styles.profileViewTxt}>Log in / Create account</Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList data={logindata} renderItem={renderItem} />
      </View>
      <View style={styles.lineView} />
      <TouchableOpacity style={styles.settingsView} activeOpacity={0.5}>
        <Text style={styles.settingsTxt}>Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.termsPrivacyView} activeOpacity={0.5}>
        <Text style={styles.termsPrivacytxt}>Terms & Conditions / privacy</Text>
      </TouchableOpacity>
      <LoginRBSheet ref={refSheet} />
    </View>
  );
};

export default LoginDrawer;
