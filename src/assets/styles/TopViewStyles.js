import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'deeppink',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 80,
    paddingHorizontal: 20,
    width: '100%',
  },
  imgView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 120,
    justifyContent: 'flex-end',
  },
  drawerImg: {
    width: 28,
    height: 28,
    tintColor: '#fff',
  },
  img1: {
    width: 32,
    height: 32,
    tintColor: '#fff',
  },
  img2: {
    width: 28,
    height: 28,
    tintColor: '#fff',
    marginHorizontal: 5,
  },
  txt1: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  txt2: {
    color: '#fff',
  },
});
