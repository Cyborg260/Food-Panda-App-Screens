import * as React from 'react';
import { View, useWindowDimensions, StyleSheet, Text, SafeAreaView, Image, TouchableOpacity, TextInput, StatusBar, } from 'react-native';
// Import Screens //
import FirstRoute from './Restaurants';
import SecondRoute from './Shops';
//import packages//
import { useNavigation } from '@react-navigation/native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

export default function SearchEntry() {
  const navigation = useNavigation();
  const layout = useWindowDimensions();


  //   const Data = [
  //     {
  //       title: "pizza"
  //   },
  //   {
  //     title: "KFC"
  //   },
  //   {
  //     title: "pizza point"
  //   },
  //   {
  //     title: "burger"
  //   },
  //   {
  //     title: "macdonalds"
  //   },
  //   {
  //     title: "kaybees"
  //   },
  //   {
  //     title: "pizza fries"
  //   },
  //   {
  //     title: "red apple"
  //   },
  //   {
  //     title: "zinger burger"
  //   },
  //   {
  //     title: "burger lab"
  //   },
  //   {
  //     title: "Roll"
  //   },
  // ]
  const Data1 = [
    {
      title: "Usmania"
    },
    {
      title: "KFC"
    },
    {
      title: "pizza point"
    },
    {
      title: "Bite for life"
    },
    {
      title: "Macdonalds"
    },
    {
      title: "Kaybees"
    },
    {
      title: "Pizza Hut"
    },
    {
      title: "Red apple"
    },
    {
      title: "Star bucks"
    },
    {
      title: "Satar buksh"
    },
    {
      title: "Pita"
    },

  ]
  const Data2 = [
    {
      title: "Time Medicos"
    },
    {
      title: "Pharmacy"
    },
    {
      title: "Mini Mart"
    },
    {
      title: "Waffelzzz"
    },
    {
      title: "Fries Corner"
    },
    {
      title: "Shinwaari"
    },
    {
      title: "Hello World"
    },
    {
      title: "Makro Mart"
    },
    {
      title: "Burger World"
    },
    {
      title: "optp"
    },
    {
      title: "Take Away"
    },
  ]

  const [searchText, onChangeSearch] = React.useState('');
  const [filteredData, setFilteredData] = React.useState([]);
  const [index, setIndex] = React.useState(0);
  console.log("index==>", index);


  // const [filteredData2, setFilteredData2] = React.useState([]);/


  React.useEffect(() => {
    const filtered = filteredData.filter(item =>
      item.title.toLowerCase().includes(searchText.toLowerCase()),
    );
    if (searchText === '') {
      return setFilteredData(Data1);
    }
    setFilteredData(filtered);
  }, [searchText]);

  console.log("filtered data ==>", filteredData);

  React.useEffect(() => {

    console.log("i am at==>", index);

    // onChangeSearch(Data1);
    if (index == 1) {
      console.log("i am at==>", index);
      setFilteredData(Data2);
    }
    else {
      console.log("i am at==>", index);
      setFilteredData(Data1)
    }
  }, [index])

  const renderScene = SceneMap({
    first: () => <FirstRoute shuja={filteredData} />,
    second: () => <SecondRoute syed={filteredData} />,
  });

  // console.log("jkhkjh",filteredData)


  const [routes] = React.useState([
    { key: 'first', title: 'Restaurants' },
    { key: 'second', title: 'Shops' },
  ]);

  const IndexChange = ind => {

    setIndex(ind);

    return;
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#fff"
        barStyle="dark-content"
      />
      <View style={styles.container2}>
        <View style={styles.imgView}>
          <TouchableOpacity
            activeOpacity={0.85}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={styles.img}
              source={require("../assets/icons8-left-50.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.opacityView}>
          <TouchableOpacity
            style={styles.touchableOpacity}
            activeOpacity={0.85}
          >
            <View style={styles.insideView}>
              <TextInput
                style={styles.txt}
                onChangeText={newText => onChangeSearch(newText)}
                placeholder=" Search for shops and restaurants"
              >

              </TextInput>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <TabView

        navigationState={{ index, routes }}
        renderScene={renderScene}
        // onIndexChange={setIndex}
        onIndexChange={IndexChange}
        initialLayout={{ width: layout.width }}

        renderTabBar={props =>
          <TabBar {...props}
            style={{
              backgroundColor: '#fff'
            }}
            labelStyle={{
              color: "deeppink",
              fontWeight: "bold",

            }}
            activeColor="deeppink"
            inactiveColor="black"
            indicatorStyle={{
              backgroundColor: "deeppink",
              height: 4,
              width: "24%",
              borderRadius: 20,
              marginLeft: 55

            }}
            renderLabel={({ focused, route }) => {
              return (
                <Text
                  style={{
                    color: focused ? "deeppink" : "black",
                    fontSize: 17,
                    fontWeight: "bold"
                  }}
                >
                  {route.title}
                </Text>
              );
            }}
          />

        }
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  container2: {
    flexDirection: "row",
    backgroundColor: "white",
    height: 80,
    alignItems: "center",
    justifyContent: "space-between",

  },
  touchableOpacity: {
    flexDirection: "row",
  },
  searchIcon: {
    width: 28,
    height: 28,
    tintColor: "grey"
  },
  insideView: {
    backgroundColor: "#eae8e8",
    borderRadius: 10,
    width: "90%",
    height: 45,
    justifyContent: "center",
    marginHorizontal: 3


  },
  txt: {
    fontSize: 16,
    marginHorizontal: 10,
    color: "grey",
  },
  opacityView: {
    // backgroundColor: "blue",
    // marginRight:10
  },

  imgView: {
    // backgroundColor: "yellow",
    marginHorizontal: 15
  },
  img: {
    tintColor: "deeppink",
    resizeMode: "stretch",
    width: 30,
    height: 45
  }


})
