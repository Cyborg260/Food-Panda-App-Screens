import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


const TopView = () => {
const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity
                activeOpacity={0.85}
                onPress={()=>navigation.openDrawer()}
            >
                <Image
                    style={styles.drawerImg}
                    source={require("../assets/icons8-menu-50.png")}
                    />
            </TouchableOpacity>
            <View style={styles.txtsView}>
                <Text style={styles.txt1}>
                    Home
                </Text>
                <TouchableOpacity
                    activeOpacity={0.5}

                >

                    <Text style={styles.txt2}>
                        Al Hamra Garden Apartment
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.imgView}>
                <TouchableOpacity
                    activeOpacity={0.5}

                >
                    <Image
                        style={styles.img1}
                        source={require("../assets/icons8-favorite-50.png")}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.5}
                >
                    <Image
                        style={styles.img2}
                        source={require("../assets/icons8-shopping-bag-32.png")}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({

    container: {
        flexDirection: "row",
        backgroundColor: "deeppink",
        justifyContent: "space-between",
        alignItems: "center",
        height: 80,
        paddingHorizontal: 20,
        width:"100%",
        
        // zIndex:1,
        // position:"absolute",
      
    },
    imgView: {
        flexDirection: "row",
        alignItems: "center",
        width: 120,
        justifyContent: "flex-end",

    },
    drawerImg: {
        width: 28,
        height: 28,
        tintColor: "#fff",
    },
    img1: {
        width: 32,
        height: 32,
        tintColor: "#fff"
    },
    img2: {
        width: 28,
        height: 28,
        tintColor: "#fff",
        marginHorizontal: 5,

    },
    txt1: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff",

    },
    txt2: {
        color: "#fff"
    }
})
export default TopView;