import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Data } from '../utils/Data/RestData';
import { useNavigation } from '@react-navigation/native';
import styles from '../assets/styles/RestCateStyles';

const RestaurCateg = () => {

    const navigation = useNavigation()
    const renderItem = ({ item }) => {
        return (
            <View style={{ marginTop: 20 }}>
                <TouchableOpacity activeOpacity={0.85} style={{ height: 160, width: "95%", marginHorizontal: 14 }}
                    onPress={() => {
                        // navigation.navigate("SeleCateg"),
                        navigation.navigate('SeleCateg', {
                            product: item,
                        });
                    }}>
                    <Image style={{
                        width: "98%",
                        height: 160,
                        borderRadius: 10,
                        resizeMode: "stretch"
                    }}
                        source={item.image} />
                </TouchableOpacity>
                <View style={{ paddingLeft: 10, marginTop: 10 }}>
                    <View style={{ marginTop: 4 }}>
                        <Text style={{ color: "black", fontWeight: "bold" }}>{item.title}</Text>
                    </View>
                    <View>
                        <Text> {item.detail} </Text>
                    </View>
                    <View>
                        <Text style={{ color: "black", fontWeight: "bold" }}> PKR {item.price} Rs.</Text>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.headerView}>
                <TouchableOpacity style={styles.backBtnOpacity} activeOpacity={0.85} onPress={() => navigation.goBack()}><Image style={styles.backBtn} source={require("../../src/assets/icons8-left-50.png")} /></TouchableOpacity>
                <Text style={styles.maintxt}>Pizza</Text>
            </View>
            <View style={styles.flatlistView}>
                <FlatList data={Data} renderItem={renderItem} showsVerticalScrollIndicator={false} />
            </View>
        </View>
    )
}
export default RestaurCateg;