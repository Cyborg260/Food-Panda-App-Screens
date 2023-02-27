import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';

export default StyleSheet.create({
  container1: {
    backgroundColor: '#eae8e8',
    height: 360,
    flexDirection: 'row',
    padding: 20,
  },
  container2: {
    backgroundColor: '#fff',
    height: 220,
    width: 180,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
  },
  con1txt1View: {},
  txt1: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  txt2: {
    color: 'black',
    fontSize: 12,
  },
  con1txt2View: {},
  conImgView: {
    height: 100,
  },
  img: {
    marginHorizontal: 45,
    width: 120,
    height: 100,
    resizeMode: 'contain',
  },
  //==================== RenderItem Component Style ==========================//

  container: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgView: {
    width: 80,
    height: 80,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  img: {
    resizeMode: 'contain',
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  txt: {
    color: 'black',
    marginHorizontal: 10,
  },
});
