import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  container2: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    height: 80,
    alignItems: 'center',
  },
  touchableOpacity: {
    flexDirection: 'row',
  },
  searchIcon: {
    width: 28,
    height: 28,
    tintColor: Colors.grey,
  },
  insideView: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    width: '90%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 3,
    flexDirection: 'row',
  },
  headerTxt: {
    fontSize: 18,
    color: Colors.black,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  favouritesIcon: {
    width: 28,
    height: 28,
    tintColor: Colors.deeppink,
    marginHorizontal: 220,
  },
  txt: {
    fontSize: 16,
    marginHorizontal: 10,
    color: Colors.white,
  },
  imgView: {
    marginHorizontal: 15,
  },
  img: {
    tintColor: Colors.deeppink,
    resizeMode: 'stretch',
    width: 30,
    height: 40,
  },
});
