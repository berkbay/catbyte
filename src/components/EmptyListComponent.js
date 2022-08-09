import {Image, Text, View} from "react-native";
import React from "react";
import {styles} from "./Styles";

const EmptyListComponent = ({error}) => {
    return(
        <View style={{alignItems:'center'}}>
            <Text style={styles.emptyListErrorText}>
                {error}
            </Text>
        </View>
    );
}

export default EmptyListComponent;
