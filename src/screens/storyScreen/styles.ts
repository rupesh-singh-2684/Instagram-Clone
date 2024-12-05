import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    emptyStory:{
        alignContent:'center',
        justifyContent:'center',
        flex:1
    },
    story:{
        height:'100%',
        backgroundColor:'#000000'
    },
    img:{
        height:'100%',
        justifyContent:'space-between',
        resizeMode:'cover'
    },
    header:{
        flexDirection:'row',
        alignItems:'center',
    },
    userName:{
        fontWeight:'800',
        fontSize:18,
        color:'white'
    },
    postedTime:{
        fontSize:14,
        color:'#808080',
        marginHorizontal:10
    },
    headerContainer:{
        flexDirection: 'row', 
        alignItems: 'center', 
        marginTop: 5, 
        justifyContent: 'space-between',
    },
    bottomContainer:{
        flexDirection: 'row', 
        alignItems: 'center', 
        margin: 10, 
        justifyContent: 'space-between'
    },
    bottomImg:{
        height: 25, 
        width: 25, 
        tintColor: 'white'
    },
    input:{
        borderWidth: 1, 
        borderRadius: 20, 
        fontSize: 16, 
        width: '65%', 
        padding: 10, 
        borderColor: 'white', 
        color: 'white',
    },
    crossImg:{
        height: 20,
        width: 20, 
        tintColor: 'white',
        marginHorizontal: 10
    }
})

export default styles