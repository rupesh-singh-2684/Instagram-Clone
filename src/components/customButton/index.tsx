import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import { AppColors } from '../../../utils/colors';
import styles from './styles';


const CustomButton = ({buttonTitle, onPress, disabled}:any) => {
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

