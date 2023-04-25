import React,{useEffect, useState,useContext} from 'react';
import { View,Text, FlatList, Button, TouchableHighlight } from 'react-native';

import Screen from '../components/Screen';
import Table from '../components/Table';
import AuthContext from '../context';
import { addUser } from '../actions';

function HomeScreen({navigation}) {

    const [data,setData]=useState([]);
    const {store}=useContext(AuthContext);

    const {user}=store.getState();

    useEffect(()=>{
            fetchApi();
            //console.log(data);
            console.log(user);
    },[]);

    var temp=[];
    const fetchApi= ()=>{

    fetch('https://jsonplaceholder.typicode.com/posts',{
        method:"GET",
        headers:{
            'Content-Type':'application/json'
        },
    })
  .then((response) => response.json())
  .then((json) => {
   //console.log(json)

  json.forEach(element => {
            //console.log(element);

           details=[]

                details.push({
                id: element.id,
                title: element.title,
                userId: element.userId,
                body: element.body,
                })

               //console.log(details[0]);
               
               //setData([...details]);
                temp.push(details[0]);
              
             
           /*     
            })

            aartiTypeArray.push({key:element.name,passData:aartiDetails})*/

        })

        store.dispatch(addUser([...temp]));
       //setData([...temp]);

       //console.log(...details);


           
  })
}

  

    return (
        <Screen style={{flex:1}}>


            <TouchableHighlight onPress={()=>{navigation.navigate('Patient')}}>
                <View style={{backgroundColor:"red",alignItems:"center",borderColor:"green",borderWidth:1,margin:20}}>
                    <Text>Add Products</Text>
                </View>
            </TouchableHighlight>

            
              <FlatList
               data={user}
               keyExtractor={item=>item.id.toString()}
               renderItem={({item})=>( <Table title={item.title} id={item.id} body={item.body} navigation={navigation}/>)}
               />

               
        </Screen>
    );
}

export default HomeScreen;