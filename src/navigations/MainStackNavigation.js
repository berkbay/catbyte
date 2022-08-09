import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from "../screens/HomeScreen";
import NewUser from "../screens/NewUser";
import UserDetailScreen from "../screens/UserDetailScreen";

const Stack = createNativeStackNavigator();

function MainStackNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Profile" screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="UserDetail" component={UserDetailScreen} UserDetailScreen/>
                <Stack.Screen name="NewUser" component={NewUser} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MainStackNavigation;
