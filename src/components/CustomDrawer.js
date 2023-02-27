import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {images} from '../utils/Images';
import {Colors} from '../utils/colors';

const CustomDrawer = () => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <View
        style={{
          height: '10%',
          borderBottomWidth: 1,
          borderBottomColor: Colors.gainsboro,
          justifyContent: 'center',
          marginRight: 10,
        }}>
        <Text
          style={{
            paddingLeft: 30,
            fontSize: 18,
            fontWeight: 'bold',
            color: Colors.black,
          }}>
          Syed Shuja
        </Text>
      </View>
      <View
        style={{
          height: '15%',
          marginHorizontal: 30,
          borderBottomWidth: 1,
          borderBottomColor: Colors.gainsboro,
          justifyContent: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: '3%',
          }}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Text
              style={{
                fontSize: 13,
                color: Colors.deeppink,
              }}>
              panda
            </Text>
            <Text
              style={{
                fontSize: 13,
                color: Colors.white,
                fontStyle: 'italic',
                backgroundColor: Colors.deeppink,
                width: 25,
                textAlign: 'center',
              }}>
              pay
            </Text>
          </View>
          <TouchableOpacity activeOpacity={0.5}>
            <Text
              style={{
                fontSize: 12,
                color: Colors.deeppink,
                borderRadius: 10,
                borderWidth: 1,
                padding: 1,
                textAlign: 'center',
                backgroundColor: Colors.lavender,
                borderColor: Colors.lavender,
              }}>
              Rs. 0.00
            </Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontSize: 14,
            color: Colors.black,
          }}>
          Credit and payment methods
        </Text>
      </View>
      <TouchableOpacity activeOpacity={0.5}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            height: 40,
            marginHorizontal: 30,
            alignItems: 'center',
          }}>
          <Image
            style={{
              height: 18,
              width: 32,
              resizeMode: 'contain',
            }}
            source={images.proImg}
          />
          <Text
            style={{
              marginHorizontal: 5,
              color: Colors.black,
            }}>
            Become a pandapro
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.5}>
        <View
          style={{
            flexDirection: 'row',
            height: 40,
            marginTop: 5,

            marginHorizontal: 30,
            alignItems: 'center',
          }}>
          <Image
            style={{
              height: 22,
              width: 32,
              resizeMode: 'contain',
              tintColor: Colors.deeppink,
            }}
            source={images.homeIcon}
          />
          <Text
            style={{
              marginHorizontal: 5,
              color: Colors.black,
            }}>
            Addresses{' '}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.5}>
        <View
          style={{
            flexDirection: 'row',
            height: 40,
            marginTop: 5,
            marginHorizontal: 30,
            alignItems: 'center',
          }}>
          <Image
            style={{
              height: 22,
              width: 32,
              resizeMode: 'contain',
              tintColor: Colors.deeppink,
            }}
            source={images.orderPurchaseImg}
          />
          <Text
            style={{
              marginHorizontal: 5,
              color: Colors.black,
            }}>
            Orders and reordering
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.5}>
        <View
          style={{
            flexDirection: 'row',
            height: 40,
            marginTop: 5,
            marginHorizontal: 30,
            alignItems: 'center',
          }}>
          <Image
            style={{
              height: 24,
              width: 32,
              resizeMode: 'contain',
              tintColor: Colors.deeppink,
            }}
            source={images.customerImg}
          />
          <Text
            style={{
              marginHorizontal: 5,
              color: Colors.black,
            }}>
            Profile
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.5}>
        <View
          style={{
            flexDirection: 'row',
            height: 40,
            marginTop: 5,

            marginHorizontal: 30,
            alignItems: 'center',
          }}>
          <Image
            style={{
              height: 24,
              width: 32,
              resizeMode: 'contain',
              tintColor: Colors.deeppink,
            }}
            source={images.trophyIcon}
          />
          <Text
            style={{
              marginHorizontal: 5,
              color: Colors.black,
            }}>
            Challenges and rewards
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.5}>
        <View
          style={{
            flexDirection: 'row',
            height: 40,
            marginTop: 5,

            marginHorizontal: 30,
            alignItems: 'center',
          }}>
          <Image
            style={{
              height: 22,
              width: 32,
              tintColor: Colors.deeppink,
              resizeMode: 'contain',
            }}
            source={images.ticketIcon}
          />
          <Text
            style={{
              marginHorizontal: 5,
              color: Colors.black,
            }}>
            Vouchers{' '}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.5}>
        <View
          style={{
            flexDirection: 'row',
            height: 40,
            marginHorizontal: 30,
            alignItems: 'center',
            marginTop: 5,
          }}>
          <Image
            style={{
              height: 24,
              width: 32,
              resizeMode: 'contain',
              tintColor: Colors.deeppink,
            }}
            source={images.helpIcon}
          />
          <Text
            style={{
              marginHorizontal: 5,
              color: Colors.black,
            }}>
            Help center
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.5}>
        <View
          style={{
            flexDirection: 'row',
            height: 40,
            marginHorizontal: 30,
            alignItems: 'center',
            marginTop: 5,
          }}>
          <Image
            style={{
              height: 22,
              width: 32,
              tintColor: Colors.deeppink,
              resizeMode: 'contain',
            }}
            source={images.settingsicon}
          />
          <Text
            style={{
              marginHorizontal: 5,
              color: Colors.black,
            }}>
            Settings{' '}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.5}>
        <View
          style={{
            flexDirection: 'row',
            height: 40,
            marginHorizontal: 30,
            alignItems: 'center',
            marginTop: 5,
          }}>
          <Image
            style={{
              height: 32,
              width: 32,
              tintColor: Colors.deeppink,
              resizeMode: 'contain',
            }}
            source={images.moreIcon}
          />
          <Text
            style={{
              marginHorizontal: 5,
              color: Colors.black,
            }}>
            More
          </Text>
        </View>
      </TouchableOpacity>
      <View
        style={{
          borderColor: Colors.gainsboro,
          borderBottomWidth: 1,
          marginTop: 30,
          marginRight: 10,
        }}
      />
      <TouchableOpacity activeOpacity={0.5}>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 10,
            height: 40,
            marginHorizontal: 30,
            alignItems: 'center',
            marginTop: 5,
          }}>
          <Image
            style={{
              height: 22,
              width: 32,
              tintColor: Colors.deeppink,
              resizeMode: 'contain',
            }}
            source={images.logoutImg}
          />
          <Text
            style={{
              marginHorizontal: 5,
              color: Colors.black,
            }}>
            Log out
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CustomDrawer;
