import { View, Text, StatusBar, } from 'react-native'
import React from 'react'

// import screens //
import StackScreens from './AppStack';

// packages import //
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      {StackScreens()}
    </NavigationContainer>
  )
}

export default App;
