import React, {useCallback, useEffect, useState} from "react";
import {Text, SafeAreaView, View, Image, FlatList, TextInput} from "react-native";
import CustomHeader from "../components/CustomHeader";
import {useDispatch, useSelector} from "react-redux";
import {getEpisodeDetail} from "../store/actions/UserAction";
import Loading from "../components/Loading";
import Input from "../components/Input";


const NewUser = ({navigation, route}) => {

    const [imageUrl, setImageUrl] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [company, setCompany] = useState('')

    const dispatch = useDispatch()

    return (
        <SafeAreaView style={{flex:1}}>
            <CustomHeader navigation={navigation} name={`Add New User`}/>
            <View style={{flex:1, marginHorizontal:20}}>
                <Input placeholder={'Image URL'} setText={setImageUrl}/>
                <Input placeholder={'First Name'} setText={setFirstName}/>
                <Input placeholder={'Last Name'} setText={setLastName}/>
                <Input placeholder={'Company Name'} setText={setCompany}/>
            </View>

        </SafeAreaView>
    );
}

export default NewUser;

