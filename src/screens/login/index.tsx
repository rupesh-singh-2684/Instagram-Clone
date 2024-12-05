import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import InputBox from '../../components/InputBox';
import {loginInitialValue, validateLogin} from './utils';
import {Icons} from '../../assets';
import styles from './styles';
import CustomButton from '../../components/customButton';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const navigation: any = useNavigation();
  const [values, setValues]: any = useState({loginInitialValue});
  const [errors, setErrors]: any = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const userToken = await AsyncStorage.getItem('userToken');
      if (userToken) {
        setIsLoggedIn(true);
        navigation.reset({
          index: 0,
          routes: [{name: 'Bottom'}],
        });
      }
    };
    checkLoginStatus();
  }, [navigation]);

  const handleChange = (field: any, value: any) => {
    setValues({
      ...values,
      [field]: value,
    });
    if (value.trim() === '') {
      setErrors({
        ...errors,
        [field]: `${
          field === 'username' ? 'Username' : 'Password'
        } is required`,
      });
    } else {
      setErrors({
        ...errors,
        [field]: undefined,
      });
    }
  };
  const handleLogin = async () => {
    const validationErrors = validateLogin(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      try {
        const {username, password} = values;
        await auth().signInWithEmailAndPassword(username, password);
        await AsyncStorage.setItem('userToken', 'your_auth_token');

        setIsLoggedIn(true);
        navigation.reset({
          index: 0,
          routes: [{name: 'Bottom'}],
        });
      } catch (error: any) {
        console.error('Login error: ', error);
        if (error.code === 'auth/invalid-email') {
          setErrors({...errors, username: 'Invalid email address'});
        }else {
          setErrors({...errors, general: 'An error occurred. Please try again.'});
        }
      }
    } else {
      console.log('Validation failed', validationErrors);
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <Image source={Icons.homeLogo} style={styles.logoImage} />
        <View>
          <InputBox
            placeholder={'Username, email address or mobile number'}
            onChangeText={text => handleChange('username', text)}
            value={values.username}
            style={styles.inputView}
            touched={!!errors.username}
            errors={errors.username}
          />
          <InputBox
            placeholder={'Password'}
            onChangeText={text => handleChange('password', text)}
            value={values.password}
            style={styles.inputView}
            touched={!!errors.password}
            errors={errors.password}
            secureTextEntry
          />
          <TouchableOpacity style={styles.forgotPass}>
            <Text style={styles.forgotPassText}>Forgot Password?</Text>
          </TouchableOpacity>

          <CustomButton
            buttonTitle={'Login'}
            onPress={handleLogin}
            disabled={!values.username || !values.password}
          />
          {errors.general && <Text style={styles.errorText}>{errors.general}</Text>}
        </View>

        <View style={styles.facebookContainer}>
          <Image source={Icons.facebookLogo} style={styles.facebookLogo} />
          <TouchableOpacity style={styles.facebook}>
            <Text style={styles.facebookText}>Log in with Facebook</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.dividerContainer}>
          <View style={styles.line} />
          <View style={styles.orContainer}>
            <Text style={styles.orText}>OR</Text>
          </View>
          <View style={styles.line} />
        </View>
        <View style={styles.signUpContainer}>
          <Text style={styles.newAccountText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
            <Text style={styles.signupText}> Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
