import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    grid: {
      backgroundColor: '#fff',
      paddingBottom: 10,
    },
    gridItem: {
      flex: 1,
      aspectRatio: 1,
      margin: 1,
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },
    inputText: {
      borderWidth: 0.4,
      width: '92%',
      height: 40,
      marginBottom: 10,
      borderColor: 'grey',
      backgroundColor: '#F4F4F4',
      borderRadius: 15,
      paddingHorizontal: 15,
      fontSize: 14,
      alignSelf: 'center',
    },
  });

  export default styles