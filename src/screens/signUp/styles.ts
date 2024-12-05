import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  subContainer: {
    flex:1,
    marginTop: 20,
    marginHorizontal:30
  },
  text: {
    fontSize: 25,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 20,
  },
  signUpWithEmailButton: {
    marginTop: 15,
  },
  signUpWithEmailText: {
    fontSize: 16,
    textAlign: 'center',
  },
  loginButton: {
    marginBottom: 20,
  },
  loginText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#3797EF',
  },
  inputView: {
    borderWidth: 1,
    width: '100%',
    height: 45,
    justifyContent:'center',
    borderColor: '#ccc',
    borderRadius: 5,
    marginTop:16,
    paddingHorizontal: 10,
    fontSize: 16,
    alignSelf:'center'
  },
});