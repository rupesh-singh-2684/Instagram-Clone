import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContainer:{
      width: Dimensions.get('window').width,
      height:   Dimensions.get('window').height,
        position: 'relative',
        backgroundColor: 'black',
    },
    header:{
      height:80,
      width: Dimensions.get('window').width,
        // width:SCREEN_WIDTH,
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'space-between',
        zIndex: 1,
        paddingHorizontal: 20,
        alignItems:'flex-end',
        // backgroundColor:'red',
    },
    headerText:{
      fontSize: 20, fontWeight: 'bold', color: 'white'
    },
    headerImg:{
      width: 30,
              height: 30,
              tintColor: 'white',
              resizeMode: 'contain',
    }
  })

  export default styles