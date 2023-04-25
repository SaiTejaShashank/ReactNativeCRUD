import React,{useState,useContext} from 'react';

import { Text,Button,View,TextInput } from 'react-native';

import Screen from '../components/Screen';

import AuthContext from '../context';
import { updateUser } from '../actions';



function UpdateScreen({route,navigation}) {

    const [title,setTitle]=useState();
    const [body,setBody]=useState();

    const {store}=useContext(AuthContext);


    const {id}=route.params;
    console.log(id);
    
    return (
        <Screen>
             <View style={{flexDirection:"row",padding:10}}>
                <Text style={{fontSize:16,marginRight:10}}>Title</Text>
                 <TextInput style={{borderWidth:1,width:"100%"}} onChangeText={text => setTitle(text)}></TextInput>
            </View>
            <View style={{flexDirection:"row",padding:10}}>
                <Text style={{fontSize:16,marginRight:10}}>Body</Text>
            <TextInput onChangeText={text => setBody(text)} style={{borderWidth:1,width:"100%"}} ></TextInput>
            </View>
            <Button title={'Submit'} onPress={()=>{store.dispatch(updateUser({title:title,body:body,id:id}));navigation.navigate('Home')}}/>
        </Screen>
    );
}

export default UpdateScreen;