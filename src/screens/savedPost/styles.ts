import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  grid: {
    backgroundColor: '#fff',
    paddingBottom: 10,
  },
  gridItem: {
    flex: 1,
    aspectRatio: 1,
    margin: 1,
  },
  itemText: {
    fontSize: 16,
    color: '#333',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
