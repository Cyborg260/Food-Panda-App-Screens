import * as React from 'react';
import {
  View,
  useWindowDimensions,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from 'react-native';
// Import Screens //
import FirstRoute from '../Favourites/FavouritesRestaurant';
import SecondRoute from '../Favourites/FavouritesShops';
//import packages//
import {useNavigation} from '@react-navigation/native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {images} from '../../utils/Images';
import {Colors} from '../../utils/colors';
import styles from '../../screens/Favourites/FavouritesScreenStyles';

const FavouritesScreen = () => {
  //====================================== UseState ===========================================//
  const [searchText, onChangeSearch] = React.useState('');
  const [filteredData, setFilteredData] = React.useState([]);
  const [index, setIndex] = React.useState(0);
  //   console.log('index==>', index);
  const layout = useWindowDimensions();
  const navigation = useNavigation();
  const renderScene = SceneMap({
    first: () => <FirstRoute shuja={filteredData} />,
    second: () => <SecondRoute syed={filteredData} />,
  });
  const [routes] = React.useState([
    {key: 'first', title: 'Restaurants'},
    {key: 'second', title: 'Shops'},
  ]);
  const IndexChange = ind => {
    setIndex(ind);
    return;
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container2}>
        <View style={styles.imgView}>
          <TouchableOpacity
            activeOpacity={0.85}
            onPress={() => navigation.goBack()}>
            <Image style={styles.img} source={images.lefticon} />
          </TouchableOpacity>
        </View>
            <Text style={styles.headerTxt}>Favourites</Text>
            <Image
              style={styles.favouritesIcon}
              source={images.shoppingBagIcon}
            />
      </View>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={IndexChange}
        initialLayout={{width: layout.width}}
        renderTabBar={props => (
          <TabBar
            {...props}
            style={{
              backgroundColor: Colors.white,
            }}
            labelStyle={{
              color: Colors.deeppink,
              fontWeight: 'bold',
            }}
            activeColor={Colors.deeppink}
            inactiveColor={Colors.black}
            indicatorStyle={{
              backgroundColor: Colors.deeppink,
              height: 4,
              width: '24%',
              borderRadius: 20,
              marginLeft: 55,
            }}
            renderLabel={({focused, route}) => {
              return (
                <Text
                  style={{
                    color: focused ? Colors.deeppink : Colors.black,
                    fontSize: 17,
                    fontWeight: 'bold',
                  }}>
                  {route.title}
                </Text>
              );
            }}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default FavouritesScreen;
