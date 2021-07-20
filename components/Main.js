import React, { useState } from 'react'
import { View, Text, StyleSheet, FlatList} from 'react-native';
import uuid from 'react-native-uuid';
import Header from './Header';
import ListItem from '../components/ListItem'

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


    return (
        <View >
            <Header title = "Shopping List" />
            <FlatList 
                data = {items}

                renderItem= {({item}) => (
                    <ListItem item = {item} deleteItem = {deleteItem}/>
                )}

            />
        </View>
    );
}


export default Main;