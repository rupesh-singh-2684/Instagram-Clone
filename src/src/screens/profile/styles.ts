import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    userName:{
        fontSize:18,
        fontWeight:'800'
    },
    container:{
        margin:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    headerImg:{
        height:25,
        width:25,
        marginHorizontal:10
    },
    headerImg1:{
        height:32,
        width:32,
        marginLeft:10,
        marginTop:-3.5
    },
    imgContainer:{
         flexDirection: 'row'
    },
    detailsContainer:{
        flexDirection: 'row', alignItems: 'center',marginHorizontal:10
    },
    userProfile:{
        height: 90, width: 90, borderRadius: 60,marginHorizontal:10
    },
    countContainer:{
        flexDirection: 'row', justifyContent: 'space-evenly',flex:1
    },
    postDetails:{
        alignItems: 'center'
    },
    title1:{
        fontWeight:'800',
    },
    title2:{
        fontWeight:'600'
    },
    userProfileName:{
        margin:10
    },
    bio:{
        marginTop:5,
        fontWeight:'500'
    },
    optionContainer:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginTop:10
    },
    editButton:{
        backgroundColor:'#E0E0E0',
        paddingVertical:8,
        width:'47%',
        alignItems:'center',
        borderRadius:5

    },
    renderImg:{
        flex:1,width:undefined, height:undefined
    },
    renderPostImg:{
        flexDirection:'row',flexWrap:'wrap',flex:1,marginTop:10
    },
    tabContainer:{
        flexDirection: 'row', justifyContent: 'space-around', marginTop: 20
    },
})

export default styles