import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  backImg: {
    width: 28,
    height: 24,
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
  newMsg: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  inputText: {
    borderWidth: 1,
    width: '93%',
    height: 40,
    marginTop: 10,
    borderColor: '#F4F4F4',
    backgroundColor: '#F4F4F4',
    borderRadius: 18,
    paddingHorizontal: 14,
    fontSize: 18,
    alignSelf: 'center',
    textAlignVertical:'center',
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  msgText: {
    fontSize: 18,
    fontWeight: '500',
  },
  RequestText: {
    fontSize:18,
    fontWeight: '600',
    color: '#3797EF',
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  profilePic: {
    width: 55,
    height: 55,
    borderRadius: 45,
  },
  chatDetails: {
    marginLeft: 15,
    flex: 1,
    justifyContent: 'center',
  },
  userName: {
    fontSize: 16,
    fontWeight: '400',
    color: '#000',
  },
  userDetails: {
    fontSize: 14,
    color: '#888',
    marginTop: 12,
  },
  cameraImg: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  listContainer: {
    marginTop: 10,
  },
});