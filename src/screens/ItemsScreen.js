import { View, Text, StyleSheet, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
//import Screen//
import DealsScreen from './DealsScreen';
import { useNavigation } from '@react-navigation/native';
import { Data } from '../utils/Data/CrusinesData';



const ItemsScreen = () => {
    const navigation = useNavigation()
    const renderItem = ({ item }) => (
        <Items
        image={item.image}
        title={item.title}
        />
        )
        const Items = ({ title, image }) => (
            <TouchableOpacity style={{
                padding: 10,
                justifyContent: "center",
                alignItems: "center",
            }}
                activeOpacity={0.65}
                onPress={() => navigation.navigate("RestCateg")}
            >
                <View style={{
                    width: 80,
                    height: 80,
                    borderRadius: 10,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 2,
                }}>
                    <Image
                        style={{
                            resizeMode: "contain",
                            width: 80,
                            height: 80,
                            borderRadius: 10
                        }}
                        source={image}
                    />
                </View>
                <Text style={{
                    color: "black",
                    marginHorizontal: 10
                }}>
                    {title}
                </Text>
            </TouchableOpacity>
        )
    const renderFirstView = () => {
        return (
            <View style={styles.container1}>

                {/* //1st colomn// */}
                <View style={{
                }}>
                    {/* //1st box// */}
                    <TouchableOpacity
                        activeOpacity={0.8}

                    >
                        <View style={styles.container2}>
                            <View style={styles.con1txt1View}>
                                <Text style={{
                                    fontSize: 24,
                                    color: "black",
                                    fontWeight: "bold"
                                }}>
                                    Food{"\n"}delivery
                                </Text>
                            </View>
                            <View style={styles.con1txt2View}>
                                <Text style={styles.txt2}>
                                    Order from your{"\n"}favourite restaurants...
                                </Text>
                            </View>
                            <View style={styles.conImgView}>
                                <Image
                                    style={styles.img}
                                    source={require("../assets/fp-1.png")}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>
                    {/* //2nd box// */}
                    <View style={{
                        backgroundColor: "#fff",
                        height: 80,
                        width: 180,
                        padding: 15,
                        borderRadius: 10,
                    }}>
                        <View style={{
                            flexDirection: "row"
                        }}>

                            <View>
                                <View style={styles.con1txt1View}>
                                    <Text style={styles.txt1}>
                                        Dine-in
                                    </Text>
                                </View>
                                <View style={styles.con1txt2View}>
                                    <Text style={styles.txt2}>
                                        Eat out and{"\n"}save 25%
                                    </Text>
                                </View>
                            </View>
                            <View style={{
                                // backgroundColor:"red",
                                width: 98,
                                height: 65,
                                borderRadius: 10
                            }}>
                                <Image
                                    style={{
                                        width: 62,
                                        height: 52,
                                        resizeMode: "contain",
                                        marginHorizontal: 36,
                                        borderRadius: 10,
                                        marginVertical: 13,

                                    }}
                                    source={require("../assets/fp-4.png")}
                                />
                            </View>
                        </View>
                    </View>
                </View>


                {/* //2nd colomn// */}
                <View style={{
                }}>


                    {/* //1st box// */}
                    <TouchableOpacity

                        activeOpacity={0.8}
                    >
                        <View style={{
                            backgroundColor: "#fff",
                            height: 125,
                            width: 180,
                            borderRadius: 10,
                            marginHorizontal: 20,
                            padding: 12
                        }}>
                            <View style={styles.con1txt1View}>
                                <Text style={styles.txt1}>
                                    pandamart
                                </Text>
                            </View>
                            <View style={styles.con1txt2View}>
                                <Text style={styles.txt2}>
                                    convenience, delivere...
                                </Text>
                            </View>
                            <View style={{
                                // backgroundColor:"red"
                            }}>
                                <Image
                                    style={{
                                        width: 72,
                                        height: 72,
                                        marginHorizontal: 85,
                                        resizeMode: "contain"
                                    }}
                                    source={require("../assets/fp-2.png")}
                                />
                            </View>
                        </View>

                    </TouchableOpacity>
                    {/* //2nd box// */}
                    <View style={{
                        backgroundColor: "#fff",
                        height: 80,
                        width: 180,
                        borderRadius: 10,
                        marginTop: 18,
                        marginHorizontal: 20

                    }}>
                        <View style={{
                            flexDirection: "row",
                            padding: 12
                        }}>

                            <View>
                                <View style={styles.con1txt1View}>
                                    <Text style={styles.txt1}>
                                        pandamall
                                    </Text>
                                </View>
                                <View style={styles.con1txt2View}>
                                    <Text style={styles.txt2}>
                                        Everyday{"\n"}essentials
                                    </Text>
                                </View>
                            </View>
                            <View style={{
                                // backgroundColor:"red",
                                width: 98,
                                height: 65,
                                borderRadius: 10
                            }}>
                                <Image
                                    style={{
                                        width: 62,
                                        height: 52,
                                        resizeMode: "contain",
                                        marginHorizontal: 22,
                                        borderRadius: 10,
                                        marginVertical: 15,

                                    }}
                                    source={require("../assets/fp-5.png")}
                                />
                            </View>
                        </View>
                    </View>



                    {/* //3rd box// */}
                    <View style={{
                        backgroundColor: "#fff",
                        height: 80,
                        width: 180,
                        borderRadius: 10,
                        marginTop: 18,
                        marginHorizontal: 20

                    }}>

                        <View style={{
                            flexDirection: "row",
                            padding: 12
                        }}>

                            <View>
                                <View style={styles.con1txt1View}>
                                    <Text style={styles.txt1}>
                                        Pick-up
                                    </Text>
                                </View>
                                <View style={styles.con1txt2View}>
                                    <Text style={styles.txt2}>
                                        Enjoy up to{"\n"}50% off and...
                                    </Text>
                                </View>
                            </View>
                            <View style={{
                                // backgroundColor:"red",
                                width: 98,
                                height: 65,
                                borderRadius: 10
                            }}>
                                <Image
                                    style={{
                                        width: 62,
                                        height: 52,
                                        resizeMode: "contain",
                                        marginHorizontal: 30,
                                        borderRadius: 10,
                                        marginVertical: 15,

                                    }}
                                    source={require("../assets/fp-3.png")}
                                />
                            </View>
                        </View>
                    </View>
                </View>


            </View>
        )
    }

    const renderSecondView = () => {
        return (
            <View>
                <Text style={{
                    fontSize: 20,
                    color: "black",
                    fontWeight: "bold",
                    paddingLeft: 20,
                    marginVertical: 15,
                }}>
                    Your Restaurants
                </Text>
            </View>
        )
    }

    const renderThirdView = () => {
        return (
            <ScrollView style={{
                flexDirection: "row",
                // backgroundColor: "red",
                height: 250,
                padding: 15,


            }}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >



                {/* //1st Restaurant// */}
                <View style={{
                    // backgroundColor:"yellow",
                    height: 300
                }}>
                    <View style={{
                        // backgroundColor:"blue",
                        height: 160,

                    }}>

                        <Image
                            style={{
                                width: 260,
                                height: 160,
                                resizeMode: "contain",
                                borderRadius: 10
                            }}
                            source={require("../assets/fp-6.png")}
                        />
                    </View>
                    <View style={{
                        // backgroundColor:"red"
                        marginTop: 4
                    }}>
                        <Text style={{
                            color: "black",
                            fontWeight: "bold"
                        }}>
                            Pizza Point - Gulshan e Iqbal
                        </Text>
                    </View>
                    <View>
                        <Text>
                            $$ - Pizza, Italian, Sandwiches
                        </Text>
                    </View>
                    <View>
                        <Text style={{
                            color: "black",
                            fontWeight: "bold"
                        }}>
                            PKR 75 delivery fee
                        </Text>
                    </View>
                </View>

                {/* //2nd Restaurant// */}
                <View style={{
                    // backgroundColor:"yellow",
                    height: 300,
                    marginHorizontal: 15
                }}>
                    <View style={{
                        // backgroundColor:"blue",
                        height: 160,

                    }}>
                        <TouchableOpacity
                            activeOpacity={0.9}
                            onPress={() => navigation.navigate("Restaurants")}
                        >
                            <Image
                                style={{
                                    width: 260,
                                    height: 160,
                                    resizeMode: "contain",
                                    borderRadius: 10
                                }}
                                source={require("../assets/fp-7.png")}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        // backgroundColor:"red"
                        marginTop: 4
                    }}>
                        <Text style={{
                            color: "black",
                            fontWeight: "bold"
                        }}>
                            Pizza Nation - Gulshan
                        </Text>
                    </View>
                    <View>
                        <Text>
                            $$$ - Pizza
                        </Text>
                    </View>
                    <View>
                        <Text style={{
                            color: "black",
                            fontWeight: "bold"
                        }}>
                            PKR 65 delivery fee
                        </Text>
                    </View>
                </View>


                {/* //3rd Restaurant// */}
                <View style={{
                    // backgroundColor:"yellow",
                    height: 300,
                    marginHorizontal: 5,
                }}>
                    <View style={{
                        // backgroundColor:"blue",
                        height: 160,

                    }}>

                        <Image
                            style={{
                                width: 260,
                                height: 160,
                                resizeMode: "contain",
                                borderRadius: 10
                            }}
                            source={require("../assets/fp-8.png")}
                        />
                    </View>
                    <View style={{
                        // backgroundColor:"red"
                        marginTop: 4
                    }}>
                        <Text style={{
                            color: "black",
                            fontWeight: "bold"
                        }}>
                            Red Apple - Gulshan
                        </Text>
                    </View>
                    <View>
                        <Text>
                            $$ - Fast Food, Pakistan Chowk
                        </Text>
                    </View>
                    <View>
                        <Text style={{
                            color: "black",
                            fontWeight: "bold"
                        }}>
                            PKR 65 delivery fee
                        </Text>
                    </View>
                </View>
            </ScrollView>
        )
    }

    const renderFourthView = () => {
        return (
            <View>
                <Text style={{
                    fontSize: 20,
                    color: "black",
                    fontWeight: "bold",
                    paddingLeft: 20,
                    marginVertical: 10,
                }}
                >
                    Your daily deals
                </Text>
            </View>
        )
    }

    const renderFifthView = () => {
        return (
            <ScrollView
                style={{
                    flexDirection: "row",
                    // backgroundColor:"red",
                    padding: 15
                }}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
            >
                <View style={{
                    width: 180,
                    height: 240,
                    // backgroundColor: "red"
                    // marginHorizontal: 20

                }}>
                    <Image
                        style={{
                            width: 180,
                            height: 240,
                            resizeMode: "contain",
                            borderRadius: 10,

                        }}
                        source={require("../assets/fp-9.png")}
                    />
                </View>
                <View style={{
                    width: 180,
                    height: 240,
                    marginHorizontal: 20,
                    // backgroundColor:"yellow"
                }}>
                    <TouchableOpacity style={{

                    }}
                        activeOpacity={0.9}
                        onPress={() => navigation.navigate("Deals")}
                    >

                        <Image
                            style={{
                                width: 180,
                                height: 240,
                                resizeMode: "contain",
                                borderRadius: 10,

                            }}
                            source={require("../assets/fp-10.png")}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{
                    width: 180,
                    height: 240,
                    // backgroundColor:"yellow"

                }}>
                    <Image
                        style={{
                            width: 180,
                            height: 240,
                            resizeMode: "contain",
                            borderRadius: 10,

                        }}
                        source={require("../assets/fp-11.png")}
                    />
                </View>
                <View style={{
                    width: 180,
                    height: 240,
                    // backgroundColor: "yellow",
                    marginHorizontal: 20
                }}>
                    <Image
                        style={{
                            width: 180,
                            height: 240,
                            resizeMode: "contain",
                            borderRadius: 10,
                        }}
                        source={require("../assets/fp-12.png")}
                    />
                </View>
                <View style={{
                    width: 180,
                    height: 240,
                    marginHorizontal: 20,
                    backgroundColor: "yellow"

                }}>
                    <Image
                        style={{
                            width: 180,
                            height: 240,
                            resizeMode: "contain",
                            borderRadius: 10,

                        }}
                        source={require("../assets/fp-9.png")}
                    />
                </View>
                <View style={{
                    width: 180,
                    height: 240,
                    marginRight: 20
                    // backgroundColor:"yellow"

                }}>
                    <Image
                        style={{
                            width: 180,
                            height: 240,
                            resizeMode: "contain",
                            borderRadius: 10,

                        }}
                        source={require("../assets/fp-12.png")}
                    />
                </View>
            </ScrollView>
        )
    }

    const renderSixthView = () => {
        return (
            <View>
                <Text style={{
                    fontSize: 20,
                    color: "black",
                    fontWeight: "bold",
                    paddingLeft: 20,
                    marginVertical: 10,
                }}>
                    Cuisines
                </Text>
            </View>
        )
    }

    const renderSeventhView = () => {
        return (
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >

                <View style={{
                    // marginHorizontal: 15
                }}>
                    <FlatList
                        data={Data}
                        renderItem={renderItem}
                        numColumns={6}
                    />
                </View>
            </ScrollView>
        )
    }

    const renderEightView = () => {
        return (
            <TouchableOpacity
                activeOpacity={0.5}
            >
                {/* //FoodPanda Logo// */}
                <View style={{
                    flexDirection: "row",
                    marginVertical: 40,
                    marginBottom: 20,
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: "lightgrey",
                    width: "95%",
                    height: 75,
                    justifyContent: "space-between",
                    marginHorizontal: 10,
                    alignItems: "center",
                    padding: 10,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,

                    elevation: 1,
                }}>
                    <View>
                        <Text style={{
                            color: "black",
                            fontSize: 18,
                            fontWeight: "bold",
                        }}>
                            Become a pro
                        </Text>
                        <Text style={{
                            color: "black",
                        }}>
                            and get exclusive deals
                        </Text>
                    </View>
                    <View>
                        <Image
                            style={{
                                width: 100,
                                height: 62,
                                resizeMode: "contain"

                            }}
                            source={require("../assets/fp-23.png")}
                        />
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={{
            marginTop: 70,
        }}>
            {renderFirstView()}
            {renderSecondView()}
            {renderThirdView()}
            {renderFourthView()}
            {renderFifthView()}
            {renderSixthView()}
            {renderSeventhView()}
            {renderEightView()}
        </View>
    )
}


const styles = StyleSheet.create({
    container1: {
        backgroundColor: "#eae8e8",
        height: 360,
        flexDirection: "row",
        padding: 20,
    },
    container2: {
        backgroundColor: "#fff",
        height: 220,
        width: 180,
        borderRadius: 10,
        marginBottom: 20,
        padding: 15
    },
    con1txt1View: {

    },
    txt1: {
        fontSize: 18,
        color: "black",
        fontWeight: "bold"
    },
    txt2: {
        color: "black",
        fontSize: 12
    },
    con1txt2View: {

    },
    conImgView: {
        // backgroundColor: "red",
        height: 100,
    },
    img: {
        marginHorizontal: 45,
        width: 120,
        height: 100,
        resizeMode: "contain",


    },


})
export default ItemsScreen;