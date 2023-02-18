import React from 'react'

// import screens //
import StackScreens from './AppStack';

// packages import //
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

const App = () => {
  return (
    <Provider store= {store}>
    <NavigationContainer>
      {StackScreens()}
    </NavigationContainer>
    </Provider>
  )
}

export default App;
