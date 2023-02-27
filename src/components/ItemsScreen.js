import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
//import packages//
import {useNavigation} from '@react-navigation/native';
//import Screen//
import {Data} from '../utils/Data/CrusinesData';
import ItemScreenStyles from '../assets/styles/ItemScreenStyles';
import {images} from '../utils/Images';
import {Colors} from '../utils/colors';
import {ScreenNames} from '../navigations/AppStack';

const ItemsScreen = () => {
  const navigation = useNavigation();
  const renderItem = ({item}) => {
    console.log(item, '=================item');
    return (
      <TouchableOpacity
        style={ItemScreenStyles.container}
        activeOpacity={0.65}
        onPress={() => navigation.navigate(ScreenNames.Home, {product: item})}>
        <View style={ItemScreenStyles.imgView}>
          <Image style={ItemScreenStyles.img} source={item.image} />
        </View>
        <Text style={ItemScreenStyles.txt}>{item.title}</Text>
      </TouchableOpacity>
    );
  };
  const renderFirstView = () => {
    return (
      <View style={ItemScreenStyles.container1}>
        {/* //1st colomn// */}
        <View>
          {/* //1st box// */}
          <TouchableOpacity activeOpacity={0.8}>
            <View style={ItemScreenStyles.container2}>
              <View style={ItemScreenStyles.con1txt1View}>
                <Text
                  style={{
                    fontSize: 24,
                    color: 'black',
                    fontWeight: 'bold',
                  }}>
                  Food{'\n'}delivery
                </Text>
              </View>
              <View style={ItemScreenStyles.con1txt2View}>
                <Text style={ItemScreenStyles.txt2}>
                  Order from your{'\n'}favourite restaurants...
                </Text>
              </View>
              <View style={ItemScreenStyles.conImgView}>
                <Image style={ItemScreenStyles.img} source={images.fp1} />
              </View>
            </View>
          </TouchableOpacity>
          {/* //2nd box// */}
          <View
            style={{
              backgroundColor: Colors.white,
              height: 80,
              width: 180,
              padding: 15,
              borderRadius: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <View>
                <View style={ItemScreenStyles.con1txt1View}>
                  <Text style={ItemScreenStyles.txt1}>Dine-in</Text>
                </View>
                <View style={ItemScreenStyles.con1txt2View}>
                  <Text style={ItemScreenStyles.txt2}>
                    Eat out and{'\n'}save 25%
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: 98,
                  height: 65,
                  borderRadius: 10,
                }}>
                <Image
                  style={{
                    width: 62,
                    height: 52,
                    resizeMode: 'contain',
                    marginHorizontal: 36,
                    borderRadius: 10,
                    marginVertical: 13,
                  }}
                  source={images.fp4}
                />
              </View>
            </View>
          </View>
        </View>

        {/* //2nd colomn// */}
        <View>
          {/* //1st box// */}
          <TouchableOpacity activeOpacity={0.8}>
            <View
              style={{
                backgroundColor: Colors.white,
                height: 125,
                width: 180,
                borderRadius: 10,
                marginHorizontal: 20,
                padding: 12,
              }}>
              <View style={ItemScreenStyles.con1txt1View}>
                <Text style={ItemScreenStyles.txt1}>pandamart</Text>
              </View>
              <View style={ItemScreenStyles.con1txt2View}>
                <Text style={ItemScreenStyles.txt2}>
                  convenience, delivere...
                </Text>
              </View>
              <View>
                <Image
                  style={{
                    width: 72,
                    height: 72,
                    marginHorizontal: 85,
                    resizeMode: 'contain',
                  }}
                  source={images.fp2}
                />
              </View>
            </View>
          </TouchableOpacity>
          {/* //2nd box// */}
          <View
            style={{
              backgroundColor: Colors.white,
              height: 80,
              width: 180,
              borderRadius: 10,
              marginTop: 18,
              marginHorizontal: 20,
            }}>
            <View
              style={{
                flexDirection: 'row',
                padding: 12,
              }}>
              <View>
                <View style={ItemScreenStyles.con1txt1View}>
                  <Text style={ItemScreenStyles.txt1}>pandamall</Text>
                </View>
                <View style={ItemScreenStyles.con1txt2View}>
                  <Text style={ItemScreenStyles.txt2}>
                    Everyday{'\n'}essentials
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: 98,
                  height: 65,
                  borderRadius: 10,
                }}>
                <Image
                  style={{
                    width: 62,
                    height: 52,
                    resizeMode: 'contain',
                    marginHorizontal: 22,
                    borderRadius: 10,
                    marginVertical: 15,
                  }}
                  source={images.fp5}
                />
              </View>
            </View>
          </View>

          {/* //3rd box// */}
          <View
            style={{
              backgroundColor: Colors.white,
              height: 80,
              width: 180,
              borderRadius: 10,
              marginTop: 18,
              marginHorizontal: 20,
            }}>
            <View
              style={{
                flexDirection: 'row',
                padding: 12,
              }}>
              <View>
                <View style={ItemScreenStyles.con1txt1View}>
                  <Text style={ItemScreenStyles.txt1}>Pick-up</Text>
                </View>
                <View style={ItemScreenStyles.con1txt2View}>
                  <Text style={ItemScreenStyles.txt2}>
                    Enjoy up to{'\n'}50% off and...
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: 98,
                  height: 65,
                  borderRadius: 10,
                }}>
                <Image
                  style={{
                    width: 62,
                    height: 52,
                    resizeMode: 'contain',
                    marginHorizontal: 30,
                    borderRadius: 10,
                    marginVertical: 15,
                  }}
                  source={images.fp3}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };

  const renderSecondView = () => {
    return (
      <View>
        <Text
          style={{
            fontSize: 20,
            color: 'black',
            fontWeight: 'bold',
            paddingLeft: 20,
            marginVertical: 15,
          }}>
          Your Restaurants
        </Text>
      </View>
    );
  };

  const renderThirdView = () => {
    return (
      <ScrollView
        style={{
          flexDirection: 'row',
          height: 250,
          padding: 15,
        }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {/* //1st Restaurant// */}
        <View
          style={{
            height: 300,
          }}>
          <View
            style={{
              height: 160,
            }}>
            <Image
              style={{
                width: 260,
                height: 160,
                resizeMode: 'contain',
                borderRadius: 10,
              }}
              source={images.fp6}
            />
          </View>
          <View
            style={{
              marginTop: 4,
            }}>
            <Text
              style={{
                color: Colors.black,
                fontWeight: 'bold',
              }}>
              Pizza Point - Gulshan e Iqbal
            </Text>
          </View>
          <View>
            <Text>$$ - Pizza, Italian, Sandwiches</Text>
          </View>
          <View>
            <Text
              style={{
                color: Colors.black,
                fontWeight: 'bold',
              }}>
              PKR 75 delivery fee
            </Text>
          </View>
        </View>

        {/* //2nd Restaurant// */}
        <View
          style={{
            height: 300,
            marginHorizontal: 15,
          }}>
          <View
            style={{
              height: 160,
            }}>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => navigation.navigate(ScreenNames.RestauScreen)}>
              <Image
                style={{
                  width: 260,
                  height: 160,
                  resizeMode: 'contain',
                  borderRadius: 10,
                }}
                source={images.fp7}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginTop: 4,
            }}>
            <Text
              style={{
                color: Colors.black,
                fontWeight: 'bold',
              }}>
              Pizza Nation - Gulshan
            </Text>
          </View>
          <View>
            <Text>$$$ - Pizza</Text>
          </View>
          <View>
            <Text
              style={{
                color: Colors.black,
                fontWeight: 'bold',
              }}>
              PKR 65 delivery fee
            </Text>
          </View>
        </View>

        {/* //3rd Restaurant// */}
        <View
          style={{
            height: 300,
            marginHorizontal: 5,
          }}>
          <View
            style={{
              height: 160,
            }}>
            <Image
              style={{
                width: 260,
                height: 160,
                resizeMode: 'contain',
                borderRadius: 10,
              }}
              source={images.fp8}
            />
          </View>
          <View
            style={{
              marginTop: 4,
            }}>
            <Text
              style={{
                color: Colors.black,
                fontWeight: 'bold',
              }}>
              Red Apple - Gulshan
            </Text>
          </View>
          <View>
            <Text>$$ - Fast Food, Pakistan Chowk</Text>
          </View>
          <View>
            <Text
              style={{
                color: Colors.black,
                fontWeight: 'bold',
              }}>
              PKR 65 delivery fee
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  };

  const renderFourthView = () => {
    return (
      <View>
        <Text
          style={{
            fontSize: 20,
            color: 'black',
            fontWeight: 'bold',
            paddingLeft: 20,
            marginVertical: 10,
          }}>
          Your daily deals
        </Text>
      </View>
    );
  };

  const renderFifthView = () => {
    return (
      <ScrollView
        style={{
          flexDirection: 'row',
          padding: 15,
        }}
        showsHorizontalScrollIndicator={false}
        horizontal={true}>
        <View
          style={{
            width: 180,
            height: 240,
          }}>
          <Image
            style={{
              width: 180,
              height: 240,
              resizeMode: 'contain',
              borderRadius: 10,
            }}
            source={images.fp9}
          />
        </View>
        <View
          style={{
            width: 180,
            height: 240,
            marginHorizontal: 20,
          }}>
          <TouchableOpacity
            style={{}}
            activeOpacity={0.9}
            onPress={() => navigation.navigate(ScreenNames.DealScreen)}>
            <Image
              style={{
                width: 180,
                height: 240,
                resizeMode: 'contain',
                borderRadius: 10,
              }}
              source={images.fp10}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: 180,
            height: 240,
          }}>
          <Image
            style={{
              width: 180,
              height: 240,
              resizeMode: 'contain',
              borderRadius: 10,
            }}
            source={images.fp11}
          />
        </View>
        <View
          style={{
            width: 180,
            height: 240,
            marginHorizontal: 20,
          }}>
          <Image
            style={{
              width: 180,
              height: 240,
              resizeMode: 'contain',
              borderRadius: 10,
            }}
            source={images.fp12}
          />
        </View>
        <View
          style={{
            width: 180,
            height: 240,
            marginHorizontal: 20,
          }}>
          <Image
            style={{
              width: 180,
              height: 240,
              resizeMode: 'contain',
              borderRadius: 10,
            }}
            source={images.fp9}
          />
        </View>
        <View
          style={{
            width: 180,
            height: 240,
            marginRight: 20,
          }}>
          <Image
            style={{
              width: 180,
              height: 240,
              resizeMode: 'contain',
              borderRadius: 10,
            }}
            source={images.fp12}
          />
        </View>
      </ScrollView>
    );
  };

  const renderSixthView = () => {
    return (
      <View>
        <Text
          style={{
            fontSize: 20,
            color: 'black',
            fontWeight: 'bold',
            paddingLeft: 20,
            marginVertical: 10,
          }}>
          Cuisines
        </Text>
      </View>
    );
  };

  const renderSeventhView = () => {
    return (
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View>
          <FlatList data={Data} renderItem={renderItem} numColumns={6} />
        </View>
      </ScrollView>
    );
  };

  const renderEightView = () => {
    return (
      <TouchableOpacity activeOpacity={0.5}>
        {/* //FoodPanda Logo// */}
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 40,
            marginBottom: 20,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: Colors.lightGrey,
            width: '95%',
            height: 75,
            justifyContent: 'space-between',
            marginHorizontal: 10,
            alignItems: 'center',
            padding: 10,
            shadowColor: Colors.black,
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 1,
          }}>
          <View>
            <Text
              style={{
                color: Colors.black,
                fontSize: 18,
                fontWeight: 'bold',
              }}>
              Become a pro
            </Text>
            <Text
              style={{
                color: Colors.black,
              }}>
              and get exclusive deals
            </Text>
          </View>
          <View>
            <Image
              style={{
                width: 100,
                height: 62,
                resizeMode: 'contain',
              }}
              source={images.fp23}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
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
  );
};

export default ItemsScreen;
