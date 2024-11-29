export default styles;
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import React from 'react';
import styles from './styles';
import { Icons } from '../../assets';

interface OptionItemProps {
  icon: any;
  name: string;
  onPress: () => void;
  onPressP?: any;
  index: any,
  comments: string,
  time: any
}

const MoreOptionScreen = ({ icon, name, onPress, comments, time }: OptionItemProps) => {

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.container1}>
        <Image
          source={{ uri: icon }}
          style={styles.iconImageSize}
        />
        <View style={styles.textArrange}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.time}> {time} </Text>
          </View>
          <Text style={styles.comments}>{comments} </Text>
          {/* <Text>Reply</Text> */}
        </View>
      </View>
      <View style={{ alignSelf: 'flex-end' }}>
        <Image source={Icons.homeNotification} style={styles.img} />
      </View>
    </TouchableOpacity>
  );
};

export { MoreOptionScreen };
