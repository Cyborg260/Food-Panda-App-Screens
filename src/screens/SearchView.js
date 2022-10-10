import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Alert, Animated } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { animateHeaderHeight } from '../utils/Constant'

const SearchView = () => {
    const navigation = useNavigation()
    console.log(animateHeaderHeight, "hello")

    return (
       
<View style={{}}>

            <Animated.View style={[
                styles.container,
                {
                    height: animateHeaderHeight,
                },
                
            ]}>
                <TouchableOpacity
                    style={styles.touchableOpacity}
                    activeOpacity={1}
                    onPress={() => navigation.navigate("SearchEntry")}
                >
                    <View style={styles.insideView}>
                        <Image
                            style={styles.searchIcon}
                            source={require("../assets/icons8-search-50.png")}
                        />
                        <Text style={styles.txt}>
                            Search for shops and restaurants
                        </Text>
                    </View>
                </TouchableOpacity>

            </Animated.View>
            </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "deeppink",
        height: 80,
        alignItems: "center",
        justifyContent: "center",
        left:0,
        top:0,
        right:0,
        position:"absolute",
        zIndex:1
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
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 20,
        width: "95%",
        height: 45,
        paddingLeft: 10,
        marginLeft: 10,
      
    },
    txt: {
        fontSize: 16,
        marginHorizontal: 10,
        color: "grey",
    },




})
export default SearchView;