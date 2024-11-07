import React from "react";

import ProfilePicture from "../profilePicture";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

const Story = ({ imageUri, name }) => {
    return (
        <View>
            <ProfilePicture uri={imageUri} />
            <Text style={styles.title}>{name}</Text>
        </View>
    )
}

export default Story