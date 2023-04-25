import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";

import HomeScreen from '../Screens/HomeScreen'
import AddProductsScreen from '../Screens/AddProductsScreen';
import UpdateScreen from '../Screens/UpdateScreen';

const St=createStackNavigator();

function NavigationApp(props) {
    return (
        <St.Navigator  initialRouteName="Home">
        <St.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
        <St.Screen name="Patient" component={AddProductsScreen} options={{headerShown:false}}/>
        <St.Screen name="Update" component={UpdateScreen} options={{headerShown:false}}/>
    </St.Navigator>    
    );
}

export default NavigationApp;




