import {Dimensions, Image, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {styles} from "./Styles";

const HomeCardComponent = ({item, navigation}) => {
    return(
        <TouchableOpacity onPress={() => navigation.navigate('UserDetail', item)} style={styles.homeCardContainer}>
            <Image source={{uri: item.image}} style={styles.homeCardImage}/>
            <View style={styles.homeCardBodyContainer}>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Text style={styles.homeCardItemText}>{item.firstName} {item.lastName}</Text>
                </View>
                <Text style={[styles.homeCardItemText, {fontWeight:'400'}]}>{item.company.name}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default HomeCardComponent
