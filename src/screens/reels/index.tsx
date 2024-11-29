import React from 'react';
import {View, Text, Dimensions, Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ReelsComponent from '../../components/reels';
import { Icons } from '../../assets';

const ReelsScreen = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
    <View style={{
      width: Dimensions.get('window').width,
      height:   Dimensions.get('window').height,
        position: 'relative',
        backgroundColor: 'black',
      }}>
      <View style={{
          height:80,
        width: Dimensions.get('window').width,
          // width:SCREEN_WIDTH,
          position: 'absolute',
          flexDirection: 'row',
          justifyContent: 'space-between',
          zIndex: 1,
          paddingHorizontal: 20,
          alignItems:'flex-end',
          // backgroundColor:'red',
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
          Reels
        </Text>
        <Image source={Icons.camera}
          style={{
            width: 24,
            height: 24,
            tintColor: 'white',
            resizeMode: 'contain',
          }}
        />
      </View>
          <ReelsComponent/>
    </View>
  );
};

export default ReelsScreen;