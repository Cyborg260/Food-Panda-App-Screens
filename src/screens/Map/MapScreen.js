import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from '../../screens/Map/MapScreenStyle';
import {Colors} from '../../utils/colors';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import BottomButton from '../../components/BottomButton';
import {images} from '../../utils/Images';
import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../navigations/AppStack';

const MapScreen = () => {
  //================== useState ===================//
  const [text, setText] = useState('');
  const [location, setLocation] = useState(false);
  const [coordinates, setCoordinates] = useState({
    latitude: 24.896760518300283,
    longitude: 66.9928190857172,
  });
  //================= useEffect ===================//
  useEffect(() => {
    Geolocation.getCurrentPosition(loc => {
      const positions = loc.coords;
      console.log('==================== Current Location ===============');
      console.log(positions);
      setCoordinates({
        latitude: 24.9125026,
        longitude: 67.0307375,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      });
    });
  }, []);

  const getLocation = () => {
    const result = requestLocationPermission();
    result.then(res => {
      console.log('=============== Permission Response ==========');
      console.log(res);
      if (res) {
        Geolocation.getCurrentPosition(
          position => {
            console.log('=============== Current Position ==========');
            setCoordinates(position);
          },
          error => {
            console.log('=============== Current Position Error==========');
            console.log(error.code, error.message);
            setCoordinates(false);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      }
    });
    getLocation();
  };
  const navigation = useNavigation();
  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Geolocation Permission',
          message: 'Can we access your location?',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      console.log('granted', granted);
      if (granted === 'granted') {
        console.log('You can use Geolocation');
        return true;
      } else {
        console.log('You cannot use Geolocation');
        return false;
      }
    } catch (err) {
      return false;
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor={Colors.white}
        barStyle="dark-content"
      />

      <View style={styles.mapViewContainer}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: 24.9125026,
            longitude: 67.0307375,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
          showsUserLocation={true}
          showsMyLocationButton={true}
          followsUserLocation={true}
          showsCompass={true}
          scrollEnabled={true}
          zoomEnabled={true}
          pitchEnabled={true}
          rotateEnabled={true}>
          <Marker
            coordinate={{
              longitude: coordinates.longitude,
              latitude: coordinates.latitude,
            }}
          />
        </MapView>
      </View>

      <View style={styles.topView}>
        <TouchableOpacity
          activeOpacity={0.85}
          onPress={() => navigation.goBack()}>
          <Image style={styles.leftImg} source={images.lefticon} />
        </TouchableOpacity>
        <View style={styles.inputStyleView}>
          <TextInput
            style={styles.inputStyle}
            onChangeText={setText}
            value={text}
            placeholder="Set delivery address"
          />
          <Image style={styles.locPointer} source={images.aimPointer} />
        </View>
      </View>
      <View style={styles.confirmBtn}>
        <BottomButton
          txt="Confirm"
          backgroundColor={Colors.deeppink}
          txtColor={Colors.white}
          borderColor={Colors.deeppink}
          navigation={() => navigation.navigate(ScreenNames.DrawerScreen)}
        />
      </View>
    </SafeAreaView>
  );
};

export default MapScreen;
