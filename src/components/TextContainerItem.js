import {Text, View} from "react-native";
import React from "react";
import {styles} from "./Styles";

const TextContainerItem = ({title,name1, name2, info}) => {
    return(
        <View style={styles.textContainerItemContainer}>
            {!!title ? <Text style={styles.textContainerInfoText}>{title}:</Text> : null}
            {!!name1 ? <Text style={styles.textContainerUserText}> {name1} {name2}</Text>
                : <Text style={styles.textContainerUserText}> {info}</Text>
            }
        </View>
    );
}

export default TextContainerItem
