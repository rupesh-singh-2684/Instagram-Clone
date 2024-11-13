import React from "react";
import ProfilePicture from "../profilePicture";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const Story = ({ story }: any) => {

    const {
        user:{
            id,
            imageUri,
            name
        }
    } = story

    const navigation = useNavigation()
    const onPress = () => {
        navigation.navigate("StoryScreen", {userId:id});
    }

    return (
        <TouchableOpacity style={styles.container} onPress={onPress} >
            <ProfilePicture uri={imageUri} />
            <Text style={styles.title}>{name}</Text>
        </TouchableOpacity>
    )
}

export default Story