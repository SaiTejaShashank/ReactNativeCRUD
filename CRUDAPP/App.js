import { StatusBar } from 'expo-status-bar';
import { useState,useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';


import HomeScreen from './app/Screens/HomeScreen';
import {createStore} from 'redux';
import movies from './app/reducers';
import AuthContext from './app/context';
import NavigationApp from './app/navigation/NavigationApp';
import { NavigationContainer } from '@react-navigation/native';


const store=createStore(movies);

export default function App() {

  //const {user}=store.getState();
  const [refresh,setRefresh]=useState(false);

 


  store.subscribe(()=>{
    setRefresh(!refresh);
  })
  return (
    <AuthContext.Provider value={{store}}>
        <NavigationContainer>
      <NavigationApp/>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}


