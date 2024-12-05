import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContainer:{
      flex: 1
    },
    container:{
      flex: 1, 
      justifyContent: "space-between" 
    },
    postImgContainer:{
      flex:1
    },
    postImg:{
      resizeMode:'cover',
      width:'auto',
      height:'100%'
    },
    iconContainer:{
      flexDirection: 'row', 
      justifyContent: 'space-around',
      backgroundColor: '#DEDEDE', 
      padding: 15 ,
      flex:0.05
    },
    iconImg:{
      height: 30, 
      width: 30, 
      borderWidth: 1, 
      borderRadius: 8
    },
    line:{
      height:40,
      flexDirection:'row',
      borderColor:'black',
      borderWidth:1
    },
    placeholderText: {
      fontSize: 18,
      color: '#aaa',
      textAlign: 'center',
      flex:1,
      top:'45%',
    },
    postButton: {
      backgroundColor: '#3897f0',
      paddingVertical: 12,
      borderRadius: 5,
      marginTop: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    postButtonText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 16,
    },
  })

  export default styles