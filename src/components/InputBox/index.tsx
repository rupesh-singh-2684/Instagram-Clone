import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const InputBox = ({
  placeholder,
  onChangeText,
  onBlur,
  value,
  style,
  maxLength,
  secureTextEntry,
  keyboardType,
  touched,
  errors,
}:any) => {
  return (
    <View style={styles.mainContainer}>
      <TextInput
        style={style}
        placeholder={placeholder}
        onChangeText={onChangeText}
        onBlur={onBlur}
        value={value}
        secureTextEntry={secureTextEntry}
        touched={touched}
        keyboardType={keyboardType}
        maxLength={maxLength}
      />
      {errors && touched && <Text style={styles.errorMsg}>{errors}</Text>}
    </View>
  );
};

export default InputBox;

const styles = StyleSheet.create({
  mainContainer: {
    height: 50,
    marginTop:6,
  },

  errorMsg: {
    color: 'red',
    paddingLeft: 5
  },
});