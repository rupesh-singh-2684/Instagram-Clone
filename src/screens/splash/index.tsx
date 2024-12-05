import React, {useEffect} from 'react';
import {Image, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = () => {
  const navigation:any = useNavigation();

  useEffect(() => {
    const checkLoginStatus = async () => {
      const userToken = await AsyncStorage.getItem('userToken');
      if (userToken) {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Bottom' }],
        });
      } else {
        navigation.reset({
          index: 0,
          routes: [{ name: 'loginScreen' }],
        });
      }
    };
    setTimeout(() => {
      checkLoginStatus();
    }, 1000);
  }, [navigation])
  return (
    <View style={styles.container}>
      <Image
        source={require('/Users/admin/Desktop/InstagramClone/src/assets/icons/Instagram_logo.svg.png')}
        style={styles.logo}
      />
    </View>
  );
};
export default SplashScreen;