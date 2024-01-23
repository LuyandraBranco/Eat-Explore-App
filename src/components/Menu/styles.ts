import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  containerMenu: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    elevation: 10,
    // borderTopWidth: 1, borderTopColor: '#E5383B'
  },
  itemMenu:{
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: "center"
  },
  txt:{
    color: "#000000"
  }
});
