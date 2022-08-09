import React, {useCallback} from "react";
import {
    View,
    SafeAreaView,
    Text,
    FlatList,
    TouchableOpacity
} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getUser} from "../store/actions/UserAction";
import CustomHeader from "../components/CustomHeader";
import Loading from "../components/Loading";
import HomeCardComponent from "../components/HomeCardComponent";
import EmptyListComponent from "../components/EmptyListComponent";
import {styles} from "../components/Styles";

const HomeScreen = ({navigation, route}) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUser())
    },[])

    const onRefresh = useCallback(() => {
        dispatch(getUser())
    },[])

    const {loading, data, error} = useSelector(state => state.users)

    return (
        <SafeAreaView style={{flex:1}}>
            {loading === true ? <Loading/> :
                <View style={{flex:1, marginHorizontal:20}}>
                    <CustomHeader navigation={navigation} name={'Home Page'} route={route.name}/>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        numColumns={2}
                        data={data.users}
                        renderItem={({item, index}) =>
                            <HomeCardComponent item={item} navigation={navigation}/>
                        }
                        keyExtractor={(item, index) => index.toString()}
                        ListEmptyComponent={
                            <EmptyListComponent
                                error={error}
                            />
                        }

                        onRefresh={() => onRefresh()}
                        refreshing={loading}
                    />
                    <TouchableOpacity
                        onPress={() => navigation.navigate('NewUser')}
                        style={styles.newUserButtonContainer}
                    >
                        <Text style={styles.newUserButtonText}>AddNewUser</Text>
                    </TouchableOpacity>
                </View>
            }
        </SafeAreaView>
    );
}


export default HomeScreen;
