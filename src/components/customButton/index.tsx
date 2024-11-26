import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import { AppColors } from '../../../utils/colors';


const CustomButton = ({buttonTitle, onPress, disabled}:a) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={onPress} disabled={disabled}>
        <View
          style={[
            styles.button,
            {
              backgroundColor: disabled
                ? AppColors.BUTTON_DISABLED
                : AppColors.BUTTON,
            },
          ]}>
          <Text style={styles.textStyle}>{buttonTitle}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: 'center',
    alignSelf:'center',
    width:'25%'
  },
  button: {
    borderRadius: 8,
    alignItems:'center',
    justifyContent:'center',
    marginTop: 30,
  },
  textStyle: {
    color: 'white',
    paddingVertical: 12,
    fontSize: 18,
    textAlign: 'center',
  },
});