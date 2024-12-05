import { StyleSheet } from "react-native"

const styles = StyleSheet.create ({
    container:{
        flexDirection:'row',
    },
    titleImg:{
        height:45,
        width:125,
        marginHorizontal:15
    },
    headerIcons:{
        height:25,
        width:25,
        marginHorizontal:15
    },
    messangerIcon:{
        height:25,
        width:25,
        marginRight:15
    },
    iconsDiv:{
        flexDirection:'row',
        alignItems:'center',
        flex:1,
        justifyContent:'flex-end',
    }   
})

export default styles