/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useState} from 'react';
import {View, Text, Dimensions, TouchableOpacity, Image} from 'react-native';
import Video from 'react-native-video';
import { Icons } from '../../assets';
import { SafeAreaView } from 'react-native-safe-area-context';

const SingleReel = ({item, index, currentIndex}:any) => {

  const videoRef = useRef(null);

  const [mute, setMute] = useState(false);

  const [like, setLike] = useState(item.isLike);

  return (
    <View style={{height:Dimensions.get('window').height,bottom:80}}>
      <View
        style={{
          width: Dimensions.get('window').width,
          height:   Dimensions.get('window').height,
          position: 'relative',
          justifyContent: 'center',
          alignItems: 'center',
        //   marginVertical:20
          
        }}>
        <TouchableOpacity activeOpacity={0.9} onPress={() => setMute(!mute)}
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
          }}>
          <Video
            videoRef={videoRef}
            repeat={true}
            resizeMode="cover"
            paused={currentIndex === index ? false : true}
            source={{uri:item.videoUri}}
            muted={mute}
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
            }}
          />
        </TouchableOpacity>
        <View
          style={{
            position: 'absolute',
            width: '100%',
            // zIndex: 1,
            bottom: 0,
            // justifyContent:'flex-end',
            padding: 10,
            // alignItems:'flex-end'
          }}>
          <View style={{}}>
            <TouchableOpacity style={{width: 150}}>
              <View
                style={{
                  width: 100,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    width: 30,
                    height: 32,
                    borderRadius: 50,
                    backgroundColor: 'white',
                    margin: 10,
                  }}>
                  <Image
                    source={item.user.imageUri}
                    style={{
                      width: '100%',
                      height: '100%',
                      resizeMode: 'cover',
                      borderRadius: 50,
                    }}
                  />
                </View>
                <Text style={{color: 'white', fontSize: 16}}>{item.title}</Text>
              </View>
            </TouchableOpacity>
            <Text style={{color: 'white', fontSize: 14, marginHorizontal: 10}}>
              {item.captions}
            </Text>
            <View style={{flexDirection: 'row', padding: 10}}>
              <Text style={{color: 'white'}}>Original Audio</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: 10,
            right: 0,
          }}>
          <TouchableOpacity
            onPress={() => setLike(!like)}
            style={{padding: 10}}>
            <Image
              source={
                like
                  ? Icons.heart
                  : Icons.homeNotification
              }
              style={{height:23,width:23,tintColor:'white'}}
            />
            <Text style={{color: 'white'}}>{item.likeCounts}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{padding: 10}}>
            <Image
              source={Icons.comments}
              style={{
                width: 24,
                height: 25,
                tintColor: 'white',
                resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{padding: 10}}>
            <Image
              source={Icons.share}
              style={{
                width: 24,
                height: 25,
                tintColor: 'white',
                resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{padding: 10}}>
            <Image
              source={Icons.threeDots}
              style={{
                width: 30,
                height: 30,
                tintColor: 'white',
                // resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>
          <View
            style={{
              width: 30,
              height: 30,
              borderRadius: 10,
              borderWidth: 2,
              borderColor: 'white',
              margin: 10,
            }}>
            <Image
              source={item.user.imageUri}
              style={{
                width: '100%',
                height: '100%',
                borderRadius: 10,
                resizeMode: 'cover',
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default SingleReel;