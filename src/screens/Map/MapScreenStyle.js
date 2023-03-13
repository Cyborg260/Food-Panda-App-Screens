import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  mapViewContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    // height:"90%",
    // marginTop: 70,
  },
  confirmBtn: {
    // marginTop: 510,
    position:'absolute',
    bottom:20,
    left:0,
    right:0,
  },
  topView: {
    position:'absolute',
    top:0,
    left:0,
    right:0,
    flexDirection: 'row',
    // height: 70,
    backgroundColor: Colors.white,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    borderBottomWidth:3,
    borderBottomColor: Colors.gainsboro,
    // elevation: 1,

    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.18,
    // shadowRadius: 1.00,
    
    // elevation: 1,
  },
  inputStyleView: {
    backgroundColor: Colors.gainsboro,
    // width: 350,
    borderRadius: 6,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    flex: 1,
  },
  inputStyle: {
    backgroundColor: Colors.gainsboro,
    // width: 280,
    // flex:1,
    borderRadius: 6,
    height: 50,
    padding: 5,
  },
  leftImg: {
    tintColor: Colors.deeppink,
    resizeMode: 'contain',
    width: 32,
    height: 32,
    // backgroundColor:Colors.black,
    marginRight: 10,
  },
  locPointer: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    tintColor: Colors.deeppink,
  },
});
