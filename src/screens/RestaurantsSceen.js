import { View, Text, TouchableOpacity, StyleSheet, Image, ActivityIndicator } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const RestaurantsSceen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={{
                marginVertical: 10,
            }}>


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
            <View style={styles.indicator}>
                <ActivityIndicator
                    size="large"
                    color="deeppink"
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        // backgroundColor: "yellow",
        marginHorizontal: 15,
        flex: 1
    },
    img: {
        tintColor: "deeppink",
        resizeMode: "stretch",
        width: 32,
        height: 42
    },
    indicator: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    },
})

export default RestaurantsSceen;