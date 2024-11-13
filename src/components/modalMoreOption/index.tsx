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

interface OptionItemProps {
  icon: any;
  name: string;
  onPress: () => void;
  onPressP ?: any;
  index:any,
  comments:string
}

const MoreOptionScreen = ({ icon, name, onPress,comments}: OptionItemProps) => {

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.container1}>
        <Image
          source={icon}
          style={styles.iconImageSize}
        />
        <View style={styles.textArrange}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.comments}> {comments} </Text>

        </View>
      </View>
    </TouchableOpacity>
  );
};

export {MoreOptionScreen};
