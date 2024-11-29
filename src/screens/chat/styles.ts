import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: '#fff', 
        padding: 10 
    },
    messageItem: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        margin: 10 
    },
    avatar: { 
        width: 50, 
        height: 50, 
        borderRadius: 25 
    },
    textContainer: { 
        flex: 1, 
        marginLeft: 10 
    },
    messageText: { 
        fontSize: 14 
    },
    bold: { 
        fontWeight: 'bold' 
    },
    time: { 
        color: 'gray', 
        fontSize: 12 
    },
  });

  export default styles

