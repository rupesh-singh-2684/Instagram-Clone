import React, { useRef, useState } from 'react';
import {View,Text,TextInput,StyleSheet,Image,TouchableOpacity,ScrollView,SafeAreaView,Dimensions,FlatList,} from 'react-native';
import styles from './styles';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import RBSheet from 'react-native-raw-bottom-sheet';
import { Icons, Images } from '../../assets';


const EditProfile = ({ navigation }: any) => {

    const [name, setName] = useState("")
    const [userName, setUserName] = useState("")
    const [bio, setBio] = useState("")
    const [imageUri, setImageUri] = useState("")
    const [removeDp, setRemoveDp] = useState("")

    const handleBack = () => {
        navigation.navigate('Profile', { name, userName, bio, imageUri })
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
    };
    const handleTakePhoto = () => {
        console.log('launch camerafghjkjhgfgjikjhghj');
        launchCamera({ mediaType: 'photo', quality: 1 }, (response: any) => {
            console.log('launch camera');

            if (response.assets && response.assets[0]) {
                setImageUri(response.assets[0].uri);
                // console.log(imageUri, "image uri")
            }
        });
    }
    const handleRemove =() =>{
        setImageUri(0)
    }
    const refRBSheet = useRef<any>();

    const handleMoreOption = () => {
        refRBSheet.current.open();
    };
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={handleBack}>
                    <Text style={styles.backButton}>{'<'}</Text>
                </TouchableOpacity>
                <Text style={styles.title}>Edit Profile</Text>
                <TouchableOpacity>
                    <Text style={styles.backButton}>{ }</Text>
                </TouchableOpacity>
            </View>

            <ScrollView>
                <View style={styles.profileSection}>
                    <Image
                        style={styles.profileImage}
                        source={imageUri ? { uri: imageUri } : Images.profileImage2}
                    />
                    <TouchableOpacity onPress={handleMoreOption}>
                        <Text style={styles.editPicture}>Edit picture or avatar</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Name</Text>
                    <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={setName}/>

                    <Text style={styles.label}>Username</Text>
                    <TextInput style={styles.input} placeholder="Username" value={userName} onChangeText={setUserName}/>

                    <Text style={styles.label}>Pronouns</Text>
                    <TextInput style={styles.input} placeholder="Pronouns" />

                    <Text style={styles.label}>Bio</Text>
                    <TextInput
                        style={[styles.input, styles.bioInput]}
                        placeholder="Bio"
                        multiline
                        value={bio}
                        onChangeText={setBio}
                        defaultValue='...'
                    />

                    <Text style={styles.label}>Links</Text>
                    <TextInput style={styles.input} placeholder="Links" />

                    <Text style={styles.label}>Banners</Text>
                    <TextInput style={styles.input} placeholder="Banners" />

                    <Text style={styles.label}>Gender</Text>
                    <TextInput style={styles.input} placeholder="Gender" defaultValue="Male" />
                </View>

                <View style={styles.profileInfoSection}>
                    <Text style={styles.infoHeader}>Profile Information</Text>

                    <View style={styles.infoRow}>
                        <Text style={styles.infoLabel}>Page</Text>
                        <TouchableOpacity>
                            <Text style={styles.infoValue}>Connect or Create</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.infoRow}>
                        <Text style={styles.infoLabel}>Category</Text>
                        <TouchableOpacity>
                            <Text style={styles.infoValue}>Photographer</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.infoRow}>
                        <Text style={styles.infoLabel}>Contact options</Text>
                        <TouchableOpacity>
                            <Text style={styles.infoValue}>Address</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.infoRow}>
                        <Text style={styles.infoLabel}>Action buttons</Text>
                        <TouchableOpacity>
                            <Text style={styles.infoValue}>None active</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.infoRow}>
                        <Text style={styles.infoLabel}>Profile display</Text>
                        <TouchableOpacity>
                            <Text style={styles.infoValue}>All hidden</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>


            <RBSheet
                ref={refRBSheet}
                closeOnPressMask
                useNativeDriver={false}
                draggable={true}
                height={Dimensions.get('window').height / 4}
                style={{ overflow: 'hidden' }}
                customStyles={{
                    wrapper: {
                        backgroundColor: 'rgba(0,0,0,0.5)',
                    },
                    draggableIcon: {
                        backgroundColor: '#E5E5E5',
                        width: '12%',
                    },
                    container: {
                        borderRadius: 20,
                        marginTop: 'auto',
                    },
                }}
                onClose={() => console.log('Bottom Sheet closed')}>

                <View> 
                <TouchableOpacity style={styles.container2} onPress={openGallery}>
                    <View style={styles.container1}>
                        <Image
                            source={Icons.images}
                            style={styles.iconImageSize}
                        />
                        <View style={styles.textArrange}>
                                <Text style={styles.name}>Upload From Gallery</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.container2} onPress={handleTakePhoto}>
                    <View style={styles.container1}>
                        <Image
                            source={Icons.camera}
                            style={styles.iconImageSize}
                        />
                        <View style={styles.textArrange}>
                                <Text style={styles.name}>Open Camera</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.container2} onPress={handleRemove}>
                    <View style={styles.container1}>
                        <Image
                            source={Icons.trash}
                            style={styles.iconImageSize}
                        />
                        <View style={styles.textArrange}>
                                <Text style={styles.name}>Remove Icon</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                </View>
            </RBSheet>
        </SafeAreaView>
    );
};



export default EditProfile;