import React,{useContext} from 'react';
import { StyleSheet,View,Text, Button, TouchableHighlight } from 'react-native';
import AuthContext from '../context';
import { deleteUser } from '../actions';

function Table({title,id,body,navigation}) {

    const {store}=useContext(AuthContext);
    return (
        <View  style={styles.tableContainer}>
            <View style={styles.tableText}><Text styles={styles.text}>{id}</Text></View>
            <View style={[styles.tableText,{flex:1.2}]}><Text  styles={styles.text}>{title}</Text></View>
            <View style={[styles.tableText,{flex:1.5}]}><Text styles={styles.text}>{body}</Text></View>
            

            <TouchableHighlight onPress={()=>{store.dispatch(deleteUser(id));}}>
                <View style={{borderWidth:1,borderColor:"blue"}}><Text style={{color:"yellow",fontSize:16,padding:5}}>delete</Text></View>
            </TouchableHighlight>

            <TouchableHighlight onPress={()=>{navigation.navigate('Update',{id:id})}}>
                <View style={{marginLeft:10,borderWidth:1,borderColor:"black",marginRight:10}}><Text style={{color:"green",fontSize:16,padding:5}}>Update</Text></View>
            </TouchableHighlight>
        </View>
    );
}


const styles = StyleSheet.create({
    tableContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginHorizontal:20,
        backgroundColor:"pink",
        alignItems:"center"
    },
    tableText:{
        padding:10
    },
    text:{
        fontSize:16,

    }
    })


export default Table;