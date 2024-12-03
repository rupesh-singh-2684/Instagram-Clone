import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    headerContainer: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    backIcon: {
        width: 25,
        height: 25,
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
        // flex:1
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal:10
    },
    notificationIcon: {
        width: 25,
        height: 25,
        marginLeft:15
    },
    messageView: {
        padding: 10,
        borderRadius: 20,
        marginBottom: 5,
        flexDirection:'row'
    },
    messageText: {
        fontSize: 16,
    },
    timeTextView: {
        fontSize: 12,
        color: '#888',
        marginBottom: 10,
        // marginHorizontal:5
    },
    reactionView: {
        marginTop: 5,
        padding: 5,
    },
    sendButton: {
        padding: 6,
        alignSelf:'center',
        // backgroundColor:'#F4F4F4'
    },
    sendIcon: {
        width: 25,
        height: 25,
        marginLeft:10
        // alignSelf:'center'
    },
    RBContainer: {
        padding: 20,
    },
    RBContainerItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    RBtext: {
        marginLeft: 10,
        fontSize: 16,
    },
    eyeIcon: {
        width: 25,
        height: 25,
    },
    pinIcon: {
        width: 25,
        height: 25,
    },
    searchIcon: {
        width: 25,
        height: 25,
    },
    bottomSheetContainer: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: '#fff',
        padding: 20,
    },
    bottomSheetWrapper: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    inputToolbar: {
        backgroundColor: '#F4F4F4',
        borderRadius:30,
        marginHorizontal:15,
        borderWidth:0.2,
        // paddingVertical: 3,
        borderTopColor:'grey',
        bottom:10,
        borderColor:'grey'

    },
    actionButton: {
        marginLeft: 10,
        alignSelf:'center',
        // backgroundColor:'#F4F4F4'
    },
    actionIcon: {
        width: 45,
        height: 45,
        // alignSelf:'center',
        // backgroundColor:'red',
        right:10
    },
    userImg:{
        height:25,width:25,borderRadius:13
    },
    iconContainer:{
        flexDirection: 'row' ,alignSelf:'center',marginRight:10
    },
    message:{
        marginHorizontal: 10
    }
});

export default styles;