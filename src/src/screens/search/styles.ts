import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F0F0F0',
        borderRadius: 10,
        paddingHorizontal: 10,
        height: 40,
        marginVertical: 10,
        marginHorizontal:20
      },
      searchInput: {
        flex: 1,
        height: 40,
        fontSize: 16,
        color: '#000',
        paddingVertical: 0,
      },
      searchIcon: {
        marginRight: 10,
        height:20,
        width:20
      },
    
})

export default styles