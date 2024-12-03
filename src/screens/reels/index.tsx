import React from 'react';
import {View, Text, Image,} from 'react-native';
import ReelsComponent from '../../components/reels';
import { Icons } from '../../assets';
import styles from './styles';

const ReelsScreen = () => {

  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Reels
        </Text>
        <Image source={Icons.camera}
          style={styles.headerImg}
        />
      </View>
          <ReelsComponent/>
    </View>
  );
};

export default ReelsScreen;


