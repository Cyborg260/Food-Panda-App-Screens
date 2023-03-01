import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  img: {
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 120,
    width: 100,
    height: 150,
  },
  mainTxt: {
    textAlign: 'center',
    color: Colors.black,
    fontSize: 24,
    fontWeight: 'bold',
  },
  intructxt: {
    textAlign: 'center',
    color: Colors.black,
    fontSize: 14,
    marginTop: 15,
  },
  bottomView: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderColor: Colors.gainsboro,
    borderWidth: 1,
    height: 185,
    backgroundColor: Colors.white,
    marginTop: 100,
  },
  indicator: {
    position: 'absolute',
    alignSelf:"center",
    marginTop:300,
    zIndex:1
  },
});
