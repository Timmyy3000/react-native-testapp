import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


const styles = StyleSheet.create({
    input : {
        height: 60,
        padding : 8,
        fontSize :16
    },
    btn : {
        backgroundColor : '#c2bad8',
        padding : 9,
        margin: 5,
    },
    btnText : {
        color : 'darkslateblue',
        fontSize : 20,
        textAlign : 'center'
    }
})

const AddItem = ({addItem}) => {

    const [text, setText] = useState('')

    const onChange = (textValue) => {
        setText(textValue)
    }


    return (
        <View>
            <TextInput placeholder= "New Item ..." style = {styles.input} onChangeText = {onChange}/>
            <TouchableOpacity style= {styles.btn} onPress = {() => {addItem(text)}}>
                <Text style= {styles.btnText}> <FontAwesome name="plus" size={24} color="black" />  Add Item</Text>
            </TouchableOpacity>
        </View>
    );
}

export default AddItem;