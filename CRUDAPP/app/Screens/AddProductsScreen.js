import React,{useState,useContext} from 'react';
import { TextInput,Text,View,Button } from 'react-native';
import Screen from '../components/Screen';

import AuthContext from '../context';
import { createUser } from '../actions';


function AddProductsScreen({navigation}) {

    const [title,setTitle]=useState();
    const [body,setBody]=useState();
    const [id,setID]=useState();
    const {store}=useContext(AuthContext);
    return (
        <Screen>
            <View>
                <Text>Title</Text>
            <TextInput onChangeText={text => setTitle(text)}></TextInput>
            </View>
            <View>
                <Text>Body</Text>
            <TextInput onChangeText={text => setBody(text)}></TextInput>
            </View>
            <View>
                <Text>id</Text>
            <TextInput onChangeText={text => setID(text)}></TextInput>
            </View>
            <Button title={'Submit'} onPress={()=>{store.dispatch(createUser({title:title,body:body,id:id}));navigation.navigate('Home')}}/>
        </Screen>
    );
}

export default AddProductsScreen;