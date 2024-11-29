import React, {useState, useEffect} from 'react';
import {Image, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';

const SplashScreen = () => {
  const navigation:any = useNavigation();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      navigation.navigate('loginScreen');
    }, 1000);

    return () => clearTimeout(timer);
  }, [navigation]);

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