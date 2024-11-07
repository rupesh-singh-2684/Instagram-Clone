import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row', justifyContent: 'space-between',
    },
    iconsContainer:{
        margin:10,
        flexDirection:'row',
    
    },
    love:{
        height:24,
        width:24,
        marginHorizontal:10,
        // color:'#545454'
    },
    likes:{
        fontWeight:"bold",
        fontSize:14,
        margin:10
    },
    captions:{
        marginHorizontal:10
    },
    time:{
        margin:10,
        color:'grey'
    }
})

export default styles