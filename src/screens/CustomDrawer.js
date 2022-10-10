import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const CustomDrawer = props => {
    return (

        <View style={{
            flex: 1,
        }}>
            <View style={{
                // backgroundColor:"yellow",
                height: "10%",
                borderBottomWidth: 1,
                borderBottomColor: "gainsboro",
                justifyContent: "center",
                marginRight: 10
            }}>
                <Text style={{
                    paddingLeft: 30,
                    fontSize: 18,
                    fontWeight: "bold",
                    color: "black"
                }}>
                    Syed Shuja
                </Text>
            </View>
            <View style={{
                height: "15%",
                // backgroundColor:"blue",
                marginHorizontal: 30,
                borderBottomWidth: 1,
                borderBottomColor: "gainsboro",
                justifyContent: "center"
            }}>
                <View style={{
                    // backgroundColor:"red",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginVertical: "3%",
                    
                }}>
                    <View style={{
                        flexDirection: "row"
                    }}>

                        <Text style={{
                            fontSize: 13,
                            color: "deeppink",
                        }}>
                            panda
                        </Text>
                        <Text style={{
                            fontSize: 13,
                            color: "white",
                            fontStyle: "italic",
                            backgroundColor: "deeppink",
                            width: 25,
                            textAlign: "center"

                        }}>
                            pay
                        </Text>
                    </View>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        >

                        <Text style={{
                            fontSize: 12,
                            color: "deeppink",
                            borderRadius: 10,
                            borderWidth: 1,
                            padding: 1,
                            textAlign: "center",
                            backgroundColor: "lavender",
                            borderColor: "lavender",
                        }}>
                            Rs. 0.00
                        </Text>
                    </TouchableOpacity>
                </View>
                <Text style={{
                    fontSize: 14,
                    color: "black"
                }}>
                    Credit and payment methods
                </Text>
            </View>

            <TouchableOpacity
                activeOpacity={0.5}
                >

                <View style={{
                    flexDirection: "row",
                    // backgroundColor:"red",
                    marginTop: 20,
                    height: 40,
                    marginHorizontal: 30,
                    alignItems: 'center',
                }}>
                    <Image
                        style={{
                            height: 18,
                            width: 32,
                            resizeMode: "contain"
                        }}
                        source={require("../assets/pro.png")}
                        />
                    <Text style={{
                        marginHorizontal: 5,
                        color: "black"
                    }}>
                        Become a pandapro
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.5}
                >

                <View style={{
                    flexDirection: "row",
                    // backgroundColor:"red",
                    // marginVertical:20,
                    height: 40,
                    marginTop: 5,

                    marginHorizontal: 30,
                    alignItems: 'center',
                }}>
                    <Image
                        style={{
                            height: 22,
                            width: 32,
                            resizeMode: "contain",
                            tintColor: "deeppink"
                        }}
                        source={require("../assets/icons8-home-address-48.png")}
                        />
                    <Text style={{
                        marginHorizontal: 5,
                        color: "black"
                    }}>
                        Addresses                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.5}
                >

                <View style={{
                    flexDirection: "row",
                    // backgroundColor:"red",
                    // marginVertical:20,
                    height: 40,
                    marginTop: 5,
                    
                    marginHorizontal: 30,
                    alignItems: 'center',
                }}>
                    <Image
                        style={{
                            height: 22,
                            width: 32,
                            resizeMode: "contain",
                            tintColor: "deeppink"
                        }}
                        source={require("../assets/icons8-purchase-order-50.png")}
                        />
                    <Text style={{
                        marginHorizontal: 5,
                        color: "black"
                    }}>
                        Orders and reordering
                    </Text>

                </View>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.5}
                >

                <View style={{
                    flexDirection: "row",
                    // backgroundColor:"red",
                    // marginVertical:20,
                    height: 40,
                    marginTop: 5,

                    marginHorizontal: 30,
                    alignItems: 'center',
                }}>
                    <Image
                        style={{
                            height: 24,
                            width: 32,
                            resizeMode: "contain",
                            tintColor: "deeppink"
                        }}
                        source={require("../assets/icons8-customer-16.png")}
                        />
                    <Text style={{
                        marginHorizontal: 5,
                        color: "black"
                    }}>
                        Profile
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.5}
            >

                <View style={{
                    flexDirection: "row",
                    // backgroundColor:"red",
                    // marginVertical:20,
                    height: 40,
                    marginTop: 5,
                    
                    marginHorizontal: 30,
                    alignItems: 'center',
                }}>
                    <Image
                        style={{
                            height: 24,
                            width: 32,
                            resizeMode: "contain",
                            tintColor: "deeppink"
                        }}
                        source={require("../assets/icons8-trophy-16.png")}
                    />
                    <Text style={{
                        marginHorizontal: 5,
                        color: "black"
                    }}>
                        Challenges and rewards
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.5}
                >

                <View style={{
                    flexDirection: "row",
                    // backgroundColor:"red",
                    // marginVertical:20,
                    height: 40,
                    marginTop: 5,
                    
                    marginHorizontal: 30,
                    alignItems: 'center',
                }}>
                    <Image
                        style={{
                            height: 22,
                            width: 32,
                            tintColor: "deeppink",
                            resizeMode: "contain"
                        }}
                        source={require("../assets/icons8-ticket-16.png")}
                        />
                    <Text style={{
                        marginHorizontal: 5,
                        color: "black"
                    }}>
                        Vouchers                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.5}
                >

                <View style={{
                    flexDirection: "row",
                    // backgroundColor:"red",
                    // marginVertical:20,
                    height: 40,
                    marginHorizontal: 30,
                    alignItems: 'center',
                    marginTop: 5,

                }}>
                    <Image
                        style={{
                            height: 24,
                            width: 32,
                            resizeMode: "contain",
                            tintColor: "deeppink"
                        }}
                        source={require("../assets/icons8-help-16.png")}
                    />
                    <Text style={{
                        marginHorizontal: 5,
                        color: "black"
                    }}>
                        Help center
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.5}
            >

                <View style={{
                    flexDirection: "row",
                    // backgroundColor:"red",
                    // marginVertical:20,
                    height: 40,
                    marginHorizontal: 30,
                    alignItems: 'center',
                    marginTop: 5,

                }}>
                    <Image
                        style={{
                            height: 22,
                            width: 32,
                            tintColor: "deeppink",
                            resizeMode: "contain"
                        }}
                        source={require("../assets/icons8-settings-16.png")}
                        />
                    <Text style={{
                        marginHorizontal: 5,
                        color: "black"
                    }}>
                        Settings                </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.5}
            >

                <View style={{
                    flexDirection: "row",
                    // backgroundColor:"red",
                    // marginVertical:20,
                    height: 40,
                    marginHorizontal: 30,
                    alignItems: 'center',
                    marginTop: 5,

                }}>
                    <Image
                        style={{
                            height: 32,
                            width: 32,
                            tintColor: "deeppink",
                            resizeMode: "contain"

                        }}
                        source={require("../assets/icons8-more-16.png")}
                    />
                    <Text style={{
                        marginHorizontal: 5,
                        color: "black"
                    }}>
                        More
                    </Text>
                </View>
            </TouchableOpacity>
            <View style={{
                borderColor: "gainsboro",
                borderBottomWidth: 1,
                marginTop: 30,
                marginRight: 10
                
            }} />
            <TouchableOpacity
                activeOpacity={0.5}
            >

                <View style={{
                    flexDirection: "row",
                    // backgroundColor:"red",
                    marginVertical:10,
                    height: 40,
                    marginHorizontal: 30,
                    alignItems: 'center',
                    marginTop: 5,
                    
                }}>
                    <Image
                        style={{
                            height: 22,
                            width: 32,
                            tintColor: "deeppink",
                            resizeMode: "contain"

                        }}
                        source={require("../assets/icons8-logout-16.png")}
                    />
                    <Text style={{
                        marginHorizontal: 5,
                        color: "black"
                    }}>
                        Log out
                    </Text>
                </View>
            </TouchableOpacity>

          
        </View>
    )
}

export default CustomDrawer;