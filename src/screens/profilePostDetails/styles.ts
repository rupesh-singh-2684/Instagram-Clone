import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    detailsContainer: {
      flex: 1,
      backgroundColor: '#fff',
    },
    userInfo: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
    },
    userImage: {
      width: 40,
      height: 40,
      borderRadius: 20,
      marginRight: 10,
    },
    userName: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    postImage: {
      width: '100%',
      height: 400,
      resizeMode: 'cover',
    },
    postDetails: {
      padding: 10,
    },
    likes: {
      fontWeight: 'bold',
      marginBottom: 5,
    },
    caption: {
      marginBottom: 5,
    },
    time: {
      color: 'gray',
      fontSize: 12,
    },
    comments:{
      fontWeight: '500',
      // alignSelf:'center',
      marginHorizontal:5
    },
    commentUserImg:{
      width: 25,
      height: 25,
      borderRadius: 13,
      marginRight: 10,
    }
  });

  export default styles