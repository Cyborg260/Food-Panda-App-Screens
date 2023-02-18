import { View, Text, TouchableOpacity, FlatList, StyleSheet, Image, StatusBar, ScrollView, SafeAreaView, Alert } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import styles from '../assets/styles/styles'
import { useNavigation } from '@react-navigation/native';
import { Data } from '../utils/Data/CategData';
import RBSheet from 'react-native-raw-bottom-sheet';
import { useDispatch, useSelector } from 'react-redux';
import { addtocart } from '../redux/action';


const SelectedCateg = ({ route }) => {
    //======================= useState ==============================//
    const [menus, setMenus] = useState([])
    const [showCartView, setShowcartView] = useState(false);
    //========================= useEffect =============================//
    useEffect(() => {
        const arr = []
        arr.push(product)
        console.log(arr);
        setMenus(arr)
    }, []) 
    const refRBSheet = useRef();
    const product = route?.params?.product
    console.log(product, "=================product===================");
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const data = useSelector((state) => state.counter)
    const amount = useSelector((state) => state.price)
    console.log(amount, "================amount================");
    console.log(data, "================quantity================");
    let actualPrice = 1999;
    let obj = { payload: data + 1, rupees: amount + actualPrice, product }
    let obj1 = { payload: data - 1, rupees: amount - actualPrice, product }

    const renderItem = ({ item }) => (
        <Items image={item.image} title={item.title} price={item.price} />
    )
    const Cart = () => {
        setShowcartView(!showCartView)
    };
    const Items = ({ image, title, price }) => (
        <View style={styles.itemsView}>
            {
                data > 0 ?
                    <View style={styles.quantLogo}><Text style={styles.quanTxt}>{data}</Text></View>
                    :
                    <></>
            }
            <TouchableOpacity style={styles.categImage} activeOpacity={0.85} onPress={() => refRBSheet.current.open()} >
                <Image style={styles.image} source={image} />
                <Text style={styles.text}>{title}</Text>
                <Text style={styles.text1}>PKR {price} Rs.</Text>
            </TouchableOpacity>
        </View>
    )
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TouchableOpacity style={styles.backBtnView} onPress={() => navigation.goBack()} activeOpacity={0.85}><Image style={styles.backBtn} source={require("../../src/assets/icons8-left-50.png")} /></TouchableOpacity>
            <TouchableOpacity style={styles.shareBtnView} onPress={() => Alert.alert("No Internet Connection")} activeOpacity={0.85}><Image style={styles.shareBtn} source={require("../../src/assets/share-icon.png")} /></TouchableOpacity>
            <ScrollView nestedScrollEnabled={true} style={{ flex: 1 }}>
                <StatusBar backgroundColor="transparent" translucent={true} />
                <Image style={styles.topImage} source={require("../../src/assets/fp-7.png")} />
                <Text style={styles.cateTxt}>Popular</Text>
                <FlatList data={menus} renderItem={renderItem} numColumns={2} />
                <RBSheet
                    ref={refRBSheet}
                    closeOnDragDown={false}
                    closeOnPressMask={true}
                    customStyles={styles.rbSheetStyles}>
                    <Image style={styles.topImage} source={require("../../src/assets/fp-13.png")} />
                    <View style={styles.rbSheetTxtView}>
                        <Text style={styles.itemName}>Italian Pizza</Text>
                        <Text style={styles.itemPrice}>from Rs. 1999.70</Text>
                    </View>
                    <View style={styles.detailTxtView}><Text style={styles.detailTxt}>Chicken boti, onions, mushroom and mozzarella cheese.</Text></View>
                    <View style={styles.lineView}></View>
                    <Text style={styles.specialHeadingTxt}>Special instructions</Text>
                    <View style={styles.specialTxtView}><Text style={styles.specialTxt}>Please let us know if you are allergic to anything or if you need to avoid anything.</Text></View>
                    <View style={styles.cartOpacityView}>
                        {/* //Minus icon */}
                        <TouchableOpacity
                            activeOpacity={0.85}
                            style={[styles.IconView, { backgroundColor: "deeppink" }]}
                            onPress={() => { dispatch(addtocart(obj1)) }}>
                            <Image style={styles.cartIcon} source={require("../assets/subtract.png")} />
                        </TouchableOpacity>
                        <Text style={styles.counterTxt}>{data}</Text>
                        {/* //Plus icon */}
                        <TouchableOpacity
                            activeOpacity={0.85}
                            style={[styles.IconView1, { backgroundColor: "deeppink" }]}
                            onPress={() => { dispatch(addtocart(obj)) }}>
                            <Image
                                style={styles.cartIcon}
                                source={require("../assets/plus.png")}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.RBbutton}
                            activeOpacity={0.85}
                            onPress={() => { refRBSheet.current.close(), Cart() }}
                        >
                            <Text style={styles.RBbuttonTxt}>Add To Cart</Text>
                        </TouchableOpacity>
                    </View>
                </RBSheet>
            </ScrollView>
            {data > 0 ? <View style={styles.cartView}>
                <TouchableOpacity
                    style={styles.viewCartBtn}
                    activeOpacity={0.85}
                    onPress={() => refRBSheet.current.close()}
                >
                    {data > 0 ?
                        <View style={styles.viewQuan}><Text style={styles.counterTxt2}>{data}</Text></View>
                        :
                        <></>
                    }
                    <Text style={styles.RBbuttonTxt}> View your cart</Text>
                    {amount > 0 ? <Text style={styles.amountTxt}>{amount}.00</Text> : <></>}
                </TouchableOpacity>
            </View> : <></>}
        </SafeAreaView>
    )
}
export default SelectedCateg;