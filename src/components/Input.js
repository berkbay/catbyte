import React from "react";
import {TextInput} from "react-native";
import {styles} from "./Styles";

const Input = ({placeholder, setText}) => {
    return(
        <TextInput
            style={styles.textInputNewUser}
            onChangeText={(text) => setText(text)}
            placeholder={placeholder}
        />
    );
}

export default Input
