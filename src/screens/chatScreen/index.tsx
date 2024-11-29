import React, { useCallback, useEffect, useRef, useState } from "react";
import { Dimensions, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Icons } from "../../assets";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GiftedChat, InputToolbar, Message } from "react-native-gifted-chat";
import RBSheet from "react-native-raw-bottom-sheet";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import styles from "./styles";

const ChatScreen = ({ route, navigation }: any) => {
    const user = route.params.users;
    const chatId = route.params.users.id;
    const [messages, setMessages]: any = useState([{}]);
    const refRBSheet: any = useRef();
    const [inputText, setinputText] = useState('');
    const [imageUri, setImageUri]: any = useState();

    const handleTakePhoto = () => {
        console.log('launch camera');
        launchCamera({ mediaType: 'photo', quality: 1 }, (response: any) => {
            console.log('launch camera');

            if (response.assets && response.assets[0]) {
                setImageUri(response.assets[0].uri);
                // console.log(imageUri, "image uri")
            }
        });
    }
    const openGallery = () => {
        console.log("gallery");
        launchImageLibrary({ mediaType: 'photo', quality: 1 }, (response: any) => {
            // console.log(response,'dsadadasda');
            if (response.assets && response.assets[0]) {
                // console.log(imageUri, "imageuri")
                setImageUri(response.assets[0].uri);
            }
        });
    }
    useEffect(() => {
        const loadMessages = async () => {
            const storedMessages = await AsyncStorage.getItem(`messages_${chatId}`);
            if (storedMessages) {
                setMessages(JSON.parse(storedMessages));
            } else {
                setMessages([{
                    _id: 1,
                    text: 'Hello developer',
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: 'React Native',
                    },
                }]);
            }
        };
        loadMessages();
    }, [chatId]);

    const onSend = async (message: Message[] = []) => {
        setMessages(previousMessages => {
            const updatedMessages = GiftedChat.append(previousMessages, message);
            AsyncStorage.setItem(`messages_${chatId}`, JSON.stringify(updatedMessages));
            return updatedMessages;
        });
        setinputText('');
    };
    const renderActions = () => {
        return (
            <TouchableOpacity style={styles.actionButton} onPress={handleTakePhoto}>
                <Image source={Icons.camera2} style={styles.actionIcon} />
            </TouchableOpacity>
        );
    };
    const renderMessage = (props: any) => {
        const { currentMessage } = props;
        const isUserMessage = currentMessage.user._id === 1;
        const messageTime = new Date(currentMessage.createdAt).toLocaleTimeString([], {
            hour: '2-digit', minute: '2-digit'
        });
        return (
            <View style={{ marginHorizontal: 10 }}>
                <TouchableOpacity style={[styles.messageView, {
                    alignSelf: isUserMessage ? 'flex-end' : 'flex-start',
                    backgroundColor: isUserMessage ? '#0084ff' : '#f0f0f0',
                }]}>
                    <Text style={[styles.messageText, { color: isUserMessage ? 'white' : 'black' }]}>
                        {currentMessage.text}
                    </Text>
                    {currentMessage.reaction && (
                        <View style={[styles.reactionView, {
                            right: isUserMessage ? 0 : 'auto', top: isUserMessage ? '100%' : '100%',
                        }]}>
                            <Text style={{ color: isUserMessage ? 'white' : 'black' }}>
                                {currentMessage.reaction}
                            </Text>
                        </View>
                    )}
                </TouchableOpacity>
                <Text style={[styles.timeTextView, { textAlign: isUserMessage ? 'right' : 'left' }]}>
                    {messageTime}
                </Text>
            </View>
        );
    };
    const renderSend = (props: any) => {
        return (
            <>
            <TouchableOpacity
                style={styles.sendButton}
                onPress={() => {
                    const messageText = inputText.trim();
                    if (messageText && messageText.trim()) {
                        onSend([{
                            _id: Math.floor(Math.random() * 100000),
                            text: inputText,
                            createdAt: new Date(),
                            user: {
                                _id: 1,
                                name: 'Current User',
                            },
                        }]);
                    }
                }}>
                    <Image source={Icons.share} style={styles.sendIcon} />
            </TouchableOpacity>
                <View style={{ flexDirection: 'row' ,alignSelf:'center',marginRight:10}}>
                    <TouchableOpacity>
                    <Image source={Icons.mic} style={styles.sendIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={openGallery}>
                    <Image source={Icons.gallery} style={styles.sendIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Image source={Icons.saveChat} style={styles.sendIcon} />
                    </TouchableOpacity>
                    {/* <Image source={Icons.add_button} style={styles.sendIcon} /> */}
                </View>
            </>
        );
    };
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={Icons.back} style={styles.backIcon} />
                </TouchableOpacity>
                <View style={styles.userInfo}>
                    <Image source={user.imageUri}/>
                    <Text style={styles.userName}>{user.user}</Text>
                </View>
                <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => refRBSheet.current.open()}>
                    <Image source={Icons.call} style={styles.notificationIcon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => refRBSheet.current.open()}>
                    <Image source={Icons.videoCall} style={styles.notificationIcon} />
                </TouchableOpacity>
                </View>
            </View>
            <GiftedChat
                messages={messages}
                onSend={messages => onSend(messages)}
                user={{ _id: 1, name: 'Current User' }}
                placeholder="Type a message..."
                alignTop={true}
                onInputTextChanged={setinputText}
                text={inputText}
                renderInputToolbar={props => <InputToolbar containerStyle={styles.inputToolbar} {...props} />}
                renderActions={renderActions}
                renderMessage={renderMessage}
                renderSend={renderSend}
            />
            <RBSheet
                ref={refRBSheet}
                height={250}
                openDuration={250}
                closeDuration={250}
                customStyles={{
                    container: styles.bottomSheetContainer,
                    wrapper: styles.bottomSheetWrapper,
                }}
            >
                <View style={styles.RBContainer}>
                    <TouchableOpacity style={styles.RBContainerItem}>
                        <Image source={Icons.home} style={styles.eyeIcon} />
                        <Text style={styles.RBtext}>View details</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.RBContainerItem}>
                        <Image source={Icons.home} style={styles.pinIcon} />
                        <Text style={styles.RBtext}>Pin Chat</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.RBContainerItem}>
                        <Image source={Icons.home} style={styles.searchIcon} />
                        <Text style={styles.RBtext}>Search Chat</Text>
                    </TouchableOpacity>
                </View>
            </RBSheet>
        </SafeAreaView>
    );
};
export default ChatScreen;
