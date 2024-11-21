import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // padding: 10,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        marginHorizontal:20,
        // marginTop:60,
        marginBottom:10
    },
    backButton: {
        fontSize: 24,
        color: '#000',
        marginRight: 8,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        //   alignSelf:'center',
        //   textAlign:'center',
        //   backgroundColor:'red'
    },
    profileSection: {
        alignItems: 'center',
        marginBottom: 20,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 8,
    },
    editPicture: {
        color: '#1E90FF',
        fontSize: 16,
    },
    inputGroup: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        color: '#555',
        marginBottom: 8,
        marginHorizontal:20

    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        fontSize: 16,
        marginBottom: 16,
        marginHorizontal:20

    },
    bioInput: {
        height: 60,
        textAlignVertical: 'top',
    },
    profileInfoSection: {
        marginTop: 20,
        marginHorizontal:20

    },
    infoHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 12,
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    infoLabel: {
        fontSize: 16,
        color: '#555',
    },
    infoValue: {
        fontSize: 16,
        color: '#1E90FF',
    },
    container2:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:15,
        marginVertical:10,
     //    backgroundColor:'green',
     },
     bgColor: {
         flex: 1,
         backgroundColor: '#FFFFFF',
       },
       marginSide:{
         marginHorizontal:20,
       },
     container1:{
         flexDirection:'row',
         alignItems:'center'
     },
     imageStyleView:{
         justifyContent:'center',
         alignItems:'center',
     },
     imageSize:{
         height:27,
         width:27,
     },
     iconImageSize:{
         height:30,
         width:30,
         borderRadius:15,
         marginHorizontal:10
         // backgroundColor:'red',
     },
     textArrange:{
         justifyContent:'center',
     },
     name:{
         marginEnd:10,
         // marginStart:25
         fontSize:16,
         fontWeight:'500',
         color:'black',
         // textAlignVertical:'center',
         // textAlign:'center',
         // justifyContent:'center',
         // alignItems:'center',
         // backgroundColor:'grey',
     },
     comments:{
         marginEnd:10,
         // marginStart:25
         fontSize:14,
         fontWeight:'400',
         color:'black',
     },
     time:{
         fontSize:16,
         fontWeight:'500',
         color:'#DCDCDC',
     }
});

export default styles