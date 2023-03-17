import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';
const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dimGrey,
  },
  topView: {
    backgroundColor: Colors.white,
    height: 50,
    width: windowWidth,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 1,
    opacity: 0.9,
  },
  topTxt: {
    color: Colors.black,
    fontSize: 17,
    fontWeight: 'bold',
  },
  crossImageOpacity: {
    width: 25,
    height: 25,
    position: 'absolute',
    left: 15,
    top: 10,
    zIndex: 2,
  },
  crossImg: {
    tintColor: Colors.deeppink,
    resizeMode: 'contain',
    width: 25,
    height: 25,
    position: 'absolute',
    zIndex: 2,
  },

  fpBusinessLogo: {
    width: 180,
    height: 180,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 25,
  },
  foodPandaBox: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    alignSelf: 'center',
    borderRadius: 12,
    elevation: 5,
    padding: 25,
    width: '95%',
    zIndex: 1,
    marginBottom: -30,
    bottom: 35,
  },
  boxTxt: {
    fontSize: 26,
    color: Colors.black,
    fontWeight: 'bold',
  },
  boxInstr: {
    textAlign: 'center',
    fontSize: 15,
    color: Colors.black,
    marginVertical: 8,
  },
  wholeView: {
    backgroundColor: Colors.dimGrey,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  image: {
    resizeMode: 'contain',
    marginHorizontal: 15,
    alignSelf: 'center',
    width:55,
    height:55
  },
  txtView: {
    borderBottomWidth: 1,
    width: '78%',
    borderColor: Colors.grey,
    marginHorizontal: 10,
    paddingVertical: 15,
  },
  txt: {
    fontSize: 18,
    color: Colors.black,
    fontWeight: 'bold',
  },
  inst: {
    fontSize: 16,
    color: Colors.black,
    marginTop: 5,
  },
  bottomBtnView: {
    marginVertical: 10,
  },
});
