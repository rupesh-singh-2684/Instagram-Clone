import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContainer:{
      flex: 1
    },
    container:{
      flex: 1, justifyContent: "space-between" 
    },
    postImgContainer:{
      flex:1
    },
    postImg:{
      resizeMode:'cover',width:'auto',height:'100%'
    },
    iconContainer:{
      flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#DEDEDE', padding: 15 ,flex:0.05
    },
    iconImg:{
      height: 30, width: 30, borderWidth: 1, borderRadius: 8
    },
    line:{
      height:40,flexDirection:'row',borderColor:'black',borderWidth:1
    }
  })

  export default styles