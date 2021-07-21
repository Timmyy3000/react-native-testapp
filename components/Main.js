import React, { useState } from 'react'
import { View, Text, StyleSheet, FlatList, Alert} from 'react-native';
import uuid from 'react-native-uuid';
import Header from './Header';
import ListItem from '../components/ListItem'
import AddItem from './AddItem';

const styles = StyleSheet.create({
   
  });


  

  


const Main = ({ title }) => {

    const [items, setItems] = useState([
        {id : uuid.v4(), text : 'Milk'},
        {id : uuid.v4(), text : 'Eggs'},
        {id : uuid.v4(), text : 'Bread'},
        {id : uuid.v4(), text : 'Juice'},
    ])


    const deleteItem = (id) => {
        setItems(prevItems => {
            return prevItems.filter(item => item.id != id)
        })
    };


    const addItem = (text) => {

        if (!text) {
            Alert.alert(
                "Error", 'Please enter an item',[{text : 'Ok', style : "cancel"}]
              )
        } else {
            setItems(prevItems => {
            return [{id : uuid.v4(), text}, ...prevItems];
        })
        }
        
    };


    return (
        <View >
            <Header title = "Shopping List" />
            <FlatList 
                data = {items}

                renderItem= {({item}) => (
                    <ListItem item = {item} deleteItem = {deleteItem}/>
                )}

            />
            <AddItem  addItem = {addItem}/>
        </View>
    );
}


export default Main;