import { View, Text } from 'react-native'
import React from 'react'
import { DrawerContentScrollView } from '@react-navigation/drawer'
import { useNavigation } from '@react-navigation/native'

const DrawerContent = props => {
  return (
    <DrawerContentScrollView {...props}>
        <DrawerContent
        label="Home"
        onpress={()=>props.navigation.navigate("Home")}
        />
        <DrawerContent
        label="Profile"
        onpress={()=>props.navigation.navigate("Profile")}
        />
    </DrawerContentScrollView>
  )
}

export default DrawerContent;