import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TextInput,
} from 'react-native';
import React from 'react';
import {Colors} from '../../utils/colors';

const Items = ({title}) => (
  <View style={styles.sceneView}>
    <View style={styles.itemContainer}>
      <Text style={styles.txtView}>{title}</Text>
    </View>
  </View>
);

const SecondRoute = ({...props}) => {
  const renderItem = ({item}) => <Items title={item.title} />;
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          marginTop: 20,
          marginHorizontal: 20,
        }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: Colors.black,
          }}>
          Popular Searches
        </Text>
      </View>
      <FlatList
        data={props.syed}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        numColumns={3}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },

  sceneView: {
    marginVertical: 5,
    width: 140,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },

  itemContainer: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: Colors.lightGrey,
    paddingHorizontal: 10,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },

  txtView: {
    fontSize: 16,
    color: Colors.black,
    textAlign: 'center',
  },
});
export default SecondRoute;
