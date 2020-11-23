import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  itemContainer: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 16,
    borderRadius: 10,
    // flexDirection: 'row',
  },
  groupHeader: {flexDirection: 'row', alignItems: 'center'},
  groupHeaderTitle: {marginLeft: 16},
  groupHeaderEmail: {color: '#ccc'},
  groupBody: {marginTop: 20},
  groupBodyTitle: {fontSize: 30, color: 'red'},
  groupButtonTitle: {color: 'white'},
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'green',
  },
  itemButtonDetail: {
    backgroundColor: 'green',
    width: 150,
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
});
