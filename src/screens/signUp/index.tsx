import React, {useState} from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { signupInitialValue, validateSignup } from '../login/utils';
import InputBox from '../../components/InputBox';
import CustomButton from '../../components/customButton';
import { styles } from './styles';

const Signup = () => {
  const navigation = useNavigation();
  const [values, setValues]:any = useState(signupInitialValue);
  const [errors, setErrors]:any = useState({});

  const handleInputChange = (field:any, value:any) => {
    setValues({
      ...values,
      [field]: value,
    });
  };

  const handleSignup = () => {
    const validationErrors = validateSignup(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log(values);
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <Text style={styles.text}>What's your mobile number</Text>

        <InputBox
          placeholder={'Mobile Number'}
          onChangeText={(value:any) => handleInputChange('mobileNumber', value)}
          value={values.mobileNumber}
          errors={errors.mobileNumber}
          keyboardType={'numeric'}
          maxLength={10}
          style={styles.inputView}
        />
        <CustomButton buttonTitle={'Sign up'} onPress={handleSignup} />
        <TouchableOpacity style={styles.signUpWithEmailButton}>
          <Text style={styles.signUpWithEmailText}>Sign up with email</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.loginButton}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Signup;