import { View, Text, SafeAreaView, StyleSheet, FlatList, TextInput, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'


const Items = ({ title }) => (
  <View style={styles.sceneView}>
    <View style={styles.itemContainer}>
      <Text style={styles.txtView}>
        {title}
      </Text>
    </View>
  </View>
)

const FirstRoute = ({ ...props }) => {

  // console.log("we get 0 ==>", props.shuja);

  // const [searchText, onChangeSearch] = useState('');
  // const [filteredData, setFilteredData] = useState([]);

  // useEffect(() => {
  //   const filtered = Data.filter(item =>
  //     item.title.toLowerCase().includes(searchText.toLowerCase()),
  //   );
  //   if (searchText === '') {
  //     return setFilteredData(Data);
  //   }

  //   setFilteredData(filtered);
  // }, [searchText]);



  const renderItem = ({ item }) => (
    <Items
      title={item.title}
    />
  )

  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        marginTop: 20,
        marginHorizontal: 20,
      }}>
        <Text style={{
          fontSize: 18,
          fontWeight: "bold",
          color: "black"
        }}>
          Popular Searches
        </Text>
      </View>


      <FlatList
        data={props.shuja}
        renderItem={renderItem}
        numColumns={3}
        showsVerticalScrollIndicator={false}
      // horizontal={true}

      />
    </SafeAreaView>
  )

};
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#eae8e8',
  },

  sceneView: {
    // backgroundColor:"red",
    marginVertical: 5,
    width: 120,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10
  },

  itemContainer: {
    // backgroundColor:"yellow",
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "lightgrey",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10
  },

  txtView: {
    fontSize: 16,
    // backgroundColor:"red",
    color: "black",
    textAlign: "center",

  },
})

export default FirstRoute;