import React, {useCallback, useEffect, useState} from "react";
import {Text, SafeAreaView, View, Image, FlatList, Dimensions} from "react-native";
import CustomHeader from "../components/CustomHeader";
import Loading from "../components/Loading";
import TextContainerItem from "../components/TextContainerItem";
import {styles} from "../components/Styles";

const UserDetailScreen = ({route ,navigation}) => {
    const item = route.params

    return (
        <SafeAreaView style={{flex:1}}>
            <CustomHeader navigation={navigation} name={`User Detail`}/>
            <View style={{flex:1, marginHorizontal:20}}>
                <Image source={{uri: item.image}} style={styles.userDetailImage}/>
                <View style={{marginVertical:10}}>
                    <TextContainerItem title={'Name'} name1={item.firstName} name2={item.lastName}/>
                    <TextContainerItem title={'Age'} info={item.age}/>
                    <TextContainerItem title={'Company Name'} info={item.company.name}/>
                    <TextContainerItem title={'Company Address'} info={item.company.address.address}/>
                    <TextContainerItem  info={`${item.company.address.city}, ${item.company.address.postalCode}, ${item.company.address.state} `}/>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default UserDetailScreen;

