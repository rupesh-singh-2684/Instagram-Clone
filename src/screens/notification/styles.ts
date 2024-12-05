import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
         flex: 1, 
         backgroundColor: '#fff', 
         padding: 10 , 
        },
    notificationItem: { 
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
    notificationText: { 
        fontSize: 14 
    },
    bold: { 
        fontWeight: 'bold' 
    },
    time: { 
        color: 'gray', 
        fontSize: 12 
    },
    followButton: { 
        backgroundColor: '#3897f0', 
        borderRadius: 5, 
        paddingHorizontal: 15, 
        paddingVertical: 5 
    },
    buttonText: { 
        color: '#fff', 
        fontWeight: 'bold' 
    },
    header: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        paddingHorizontal: 16,
        paddingTop: 10,
        marginBottom:10
      },
      backImg: {
        width: 28,
        height: 24,
        marginRight:10
      },
      idContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginRight: 16,
      },
      id: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
      },
      bottomArrowImg: {
        width: 12,
        height: 18,
        resizeMode: 'contain',
        marginLeft: 6,
      },
});

export default styles