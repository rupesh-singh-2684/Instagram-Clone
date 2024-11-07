import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        // backgroundColor:'green'
    },
    img:{
        height:100,
        width:300
    },
    title:{
        marginBottom:40
    },
    idInput:{
        borderWidth:1,
        width:'80%',
        fontSize:14,
        borderRadius:5,
        padding:10,
        marginBottom:10,
        borderColor:'grey',
        backgroundColor:'lightgrey'
    },
    forget:{
        // backgroundColor:'red',
        // left:110
        // justifyContent:'flex-end',
        // alignContent:'flex-end',
        flexDirection:'column',
        width:'100%',
        alignItems:'flex-end',
        right:40
    }
})

export default styles